# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-09-07 20:54
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0007_auto_20170907_0641'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='u', to=settings.AUTH_USER_MODEL, verbose_name='profile'),
        ),
    ]
