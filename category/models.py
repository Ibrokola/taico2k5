from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.core.urlresolvers import reverse
from django.conf import settings
from django.utils import timezone

from django.db.models import Q


class CategoryQuerySet(models.QuerySet):

    def unremoved(self):
        return self.filter(Q(parent=None) | Q(parent__is_removed=False),
                           is_removed=False)

    def public(self):
        return self.filter(is_private=False)

    def visible(self):
        return self.unremoved().public()

    def opened(self):
        return self.filter(Q(parent=None) | Q(parent__is_closed=False),
                           is_closed=False)

    def parents(self):
        return self.filter(parent=None)

    def children(self, parent):
        if parent.is_subcategory:
            return self.none()

        return self.filter(parent=parent)

class CategoryManager(models.Manager):
    def get_queryset(self):
        return CategoryQuerySet(self.model, using=self._db)


class Category(models.Model):
    parent = models.ForeignKey('self', verbose_name=_("category parent"), null=True, blank=True)
    title = models.CharField(_("title"), max_length=75)
    # slug = AutoSlugField(populate_from="title", db_index=False, blank=True)
    description = models.CharField(_("description"), max_length=255, blank=True)
    color = models.CharField(_("color"), max_length=7, blank=True,
                             help_text=_("Title color in hex format (i.e: #1aafd0)."))
    reindex_at = models.DateTimeField(_("modified at"), default=timezone.now)

    is_global = models.BooleanField(_("global"), default=True,
                                    help_text=_('Determines whether the topics will be'
                                                'displayed in the all-categories list.'))
    is_closed = models.BooleanField(_("closed"), default=False)
    is_removed = models.BooleanField(_("removed"), default=False)
    is_private = models.BooleanField(_("private"), default=False)

    objects = CategoryManager()

    class Meta:
        ordering = ['title', 'pk']
        verbose_name = _("category")
        verbose_name_plural = _("categories")

    def get_absolute_url(self):
        return reverse('category:detail', kwargs={'pk':str(self.pk), 'slug': self.slug})


    @property
    def is_subcategory(self):
        if self.parent_id:
            return True
        else:
            return False