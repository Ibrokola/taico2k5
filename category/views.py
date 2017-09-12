from django.shortcuts import render, get_object_or_404 
from django.http import HttpResponsePermanentRedirect

from django.views.generic import ListView


from djconfig import config 

from utils.paginator import yt_paginate
from topic.models import Topic
from .models import Category




class IndexView(ListView):
    template_name = 'category/index.html'
    context_object_name = "catgeories"
    queryset = Category.objects.visible().parents()


def detail(request, pk, slug):
    category = get_object_or_404(Category.objects.visible(), pk=pk)

    if category.slug != slug:
        return HttpResponsePermanentRedirect(category.get_absolute_url())

    subcategories = Category.objects.visible().children(parent=category)

    topics = Topic.objects.unremoved().with_bookmarks(user=request.user).for_category(category=category).order_by('-is_globally_pinned', '-is_pinned', '-last_active').select_related('category')
    side1 = topics.filter(comment_count__gte=15)[:5]
    side2 = topics.order_by('-date')[:5]

    topics_per_page = 15
    
    topics = yt_paginate(
        topics,
        per_page=topics_per_page,
        page_number=request.GET.get('page', 1)
    )

    context = {
        'category': category,
        'subcategories': subcategories,
        'topics': topics,
        'side1': side1,
        'side2': side2
    }
    return render(request, 'category/detail.html', context)