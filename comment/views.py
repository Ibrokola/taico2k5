from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect, get_object_or_404
from django.views.decorators.http import require_http_methods, require_POST
from django.contrib import messages
from django.http import Http404

from djconfig import config


from utils.ratelimit.decorators import ratelimit
from utils.decorators import administrator_required
from utils import markdown, paginator, render_form_errors, json_response

from topic.models import Topic
from .models import Comment
from .forms import CommentForm, CommentMoveForm, CommentImageForm
from .utils import comment_posted, post_comment_update, pre_comment_update
from notifications.signals import notify

@login_required
@ratelimit(rate='1/10s')
def publish(request, topic_id, pk=None):
    # user = request.user
    topic = get_object_or_404(
        Topic.objects.opened().for_access(request.user),
        pk=topic_id
        )

    if request.method == 'POST':
        form = CommentForm(user=request.user, topic=topic, data=request.POST)

        if not request.is_limited() and form.is_valid():
            
            if not request.user.u.update_post_hash(form.get_comment_hash()):
                # Hashed comment may be in the process of been saved
                return redirect(
                    request.POST.get('next', None) or
                    Comment.get_last_for_topic(topic_id)
                           .get_absolute_url())

            comment = form.save()
            if topic.user != request.user:
                notify.send(request.user, recipient=topic.user, verb='commented on your post', target=comment)
            comment_posted(comment=comment, mentions=form.mentions)
            return redirect(request.POST.get('next', comment.get_absolute_url()))
    else:
        initial = None

        if pk:  # todo: move to form courtesy of spirit forum
            comment = get_object_or_404(Comment.objects.for_access(user=request.user), pk=pk)
            if comment.user != request.user:
                notify.send(request.user, recipient=comment.user, verb='mentioned you on a post', target=comment)
            quote = markdown.quotify(comment.comment, comment.user.username)
            initial = {'comment': quote}

        form = CommentForm(initial=initial)

    context = {
        'form': form,
        'topic': topic}
    template = 'comment/publish.html'
    
    return render(request, template, context)


@login_required
def update(request, pk):
    comment = Comment.objects.for_update_or_404(pk, request.user)

    if request.method == 'POST':
        form = CommentForm(data=request.POST, instance=comment)

        if form.is_valid():
            pre_comment_update(comment=Comment.objects.get(pk=comment.pk))
            comment = form.save()
            post_comment_update(comment=comment)
            return redirect(request.POST.get('next', comment.get_absolute_url()))
    else:
        form = CommentForm(instance=comment)

    context = {'form': form, }
    template = 'comment/update.html'

    return render(request, template, context)


@login_required
def delete(request, pk, remove=True):
    comment = get_object_or_404(Comment, pk=pk)

    if request.method == 'POST':
        Comment.objects.filter(pk=pk).update(is_removed=remove)

        return redirect(comment.get_absolute_url())

    context = {'comment': comment, }
    template = 'comment/delete.html'

    return render(request, template, context)


# @require_http_methods([POST])
@require_POST #if this doesn't work, use the method above or check documentation
@login_required
def move(request, topic_id):
    topic = get_object_or_404(Topic, pk=topic_id)
    form = CommentMoveForm(topic=topic, data=request.POST)

    if form.is_valid():
        comments = form.save()

        for comment in comments:
            comment_posted(comment=comment, mentions=None)
            topic.decrease_comment_count()
    else:
        messages.error(request, render_form_errors(form))

    return redirect(request.POST.get('next', topic.get_absolute_url()))


def find(request, pk):
    comment = get_object_or_404(Comment, pk=pk)
    comment_number = Comment.objects.filter(topic=comment.topic, date__lte=comment.date).count()
    comments_per_page = 25
    url = paginator.get_url(comment.topic.get_absolute_url(),
                            comment_number,
                            comments_per_page,
                            'page')
    return redirect(url)


@require_POST
@login_required
def image_upload_ajax(request):
    if not request.is_ajax():
        return Http404()

    form = CommentImageForm(user=request.user, data=request.POST, files=request.FILES)

    if form.is_valid():
        image = form.save()
        return json_response({'url': image.url, })

    return json_response({'error': dict(form.errors.items()), })