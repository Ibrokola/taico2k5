from django.conf.urls import url, include


from . import views


urlpatterns = [
    url(r'^discuss/$', views.discuss, name='discuss'),
    url(r'^discuss/(?P<category_id>\d+)/$', views.discuss, name='discuss'),

    url(r'^update/(?P<pk>\d+)/$', views.update, name='update'),

    url(r'^(?P<pk>\d+)/$', views.detail, kwargs={'slug': "", }, name='detail'),
    url(r'^(?P<pk>\d+)/(?P<slug>[\w-]+)/$', views.detail, name='detail'),

    url(r'^active/$', views.index_active, name='index-active'),
]