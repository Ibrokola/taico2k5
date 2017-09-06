from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect, get_object_or_404
from django.core.urlresolvers import reverse
from django.contrib.auth import get_user_model, update_session_auth_hash
from django.contrib import messages
from django.utils.translation import ugettext as _
from django.http import HttpResponsePermanentRedirect

from djconfig import config

# from core.utils.paginator import yt_paginate
# from .utils.email import send_email_change_email
# from .utils.tokens import UserEmailChangeTokenGenerator
from topic.models import Topic
from comment.models import Comment
from .forms import UserProfileForm, UserForm

User = get_user_model()

@login_required
def update(request):
    if request.method == 'POST':
        uform = UserForm(data=request.POST, instance=request.user)
        form = UserProfileForm(data=request.POST, instance=request.user.st)

        if all([uform.is_valid(), form.is_valid()]): #uform.is_valid(),   
            uform.save()
            form.save()
            messages.info(request, _("Your profile has been updated!"))
            return redirect(reverse('user:update'))
    else:
        uform = UserForm(instance=request.user)
        form = UserProfileForm(instance=request.user)

    context = {
        'form': form,
        # 'uform': uform
    }
    template = 'user/profile_update.html'
    return render(request, template, context)


@login_required
def _activity(request, pk, slug, queryset, template, reverse_to, context_name, per_page):
    p_user = get_object_or_404(User, pk=pk)

    if p_user.slug != slug:
        url = reverse(reverse_to, kwargs={'pk': p_user.pk, 'slug': p_user.slug})
        return HttpResponsePermanentRedirect(url)

    # items = yt_paginate(
    #     queryset,
    #     per_page=per_page,
    #     page_number=request.GET.get('page', 1)
    # )

    context = {
        'p_user': p_user,
        context_name: items
    }

    return render(request, template, context)


def topics(request, pk, slug):
    user_topics = Topic.objects.visible().filter(user_id=pk).order_by('-date', '-pk').select_related('user')

    return _activity(
        request, pk, slug,
        queryset=user_topics,
        template='user/profile_topics.html',
        reverse_to='user:topics',
        context_name='topics',
        per_page=config.topics_per_page
    )


def comments(request, pk, slug):
    user_comments = Comment.objects.filter(user_id=pk).visible().with_likes(user=request.user)
    #.with_polls(user=request.user)
    return _activity(
        request, pk, slug,
        queryset=user_comments,
        template='user/profile_comments.html',
        reverse_to='user:detail',
        context_name='comments',
        per_page=config.comments_per_page,
    )


def likes(request, pk, slug):
    user_comments = Comment.objects.filter(comment_likes__user_id=pk).visible().with_likes(user=request.user).order_by('-comment_likes__date', '-pk')
    # with_polls(user=request.user)
    return _activity(
        request, pk, slug,
        queryset=user_comments,
        template='user/profile_likes.html',
        reverse_to='user:likes',
        context_name='comments',
        per_page=config.comments_per_page,
    )


@login_required
def menu(request):
    return render(request, 'user/menu.html')