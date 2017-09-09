from django.db import models

from django.conf import settings
from django.utils.translation import ugettext_lazy as _  
from django.core.urlresolvers import reverse 
from django.utils import timezone

# from comment.models import Comment


class CommentLike(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='user_comment_likes')
    comment = models.ForeignKey('comment.Comment', related_name='comment_likes')

    date = models.DateTimeField(default=timezone.now)

    class Meta:
        unique_together = ('user', 'comment')
        ordering = ['-date', '-pk']
        verbose_name = _("like")
        verbose_name_plural = _("likes")

    def get_delete_url(self):
        return reverse('like:delete', kwargs={'pk': str(self.pk), })