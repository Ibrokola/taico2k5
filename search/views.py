from django.shortcuts import render


from haystack.views import SearchView as BaseSearchView
from djconfig import config

from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required

from .forms import AdvancedSearchForm
from utils.paginator import yt_paginate


class SearchView(BaseSearchView):
    """
    This view does not pre load data fom
    the database (``load_all=False``),
    all required fields to display the
    results must be stored (ie: ``indexed=False``).

    Avoid doing ``{{ result.object }}`` to
    prevent database hits.
    """
    def __init__(self, *args, **kwargs):  # no-qa
        super(SearchView, self).__init__(
            template='search/search.html',
            form_class=AdvancedSearchForm,
            load_all=False)

    @method_decorator(login_required)
    def __call__(self, request):
        return super(SearchView, self).__call__(request)

    def build_page(self):
        paginator = None
        topics_per_page = 15
        page = yt_paginate(
            self.results,
            per_page=topics_per_page,
            page_number=self.request.GET.get('page', 1))
        page = [
            {'fields': r.get_stored_fields(), 'pk': r.pk}
            for r in page]
        return paginator, page