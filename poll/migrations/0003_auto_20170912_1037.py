# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-09-12 10:37
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('poll', '0002_auto_20170912_0708'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='commentpoll',
            options={'ordering': ['-pk'], 'verbose_name': 'comment poll', 'verbose_name_plural': 'comments polls'},
        ),
    ]
