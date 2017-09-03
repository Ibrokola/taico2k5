from django.db import models
from django.db.models import F, Q, Prefetch
from django.core.urlresolvers import reverse
from django.conf import settings

from django.utils.translation import ugettext_lazy as _ 
from django.shortcuts import get_object_or_404

from django.utils import timezone





class TopicQuerySet(models.query.QuerySet):
    def unremoved(self):
        return self.filter(Q(category__parent=None) | Q(category__parent__is_removed=False),
                            category__is_removed=False,
                            is_removed=False)

    def public(self):
        return self.filter(category__is_private=False)

    def visible(self):
        return self.unremoved().public()

    def opened(self):
        return self.filter(is_closed=False)

    def global_(self):
        return self.filter(is_closed=False)

    def for_category(self, category):
        if category.is_subcategory:
            return self.filter(category=category)
        return self.filter(Q(catgeory=category) | Q(catgeory__parent=category))

    # def with_bookmarks(self, user):
    #     if not user.is_authenticated():
    #         return self 

    #     user_bookmarks = CommentBookMark.objects.filter(user=user).select_related('topic')
    #     prefetch = Prefetch("commentbookmark_set", queryset=user_bookmarks, to_attr='bookmarks')
    #     return self.prefetch_related(prefetch)

    def get_public_or_404(self, pk, user):
        # if user.is_authenticated() and user.st.is_moderator:
        if user.is_authenticated() and user.is_moderator:
            return get_object_or_404(self.public().select_related('category__parent'), pk=pk)
        else:
            return get_object_or_404(self.visible().select_related('category__parent'), pk=pk)
    

    def for_update_or_404(self, pk, user):
        if user.is_moderator:
            return get_object_or_404(self.public(), pk=pk)
        else:
            return get_object_or_404(self.visible().opened(), pk=pk, user=user) 

class TopicManager(models.Manager):
    def get_queryset(self):
        return TopicQuerySet(self.model, using=self._db)
            

class Topic(models.Model):
    """This model gives the posts and topics for diffrent discussions started on the forum"""
    author = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='post_author')
    # category = models.ForeignKey('Category', verbose_name=_("category"))
    title = models.CharField(_("title"), max_length=255)
    post = models.TextField(max_length=8192, blank=True)
    # slug = AutoSlugField(populate_from="title", db_index=False, blank=True)
    date = models.DateTimeField(_("date"), default=timezone.now)
    last_active = models.DateTimeField(_("last active"), default=timezone.now)
    reindex_at = models.DateTimeField(_("reindex at"), default=timezone.now)
    is_pinned = models.BooleanField(_("pinned"), default=False)
    is_globally_pinned = models.BooleanField(_("globally pinned"), default=False)
    is_removed = models.BooleanField(default=False)
    view_count = models.PositiveIntegerField(_("views count"), default=0)
    comment_count = models.PositiveIntegerField(_("comment count"), default=0)

    objects = TopicManager()
    class Meta:
        ordering = ['-last_active', '-pk']
        verbose_name = _("topic")

    def get_absolute_url(self):
        return reverse('topic:detail', kwargs={'pk': str(self.id), 'slug': self.slug})

    def get_bookmark_url(self):
        if not self.is_visited:
            return self.get_absolute_url()
    
        if not self.has_new_comments:
            return self.bookmark.get_absolute_url()

        return self.bookmark.get_new_comment_url()
    
    @property
    def main_category(self):
        return self.category.parent or self.category

    # @property
    # def bookmark(self):
    #     try:
    #         assert len(self.bookmarks) <= 1
    #         return self.bookmarks[0]
    #     except (AttributeError, IndexError):
    #         return 0

    #     return max(0, self.comment_count - self.bookmarks[0].comment_number)

    @property
    def has_new_comments(self):
        return self.new_comments_count > 0

    @property
    def is_visited(self):
        return bool(self.bookmark)

    def increase_view_count(self):
        Topic.objects.filter(pk=self.pk).update(view_count=F('view_count') + 1)

    def increase_comment_count(self):
        Topic.objects.filter(pk=self.pk).update(comment_count=F('comment_count') + 1, last_active=timezone.now())

    def decrease_comment_count(self):
        Topic.objects.filter(pk=self.pk).update(comment_count=F('comment_count') - 1)

    def get_all_comments_html(self):
        return self.comment_set.values_list('comment_html', flat=True)