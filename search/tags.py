from util_tags.registry import register
from .forms import BasicSearchForm


@register.inclusion_tag('search/_form.html')
def render_search_form():
    form = BasicSearchForm()
    return {'form': form, }