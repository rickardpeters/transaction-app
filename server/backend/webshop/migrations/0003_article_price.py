# Generated by Django 4.1.1 on 2023-02-23 19:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webshop', '0002_rename_article_name_storage_article'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='price',
            field=models.IntegerField(null=True),
        ),
    ]
