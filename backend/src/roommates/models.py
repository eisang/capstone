# from django.db import models

# Create your models here.


# from django.db import models

# Create your models here.


from django.db import models


class Roommate(models.Model):
    name = models.CharField(max_length=255)
    favourite_quote = models.TextField()
    # avatar_url = models.CharField(max_length=2083)


class Task(models.Model):
    roommate_name = models.CharField(max_length=255)
    task_name = models.CharField(max_length=255)
    is_task_completed = models.BooleanField()
    task_location = models.CharField(max_length=255)


class Event(models.Model):
    roommate_name = models.CharField(max_length=255)
    message = models.CharField(max_length=2083)
    event_theme = models.CharField(max_length=255)
    event_date = models.DateField()
    reward_points = models.IntegerField()


class Bill(models.Model):
    roommate_name = models.CharField(max_length=255)
    bills_for = models.FloatField()
