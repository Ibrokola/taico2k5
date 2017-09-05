from django.conf.urls import url, include
from django.contrib import admin

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    url(r'^admin/', admin.site.urls),
	# url(r'^$', homepage, name='home'),
	url(r'^accounts/', include('allauth.urls')),
	# url(r'^category/', include('category.urls', namespace='category')),
	url(r'^topic/', include('topic.urls', namespace='topic'))
]


if settings.DEBUG:
	urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
	urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)