from django import forms
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth import get_user_model
from django.utils import timezone
from django.template import defaultfilters
from django.conf import settings

# from ..core.utils.timezone import timezones
from .models import UserProfile


User = get_user_model()
# TIMEZONE_CHOICES = timezones()


class UserForm(forms.ModelForm):

    class Meta:
        model = User
        fields = ("first_name", "last_name")


class UserProfileForm(forms.ModelForm):

    # timezone = forms.ChoiceField(label=_("Time zone"), choices=TIMEZONE_CHOICES)

    class Meta:
        model = UserProfile
        fields = ('image', 'bio', 'grad_year', 'contact_no', 'website_link', 'facebook_link', 'twitter_handle', 'location', 'timezone')
        labels = {
            'image': 'Avatar',
            'bio': 'Brief bio',
            'website_link': 'Your website page link',
            'facebook_link': 'Your facebook page link',
            'twitter_handle': 'Your twitter page link',
        }

    # def __init__(self, *args, **kwargs):
    #     super(UserProfileForm, self).__init__(*args, **kwargs)
    #     now = timezone.localtime(timezone.now())
    #     self.fields['timezone'].help_text = _('Current time is: %(date)s %(time)s') % {
    #         'date': defaultfilters.date(now),
    #         'time': defaultfilters.time(now)
    #     }
    
    def clean(self, *args, **kwargs):
        cleaned_data = super(UserProfileForm, self).clean(*args, **kwargs)
        bio = cleaned_data.get("bio")
        website_link = cleaned_data.get("website_link")
        facebook_link = cleaned_data.get("facebook_link")
        twitter_handle = cleaned_data.get("twitter_handle")
        return cleaned_data 