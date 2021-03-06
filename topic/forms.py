from django import forms 
from django.utils.translation import ugettext_lazy as _
from django.utils.encoding import smart_bytes
from django.utils import timezone

# from djconfig.forms import ConfigForm


import utils
from utils.forms import NestedModelChoiceField

from category.models import Category
from .models import Topic 


class TopicForm(forms.ModelForm):
    topic_hash = forms.CharField(
        max_length=50,
        widget=forms.HiddenInput,
        required=False
    )
    class Meta:
        model = Topic
        fields = ('title', 'category')

    def __init__(self, user, *args, **kwargs):
        super(TopicForm, self).__init__(*args, **kwargs)
        self.user = user 
        self.fields['category'] = NestedModelChoiceField(
            queryset=Category.objects.visible().opened(),
            related_name='category_set',
            parent_field='parent_id',
            label_field='title',
            label=_("Category"),
            empty_label=_("Choose a category"))

    def get_category(self):
        return self.cleaned_data['category']

    def get_topic_hash(self):
        topic_hash = self.cleaned_data.get('topic_hash', None)

        if topic_hash:
            return topic_hash

        return utils.get_hash((
            smart_bytes(self.cleaned_data['title']),
            smart_bytes('category-{}'.format(self.cleaned_data['category'].pk))))

    def save(self, commit=True):
        if not self.instance.pk:
            self.instance.user = self.user

        self.instance.reindex_at = timezone.now()
        return super(TopicForm, self).save(commit)


# class BasicConfigForm(ConfigForm):

#     site_name = forms.CharField(initial="Spirit", label=_("site name"))
#     site_description = forms.CharField(initial="", label=_("site description"), max_length=75, required=False)
#     template_footer = forms.CharField(initial="", label=_("footer snippet"), required=False,
#                                       widget=forms.Textarea(attrs={'rows': 2, }),
#                                       help_text=_("This gets rendered just before the footer in your template."))
#     comments_per_page = forms.IntegerField(initial=20, label=_("comments per page"), min_value=1, max_value=100)
#     topics_per_page = forms.IntegerField(initial=20, label=_("topics per page"), min_value=1, max_value=100)
