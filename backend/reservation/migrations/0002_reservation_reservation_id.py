# Generated by Django 5.0.1 on 2024-05-15 10:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reservation', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='reservation',
            name='reservation_id',
            field=models.CharField(editable=False, max_length=6, null=True, unique=True),
        ),
    ]