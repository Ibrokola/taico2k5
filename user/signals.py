# from django.core.mail import EmailMultiAlternatives
# from django.core.mail import send_mail, BadHeaderError
# from django.template.loader import render_to_string, get_template
# from django.shortcuts import render
# from django.core.mail import EmailMessage
# from django.conf import settings

# from .models import UserProfile

# from django.db.models.signals import post_save

# User = settings.AUTH_USER_MODEL


# def new_user_reciever(sender, instance, created, **kwargs):
#     user = instance

#     if created:
#         new_profile, is_created = UserProfile.objects.get_or_create(user=user)
#     # else:
#     #     user.save()

#     # subject = 'Welcome to Taico Alumni Forum'
#     # from_email = 'no-reply@mail.taicoalum.com'
#     # to = instance.email 
#     # plaintext = get_template('email/welcome.txt')
#     # html = get_template('email/welcome.html')
#     # recv = {
#     #     'username': instance.username
#     #     } 
#     # text_content = plaintext.render(recv)
#     # html_content = html.render(recv)

#     # try:
#     #     msg = EmailMultiAlternatives(subject, text_content, from_email, [to])
#     #     msg.attach_alternative(html_content, "text/html")
#     #     msg.send()
#     # except BadHeaderError:
#     #     return HttpResponse('Invalid header found.')


# post_save.connect(new_user_reciever, sender=User)
# # dispatch_uid=__name__