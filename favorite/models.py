from django.db import models
from django.conf import settings
from django.utils.translation import ugettext_lazy as _
from django.utils import timezone

from topic.models import Topic



class TopicFavorite(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='users_topic_favorite')
    topic = models.ForeignKey(Topic)
    date = models.DateTimeField(default=timezone.now)


    class Meta:
        unique_together = ('user', 'topic')
        ordering = ['-date', '-pk']
        verbose_name = _("favorite")
        verbose_name_plural = _("favorites")