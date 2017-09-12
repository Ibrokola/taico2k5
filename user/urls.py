from django.conf.urls import url, include
from . import views





urlpatterns = [
    url(r'^$', views.update, name='update'),
    url(r'^(?P<pk>\d+)/$', views.comments, kwargs={'slug': "", }, name='detail'),
    # url(r'^(?P<pk>\d+)/(?P<slug>[\w-]+)/$', views.comments, name='detail'),
    url(r'^(?P<pk>\d+)/(?P<slug>[\w.@+\-\s]+)/$', views.comments, name='detail'),


    url(r'^topics/(?P<pk>\d+)/$', views.topics, kwargs={'slug': "", }, name='topics'),
    # url(r'^topics/(?P<pk>\d+)/(?P<slug>[\w-]+)/$', views.topics, name='topics'),
    url(r'^topics/(?P<pk>\d+)/(?P<slug>[\w.@+\-\s]+)/$', views.topics, name='topics'),

    url(r'^likes/(?P<pk>\d+)/$', views.likes, kwargs={'slug': "", }, name='likes'),
    # url(r'^likes/(?P<pk>\d+)/(?P<slug>[\w-]+)/$', views.likes, name='likes'),
    url(r'^likes/(?P<pk>\d+)/(?P<slug>[\w.@+\-\s]+)/$', views.likes, name='likes'),

    url(r'^menu/$', views.menu, name='menu'),
]