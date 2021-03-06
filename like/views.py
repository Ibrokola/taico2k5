from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect, get_object_or_404
from django.core.urlresolvers import reverse

from utils import json_response
from comment.models import Comment
from .models import CommentLike
from .forms import LikeForm



@login_required
def create(request, comment_id):
    comment = get_object_or_404(Comment.objects.exclude(user=request.user), pk=comment_id)

    if request.method == 'POST':
        form = LikeForm(user=request.user, comment=comment, data=request.POST)

        if form.is_valid():
            like = form.save()
            like.comment.increase_likes_count()

            if request.is_ajax():
                return json_response({'url_delete': like.get_delete_url(), })

            return redirect(request.POST.get('next', comment.get_absolute_url()))
    else:
        form = LikeForm()

    context = {
        'form': form,
        'comment': comment
    }
    template = 'like/create.html'
    return render(request, template, context)

@login_required
def delete(request, pk):
    like = get_object_or_404(CommentLike, pk=pk, user=request.user)

    if request.method == 'POST':
        like.delete()
        like.comment.decrease_likes_count()

        if request.is_ajax():
            url = reverse('like:create', kwargs={'comment_id': like.comment.pk, })
            return json_response({'url_create': url, })

        return redirect(request.POST.get('next', like.comment.get_absolute_url()))

    context = {'like': like, }
    template = 'like/delete.html'
    return render(request, template, context)
