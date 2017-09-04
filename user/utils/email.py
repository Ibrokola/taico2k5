import logging
from django.contrib.sites.shortcuts import get_current_site
from django.utils.translation import ugettext as _
from django.template.loader import render_to_string
from django.core.mail import send_mail
from django.conf import settings

logger = logging.getlogger('django')


def sender(request, subject, template_name, context, to):
    site = get_current_site(request)
    context.update({
        'site_name': site.name,
        'domain': site.domain,
        'protocol': 'https' if request.is_secure() else 'http'
    })
    message = render_to_string(template_name, context)

    # todo: remove (use DEFAULT_FROM_EMAIL)
    from_email = "{site_name} <{name}@{domain}>".format(
        name="noreply",
        domain=site.domain,
        site_name=site.name
    )

    # if settings.DEFAULT_FROM_EMAIL != 'webmaster@localhost':
    #     from_email = settings.DEFAULT_FROM_EMAIL

    for recipient in to:
        try:
            send_mail(
                subject=subject,
                message=message,
                from_email=from_email,
                recipient_list=[recipient]
            )
        except OSError as err:
            logger.exception(err)


def send_notification_email(request, topic_notifications, comment):
    subject = _("New notification: %(topic_name)s" % {'topic_name': comment.topic.title, })
    template_name = 'user/notification_email.html'
    context = {'comment': comment, }
    to = [tn.user.email
          for tn in topic_notifications
          if tn.user.is_subscribed]
    sender(request, subject, template_name, context, to)
