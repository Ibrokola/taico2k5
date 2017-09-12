from util_tags.registry import register
from .forms import BasicSearchForm


@register.inclusion_tag('search/form.html')
def render_search_form():
    form = BasicSearchForm()
    return {'form': form, }