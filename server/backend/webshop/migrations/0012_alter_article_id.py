# Generated by Django 4.1.1 on 2023-02-25 15:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webshop', '0011_alter_storage_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='id',
            field=models.CharField(max_length=16, primary_key=True, serialize=False),
        ),
    ]