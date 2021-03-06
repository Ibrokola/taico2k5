from django.conf.urls import url

from . import views


urlpatterns = [
    url(r'^(?P<comment_id>\d+)/create/$', views.create, name='create'),
    url(r'^(?P<pk>\d+)/delete/$', views.delete, name='delete'),
]