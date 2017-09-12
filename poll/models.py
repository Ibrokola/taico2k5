from django.db import models, transaction
from django.utils.translation import ugettext_lazy as _
from django.conf import settings
from django.utils import timezone
from django.utils.functional import cached_property
from django.db.models import F, Prefetch
from django.apps import apps


# from comment.models import Comment



class PollMode(object):

    DEFAULT, SECRET = range(2)
    LIST = (
        (DEFAULT, 'default'),
        (SECRET, 'secret')
    )
    BY_ID = dict(LIST)
    BY_NAME = dict((name, id_) for id_, name in LIST)


class CommentPollQuerySet(models.QuerySet):

    def unremoved(self):
        return self.filter(is_removed=False)

    def for_comment(self, comment):
        return self.filter(comment=comment)

    def with_choices(self):
        choice_model = apps.get_model('CommentPollChoice')

        visible_choices = choice_model.objects.unremoved()
        prefetch_choices = Prefetch("poll_choices", queryset=visible_choices, to_attr='choices')
        return self.prefetch_related(prefetch_choices)


# class CommentPollManager(models.Manager):
#     def get_queryset(self):
#         return CommentPollQuerySet(self.model, using=self._db)

#     def unremoved(self):
#         return self.get_queryset().unremoved()

#     def for_comment(self, comment):
#         return self.get_queryset().for_comment(comment=comment)

#     def with_choices(self):
#         return self.get_queryset().with_choices()



class CommentPoll(models.Model):

    comment = models.ForeignKey('comment.Comment', related_name='comment_polls')

    name = models.CharField(_("name"), max_length=255)
    title = models.CharField(_("title"), max_length=255, blank=True)
    choice_min = models.PositiveIntegerField(_("choice min"), default=1)
    choice_max = models.PositiveIntegerField(_("choice max"), default=1)
    mode = models.IntegerField(_("mode"), choices=PollMode.LIST, default=PollMode.DEFAULT)
    close_at = models.DateTimeField(_("auto close at"), null=True, blank=True)
    is_removed = models.BooleanField(default=False)
    created_at = models.DateTimeField(default=timezone.now)

    objects = CommentPollQuerySet.as_manager()
    # objects = CommentPollManager()


    class Meta:
        unique_together = ('comment', 'name')
        ordering = ['pk', ]
        verbose_name = _("comment poll")
        verbose_name_plural = _("comments polls")

    def get_absolute_url(self):
        return self.comment.get_absolute_url()

    # To remove
    def get_rel_url(self, request):
        query_string = get_query_string(request, show_poll=0)
        return ''.join((request.path, '?', query_string, '#p', str(self.pk)))

    @property
    def is_multiple_choice(self):
        return self.choice_max > 1

    @property
    def has_choice_min(self):
        return self.choice_min > 1

    @property
    def is_closed(self):
        return self.close_at and self.close_at <= timezone.now()

    @property
    def is_secret(self):
        return self.mode == PollMode.SECRET

    @property
    def can_show_results(self):
        return not self.is_secret or self.is_closed

    @property
    def mode_txt(self):
        return PollMode.BY_ID[self.mode]

    @cached_property
    def has_user_voted(self):
        # *choices* is dynamically created by comments.with_polls()
        try:
            return any(c.vote for c in self.choices)
        except AttributeError:
            return

    @cached_property
    def total_votes(self):
        # *choices* is dynamically created by comments.with_polls()
        try:
            return sum(c.vote_count for c in self.choices)
        except AttributeError:
            return

    @classmethod
    def update_or_create_many(cls, comment, polls_raw):
        cls.objects.for_comment(comment).update(is_removed=True)

        default_fields = [
            'title',
            'choice_min',
            'choice_max',
            'close_at',
            'mode'
        ]

        if not polls_raw:  # Avoid the later transaction.atomic()
            return
        
        with transaction.atomic():  # Speedup
            for poll in polls_raw:
                defaults = {
                    field: poll[field]
                    for field in default_fields
                    if field in poll
                }
                defaults.update({'is_removed': False})

                cls.objects.update_or_create(
                    comment=comment,
                    name=poll['name'],
                    defaults=defaults
                )






class CommentPollChoiceQuerySet(models.QuerySet):

    def unremoved(self):
        return self.filter(is_removed=False)

    def for_comment(self, comment):
        return self.filter(poll__comment=comment)

    def for_poll(self, poll):
        return self.filter(poll=poll)

    def for_voter(self, voter):
        return self.filter(
            choice_votes__voter=voter,
            choice_votes__is_removed=False
        )

    def for_vote(self, poll, voter):
        return self.for_poll(poll).for_voter(voter).unremoved()

# class CommentManager(models.Manager):
#     def get_queryset(self):
#         return CommentPollChoiceQuerySet(self.model, using=self._db)
    
#     def unremoved(self):
#         return self.get_queryset().unremoved()

#     def for_comment(self, comment):
#         return self.get_queryset().for_comment(comment)

#     def for_poll(self, poll):
#         return self.get_queryset().for_poll(poll)

#     def for_voter(self, voter):
#         return self.get_queryset().for_voter(voter)

#     def for_vote(self, poll, voter):
#         return self.get_queryset().for_vote(poll, voter)


class CommentPollChoice(models.Model):
    poll = models.ForeignKey(CommentPoll, related_name='poll_choices')
    number = models.PositiveIntegerField(_("number"))
    description = models.CharField(_("choice description"), max_length=255)
    vote_count = models.PositiveIntegerField(_("vote count"), default=0)
    is_removed = models.BooleanField(default=False)

    objects = CommentPollChoiceQuerySet.as_manager()

    class Meta:
        unique_together = ('poll', 'number')
        ordering = ['number', '-pk']
        verbose_name = _("poll choice")
        verbose_name_plural = _("poll choices")

    @property
    def vote(self):
        # *votes* is dynamically created by comments.with_polls()
        try:
            assert len(self.votes) <= 1, "Panic, too many votes"
            return self.votes[0]
        except (AttributeError, IndexError):
            return

    @property
    def votes_percentage(self):
        try:
            return (self.vote_count / self.poll.total_votes) * 100
        except ZeroDivisionError:
            return 0

    @classmethod
    def increase_vote_count(cls, poll, voter):
        cls.objects.for_vote(poll=poll, voter=voter).update(vote_count=F('vote_count') + 1)

    @classmethod
    def decrease_vote_count(cls, poll, voter):
        cls.objects.for_vote(poll=poll, voter=voter).update(vote_count=F('vote_count') - 1)

    @classmethod
    def update_or_create_many(cls, comment, choices_raw):
        cls.objects.for_comment(comment).update(is_removed=True)

        if not choices_raw:  # Avoid the later transaction.atomic()
            return

        poll_ids_by_name = dict(
            CommentPoll.objects.for_comment(comment).unremoved().values_list('name', 'id')
        )

        with transaction.atomic():  # Speedup
            for choice in choices_raw:
                cls.objects.update_or_create(
                    poll_id=poll_ids_by_name[choice['poll_name']],
                    number=choice['number'],
                    defaults={
                        'description': choice['description'],
                        'is_removed': False
                    }
                )




class CommentPollVoteQuerySet(models.QuerySet):

    def unremoved(self):
        return self.filter(is_removed=False)

    def for_voter(self, user):
        return self.filter(voter=user)

    def for_choice(self, choice):
        return self.filter(choice=choice)


class CommentPollVote(models.Model):

    voter = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='cp_votes')
    choice = models.ForeignKey(CommentPollChoice, related_name='choice_votes')

    is_removed = models.BooleanField(default=False)
    created_at = models.DateTimeField(default=timezone.now)

    objects = CommentPollVoteQuerySet.as_manager()

    class Meta:
        unique_together = ('voter', 'choice')
        ordering = ['-pk', ]
        verbose_name = _("poll vote")
        verbose_name_plural = _("poll votes")