# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-09-08 05:47
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('topic', '0004_auto_20170907_2010'),
    ]

    operations = [
        migrations.AddField(
            model_name='topic',
            name='is_closed',
            field=models.BooleanField(default=False, verbose_name='closed'),
        ),
    ]