# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-09-03 10:03
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('category', '0001_initial'),
        ('topic', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='topic',
            name='category',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='category.Category', verbose_name='category'),
            preserve_default=False,
        ),
    ]
