from django.http import HttpResponse
from django.db import models
from django.core.urlresolvers import reverse
from django.utils.translation import ugettext_lazy as _
from django.utils import timezone
from django.conf import settings

from django.core.mail import EmailMultiAlternatives
from django.core.mail import send_mail, BadHeaderError
from django.template.loader import render_to_string, get_template
from django.shortcuts import render
from django.core.mail import EmailMessage

from utils.models import AutoSlugField


from django.db.models.signals import post_save
# from django.contrib.auth import get_user_model


User = settings.AUTH_USER_MODEL


def new_user_reciever(sender, instance, created, **kwargs):
    user = instance

    if created:
        new_profile, is_created = UserProfile.objects.get_or_create(user=user)
    # else:
    #     user.save()

    # subject = 'Welcome to Taico Alumni Forum'
    # from_email = 'no-reply@mail.taicoalum.com'
    # to = instance.email 
    # plaintext = get_template('email/welcome.txt')
    # html = get_template('email/welcome.html')
    # recv = {
    #     'username': instance.username
    #     } 
    # text_content = plaintext.render(recv)
    # html_content = html.render(recv)

    # try:
    #     msg = EmailMultiAlternatives(subject, text_content, from_email, [to])
    #     msg.attach_alternative(html_content, "text/html")
    #     msg.send()
    # except BadHeaderError:
    #     return HttpResponse('Invalid header found.')


post_save.connect(new_user_reciever, sender=User)
# dispatch_uid=__name__

class UserProfile(models.Model):
    user = models.OneToOneField(User, verbose_name=_("profile"), related_name='u')
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    slug = AutoSlugField(populate_from="user.username", db_index=False, blank=True)
    grad_year = models.PositiveIntegerField(default=0)
    contact_no = models.PositiveIntegerField(default=0)
    bio = models.TextField(null=True, blank=True)
    location = models.CharField(_("location"), max_length=75, blank=True)
    last_seen = models.DateTimeField(_("last seen"), auto_now=True)
    last_ip = models.GenericIPAddressField(_("last ip"), blank=True, null=True)
    timezone = models.CharField(_("time zone"), max_length=50, default='UTC')
    topic_count = models.PositiveIntegerField(_("topic count"), default=0)
    comment_count = models.PositiveIntegerField(_("comment count"), default=0)
    last_post_hash = models.CharField(_("last pos hash"), max_length=32, blank=True)
    last_post_on = models.DateTimeField(_("last post on"), null=True, blank=True)
    website_link = models.CharField(max_length=320,
                                    null=True,
                                    blank=True,
                                    verbose_name='Personal website url')
    facebook_link = models.CharField(max_length=320,
                                    null=True,
                                    blank=True,
                                    verbose_name='Facebook profile url')
    twitter_handle = models.CharField(max_length=320,
                                    null=True,
                                    blank=True,
                                    verbose_name='Twitter handle')

    class Meta:
        verbose_name = _("profile")
        verbose_name_plural = _("profiles")

    def __str__(self):
        return str(self.user.username)


    def save(self, *args, **kwargs):
        if self.user.is_superuser:
            self.is_administrator = True

        super(UserProfile, self).save(*args, **kwargs)


    # def save(self, *args, **kwargs):
    #     super(UserProfile, self).save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse('user:detail', kwargs={'pk': self.user.pk, 'slug': self.slug})

    def update_post_hash(self, post_hash):
        assert self.pk 

        return bool(UserProfile.objects.filter(pk=self.pk).exclude(
                                last_post_hash=post_hash,
                                last_post_on__gte=timezone.now() - timedelta(
                                    minutes=settings.DOUBLE_POST_THRESHOLD_MINUTES)).update(
                                last_post_hash=post_hash,
                                last_post_on=timezone.now()))