from django.conf.urls import url

from . import views


urlpatterns = [
    url(r'^(?P<topic_id>\d+)/create/$', views.create, name='create'),
    url(r'^(?P<topic_id>\d+)/find/$', views.find, name='find'),
]