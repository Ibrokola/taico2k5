from django.shortcuts import render

from django.contrib.auth.decorators import login_required

from utils.paginator.infinite_paginator import paginate
from .models import Topic


@login_required
def index(request):
    # todo: add button to clean up read topics? or read all?
    # redirect to first page if empty

    topics = Topic.objects.for_access(user=request.user).for_unread(user=request.user).with_bookmarks(user=request.user)

    page = paginate(request, query_set=topics, lookup_field="last_active", page_var='topic_id')
    next_page_pk = None

    if page:
        next_page_pk = page[-1].pk

    context = {
        'page': page,
        'next_page_pk': next_page_pk
    }
    template = 'unread/index.html'
    return render(request, template, context)
