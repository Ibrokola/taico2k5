from django.shortcuts import render
from topic.views import index_active
from category.models import Category
from topic.models import Topic
from utils.paginator import paginate, yt_paginate


def homepage(request):
    if request.user.is_authenticated:
        categories = Category.objects.visible().parents()    
        topics = Topic.objects.visible().global_().with_bookmarks(user=request.user).order_by('-is_globally_pinned', '-last_active').select_related('category')
        topics_per_page = 15
        topics = yt_paginate(
            topics,
            per_page=topics_per_page,
            page_number=request.GET.get('page', 1)
        )
        context = {
            'categories': categories,
            'topics': topics
        }
        template = 'topic/active.html'
        return render(request, template, context)
    context ={}
    template = "home/home_visitor.html"
    return render(request, template, context)