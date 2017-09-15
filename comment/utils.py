from notifications.models import Notification
from unread.models import TopicUnread
from history.models import CommentHistory



def comment_posted(comment, mentions):
    # Notification.create_maybe(user=comment.user, comment=comment)
    # Notification.notify_new_comment(comment=comment)
    # Notification.notify_new_mentions(comment=comment, mentions=mentions)
    # TopicUnread.unread_new_comment(comment=comment)
    comment.topic.increase_comment_count()


def pre_comment_update(comment):
    # comment.comment_html = post_render_static_polls(comment)
    CommentHistory.create_maybe(comment)


def post_comment_update(comment):
    comment.increase_modified_count()

    # comment.comment_html = post_render_static_polls(comment)
    CommentHistory.create(comment)