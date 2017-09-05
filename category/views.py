from django.shortcuts import render, get_object_or_404 
from django.http import HttpResponsePermanentRedirect

from django.views.generic import ListView


from djconfig import config 

# from core.utils.paginator import yt_paginate
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
    