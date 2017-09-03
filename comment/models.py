from django.db import models

from django.utils.translation import ugettext_lazy as _
from django.core.urlresolvers import reverse
from django.conf import settings 
from django.db.models import F, Q, Prefetch 
from django.utils import timezone 

# from like.models import CommentLike

from topic.models import Topic

COMMENT, MOVED, CLOSED, UNCLOSED, PINNED, UNPINNED = range(6)


ACTION = (
    (COMMENT, _("comment")),
    (MOVED, _("topic moved")),
    (CLOSED, _("topic closed")),
    (UNCLOSED, _("topic unclosed")),
    (PINNED, _("topic pinned")),
    (UNPINNED, _("topic unpinned")),
)


class CommentQuerySet(models.query.QuerySet):
    """custom query set for comment module"""
    def filter(self, *args, **kwargs):
        pass
        # return super(CommentQuerySet, self).filter(*args, **kwargs)\
        #     .select_related('user__st')

    def unremoved(self):
        return self.filter(
            Q(topic__category__parent=None) | Q(topic__category__parent__is_removed=False),
            topic__category__is_removed=False,
            topic__is_removed=False,
            is_removed=False,
            action=0
        )

    def public(self):
        return self.filter(topic__category__is_private=False)

    def visible(self):
        return self.unremoved().public()

    def _access(self, user):
        return self.filter(Q(topic__category__is_private=False) | Q(topic__topics_private__user=user))

    def with_likes(self, user):
        if not user.is_authenticated():
            return self

        user_likes = CommentLike.objects.filter(user=user)
        prefetch = Prefetch("comment_likes", queryset=user_likes, to_attr='likes')
        return self.prefetch_related(prefetch)

    
    # def with_polls(self, user):
    #     visible_polls = CommentPoll.objects.unremoved()
    #     prefetch_polls = Prefetch("polls__poll_choices", queryset=visible_polls, to_attr='choices')

    #     #Choices are attached to polls
    #     visible_choices = CommentPollChoice.objects.unremoved()
    #     prefetch_choices = Prefetch("polls__poll_choices", queryset=visible_choice, to_attr='choices')

    #     if not user.is_authenticated():
    #         return self.prefetch_related(prefetch_polls, prefetch_choices)

    #     #Votes are attached to choices
    #     visible_votes = CommentPollVote.objects.unremoved().for_voter(user)
    #     prefetch_votes = Prefetch("polls__choices__choice_votes", queryset=visible_votes, to_attr='votes')

    #     return self.prefetch_related(prefetch_polls, prefetch_choices, prefetch_votes)
    
    # def for_access(self):
    #     return self.unremoved()._access(user=user)
    
    # def for_update_or_404(self):
    #     if user.is_moderator:
    #         return get_object_or_404(self._access(user=user), pk=pk)
    #     else:
    #         return get_object_or_404(self.for_access(user), user=user, pk=pk)

class CommentManager(models.Manager):
    def get_queryset(self):
        return CommentQuerySet(self.model, using=self._db)
    

class Comment(models.Model):
    """ Comment model """
    author = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='post_comment_author')
    topic = models.ForeignKey(Topic)
    comment = models.TextField(_("comment"))
    comment_html = models.TextField(_("comment html"))
    action = models.IntegerField(_("action"), choices=ACTION, default=COMMENT)
    date = models.DateTimeField(default=timezone.now)
    is_removed = models.BooleanField(default=False)
    is_modified = models.BooleanField(default=False)
    ip_address = models.GenericIPAddressField(blank=True, null=True)
    modified_count = models.PositiveIntegerField(_("modified count"), default=0)
    likes_count = models.PositiveIntegerField(_("likes count"), default=0)

    objects = CommentManager()

    class Meta:
        ordering = ['-date', '-pk']
        verbose_name = _("comment")
        verbose_name_plural = _("comments")

    def get_absolute_url(self):
        return reverse('comment:detail', kwargs={'pk': str(self.id), })

    @property
    def like(self):
        try: 
            assert len(self.likes) <= 1, "Not enough likes"
            return self.likes[0]
        except (AttributeError, IndexError):
            return
    
    def increase_modified_count(self):
        Comment.objects.filter(pk=self.pk).update(modified_count=F('modified_count') + 1)

    def increase_likes_count(self):
        Comment.objects.filter(pk=self.pk).update(likes_count=F('likes_count') + 1)

    def decrease_likes_count(self):
        Comment.objects.filter(pk=self.pk, likes_count__gt=0).update(likes_count=F('likes_count') - 1)

    @classmethod
    def create_moderation_action(cls, user, topic, action):
        return cls.objects.create(
            user=user,
            topic=topic,
            action=action,
            comment="action",
            comment_html="action"
        )

    @classmethod
    def get_last_for_topic(cls, topic_id):
        return (cls.objects.filter(topic_id=topic_id).order_by('pk').last())