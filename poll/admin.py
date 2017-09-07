from django.contrib import admin

from .models import CommentPoll, CommentPollChoice, CommentPollVote



admin.site.register(CommentPoll)
admin.site.register(CommentPollChoice)
admin.site.register(CommentPollVote)