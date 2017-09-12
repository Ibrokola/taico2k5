# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-09-09 04:15
from __future__ import unicode_literals

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bookmark', '0002_commentbookmark_comments_per_page'),
    ]

    operations = [
        migrations.AlterField(
            model_name='commentbookmark',
            name='comments_per_page',
            field=models.IntegerField(default=20, validators=[django.core.validators.MinValueValidator(20), django.core.validators.MaxValueValidator(100)], verbose_name='comments per page'),
        ),
    ]