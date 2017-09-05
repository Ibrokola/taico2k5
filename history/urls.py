from django.conf.urls import url

from . import views


urlpatterns = [
    url(r'^(?P<comment_id>\d+)/$', views.detail, name='detail'),
]