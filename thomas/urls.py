from django.conf.urls import url, include
from django.contrib import admin

from django.conf import settings
from django.conf.urls.static import static
from home.views import homepage

from notifications import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', homepage, name='home'),
    url(r'^accounts/', include('allauth.urls')),
    url(r'^category/', include('category.urls', namespace='category')),
    url(r'^topic/', include('topic.urls', namespace='topic')),
    url(r'^comment/', include('comment.urls', namespace='comment')),
    url(r'^bookmark/', include('bookmark.urls', namespace='bookmark')),
    url(r'^search/', include('search.urls', namespace='search')),
    url(r'^poll/', include('poll.urls', namespace='poll')),
    url(r'^favorite/', include('favorite.urls', namespace='favorite')),
    url(r'^like/', include('like.urls', namespace='like')),
    # url(r'^notification/', include('notifications.urls', namespace='notification')),
    url(r'^notifications/$', views.all, name='notifications_all'),
    url(r'^notifications/ajax/$', views.get_notifications_ajax, name='get_notifications_ajax'),
    url(r'^notifications/read/(?P<id>\d+)/$', views.read, name='notifications_read'),
    url(r'^unread/', include('unread.urls', namespace='unread')),
    url(r'^u/', include('user.urls', namespace='user')),
]


if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)