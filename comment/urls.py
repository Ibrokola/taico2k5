from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^(?P<topic_id>\d+)/publish/$', views.publish, name='publish'),
    url(r'^(?P<topic_id>\d+)/publish/(?P<pk>\d+)/quote/$', views.publish, name='publish'),

    url(r'^(?P<pk>\d+)/update/$', views.update, name='update'),
    url(r'^(?P<pk>\d+)/find/$', views.find, name='find'),
    url(r'^(?P<topic_id>\d+)/move/$', views.move, name='move'),

    url(r'^(?P<pk>\d+)/delete/$', views.delete, name='delete'),
    url(r'^(?P<pk>\d+)/undelete/$', views.delete, kwargs={'remove': False, }, name='undelete'),

    url(r'^upload/$', views.image_upload_ajax, name='image-upload-ajax'),
]