# Generated by Django 4.1.1 on 2023-02-25 15:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webshop', '0010_alter_article_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='storage',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]
