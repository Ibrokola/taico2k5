# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-09-09 02:05
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0009_auto_20170908_2225'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='is_administrator',
            field=models.BooleanField(default=False, verbose_name='administrator status'),
        ),
    ]