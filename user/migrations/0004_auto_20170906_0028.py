# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-09-06 00:28
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0003_userprofile_image'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='userprofile',
            options={'verbose_name': 'profile', 'verbose_name_plural': 'profiles'},
        ),
    ]
