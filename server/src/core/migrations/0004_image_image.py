# Generated by Django 2.1.15 on 2020-10-08 17:30

import core.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='image',
            name='image',
            field=models.ImageField(null=True, upload_to=core.models.image_file_path),
        ),
    ]
