# Generated by Django 3.1.7 on 2023-04-18 23:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20230411_0142'),
    ]

    operations = [
        migrations.AddField(
            model_name='location',
            name='average_price',
            field=models.FloatField(blank=True, null=True),
        ),
    ]