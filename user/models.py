from django.db import models

from django.db import models
from django.core.urlresolvers import reverse
from django.utils.translation import ugettext_lazy as _
from django.utils import timezone
from django.conf import settings


class UserProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, verbose_name=_("profile"), related_name="users_profile")
    # slug = AutoSlugField(populate_from="user.username", db_index=False, blank=True)
    location = models.CharField(_("location"), max_length=75, blank=True)
    last_seen = models.DateTimeField(_("last seen"), auto_now=True)
    last_ip = models.GenericIPAddressField(_("last ip"), blank=True, null=True)
    timezone = models.CharField(_("time zone"), max_length=50, default='UTC')
    topic_count = models.PositiveIntegerField(_("topic count"), default=0)
    comment_count = models.PositiveIntegerField(_("comment count"), default=0)
    last_post_hash = models.CharField(_("last pos hash"), max_length=32, blank=True)
    last_post_on = models.DateTimeField(_("last post on"), null=True, blank=True)

    class Meta:
        verbose_name = _("forum profile")
        verbose_name_plural = _("forum profiles")


    def save(self, *args, **kwargs):
        super(UserProfile, self).save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse('user:detail', kwargs={'pk': self.user.pk, 'slug': self.slug})

    def update_post_hash(self, post_hash):
        assert self.pk 

        return bool(UserProfile.objects.filter(pk=self.pk).exclude(
                                last_post_hash=post_hash,
                                last_post_on__gte=timezone.now() - timedelta(
                                    minutes=settings.ST_DOUBLE_POST_THRESHOLD_MINUTES)).update(
                                last_post_hash=post_hash,
                                last_post_on=timezone.now()))
