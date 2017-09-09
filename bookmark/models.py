from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.conf import settings

from djconfig import config

from utils import paginator
# from topic.models import Topic 


class CommentBookmark(models.Model):

    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='comment_bookmarks')
    topic = models.ForeignKey('topic.Topic')

    # comments_per_page = models.IntegerField(default=20, validators=[MinValueValidator(20), MaxValueValidator(100)] ,verbose_name=_("comments per page"))
    comment_number = models.PositiveIntegerField(default=0)

    class Meta:
        unique_together = ('user', 'topic')
        verbose_name = _("comment bookmark")
        verbose_name_plural = _("comments bookmarks")

    def _get_url(self, comment_number=None):
        comment_number = comment_number or self.comment_number
        comments_per_page = 15
        return paginator.get_url(
            url=self.topic.get_absolute_url(),
            obj_number=comment_number,
            per_page=comments_per_page,
            page_var='page'
        )

    def get_absolute_url(self):
        return self._get_url()

    def get_new_comment_url(self):
        comment_number = self.comment_number + 1
        return self._get_url(comment_number=comment_number)

    @staticmethod
    def page_to_comment_number(page_number):
        try:
            page_number = int(page_number)
        except ValueError:
            return

        return (page_number - 1) + 1 #config.comments_per_page * 

    @classmethod
    def update_or_create(cls, user, topic, comment_number):
        if not user.is_authenticated():
            return

        if comment_number is None:
            return

        bookmark, created = cls.objects.update_or_create(
            user=user,
            topic=topic,
            defaults={'comment_number': comment_number, }
        )

        return bookmark