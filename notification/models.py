from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.conf import settings
from django.utils import timezone
from django.db import IntegrityError, transaction

from django.db.models import Q


from topic.models import Topic
from comment.models import Comment  


UNDEFINED, MENTION, COMMENT = range(3)

ACTION_CHOICES = (
    (UNDEFINED, _("Undefined")),
    (MENTION, _("Mention")),
    (COMMENT, _("Comment")),
)


class TopicNotificationQuerySet(models.query.QuerySet):
    def unremoved(self):
        return self.filter(Q(topic__category__parent=None) | Q(topic__category__parent__is_removed=False),
                            topic__category__is_removed=False,
                            topic__is_removed=False)

    def unread(self):
        return self.filter(is_read=False)

    def _access(self, user):
        return self.unremoved()._access(user=user).exclude(action=0)

    def read(self, user):
        return self.filter(user=user).update(is_read=True)

class TopicNotificationManager(models.Manager):
    def get_queryset(self):
        return TopicNotificationQuerySet(self.model, using=self._db)


class TopicNotification(models.Model):
    '''Notification model for topics and comments on topics'''
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='topic_post_notification')
    topic = models.ForeignKey(Topic)
    comment = models.ForeignKey(Comment)
    date = models.DateTimeField(default=timezone.now)
    action = models.IntegerField(choices=ACTION_CHOICES, default=UNDEFINED)
    is_read = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    
    objects = TopicNotificationManager()


    class Meta:
        unique_together = ('user', 'topic')
        ordering = ['-date', '-pk']
        verbose_name = _("topic notification")
        verbose_name_plural = _("topics notification")

    def get_absolute_url(self):
        return self.comment.get_absolute_url()

    @property
    def text_action(self):
        return ACTION_CHOICES[self.action][1]

    @property
    def is_mention(self):
        return self.action == MENTION 

    @property
    def is_comment(self):
        return self.action == COMMENT

    @classmethod
    def mark_as_read(cls, user, topic):
        if not user .is_authenticated():
            return 

        cls.objects.filter(user=user, topic=topic).update(is_read=True)

    @classmethod 
    def create_maybe(cls, user, comment, is_read=True, action=COMMENT):
        '''This creates a dummy notitfciation'''
        return cls.objects.get_or_create(
            user=user,
            topic=comment.topic, 
            default={
                'comment': comment,
                'action': action,
                'is_read': is_read,  
                'is_active': True         
            }
        )

    @classmethod
    def notify_new_comment(cls, comment):
        cls.objects.filter(topic=comment.topic, is_active=True)\
        .exclude(user=comment.user)\
        .update(comment=comment, is_read=False, action=COMMENT, date=timezone.now())

    @classmethod
    def notify_new_mentions(cls, comment, mentions):
        if not mentions:
            return 

        ##Refactor later
        for username, user in mentions.items():
            try:
                with transaction.atomic():
                    cls.objects.create(
                        user=user,
                        topic=comment.topic,
                        comment=comment,
                        action=MENTION, 
                        is_active=True 
                    )
            except IntegrityError:
                pass
        cls.objects.filter(user__in=mentions.values(), topic=comment.topic, is_read=True)\
        .update(comment=comment, is_read=False, action=MENTION, date=timezone.now())

    @classmethod 
    def bulk_create(cls, users, comment):
        return cls.objects.bulk_create([
            cls(user=user,
                topic=comment.topic,
                comment=comment,
                action=COMMENT, 
                is_active=True)
            for user in users
        ])
