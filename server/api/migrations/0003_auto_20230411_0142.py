# Generated by Django 3.1.7 on 2023-04-11 01:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20230410_2335'),
    ]

    operations = [
        migrations.AddField(
            model_name='location',
            name='lat',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='location',
            name='lng',
            field=models.FloatField(blank=True, null=True),
        ),
    ]