# Generated by Django 2.1.7 on 2019-03-26 04:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('roommates', '0002_auto_20190325_0956'),
    ]

    operations = [
        migrations.RenameField(
            model_name='eventassigned',
            old_name='event',
            new_name='event_id',
        ),
        migrations.RenameField(
            model_name='taskassigned',
            old_name='task',
            new_name='task_id',
        ),
    ]