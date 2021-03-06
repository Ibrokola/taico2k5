# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-09-03 23:30
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('topic', '0002_topic_category'),
    ]

    operations = [
        migrations.CreateModel(
            name='TopicFavorite',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField(default=django.utils.timezone.now)),
                ('topic', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='topic.Topic')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='users_topic_favorite', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'favorite',
                'verbose_name_plural': 'favorites',
                'ordering': ['-date', '-pk'],
            },
        ),
        migrations.AlterUniqueTogether(
            name='topicfavorite',
            unique_together=set([('user', 'topic')]),
        ),
    ]
