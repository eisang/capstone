# from django.db import models

# Create your models here.


# from django.db import models

# Create your models here.


from django.db import models
# from django.utils import timezone
# from datetime import date


class Roommate(models.Model):
    name = models.CharField(max_length=255)
    favourite_quote = models.TextField()
    picture_url = models.CharField(max_length=2083, default="")
    email = models.EmailField(max_length=254)
    password = models.CharField(max_length=100, default="")


class Crew (models.Model):
    name = models.CharField(max_length=255)
    roommate = models.ForeignKey(Roommate, on_delete=models.CASCADE)
    # created_at = models.DateTimeField(auto_now_add=True)


class Task(models.Model):
    # id = models.IntegerField(primary_key=True)
    task_name = models.CharField(max_length=255)
    is_task_completed = models.BooleanField()
    task_location = models.CharField(max_length=255)
    date_to_complete = models.DateField(auto_now=False, auto_now_add=False)
    # date_to_complete = models.DateField()
    # date_to_complete = models.DateField(default=0,  blank=True, null=True)

    # date_to_complete = models.DateField(default=timezone.now, null=True)

#


class Event(models.Model):
    # id = models.IntegerField(primary_key=True)
    # roommate_name = models.CharField(max_length=255)
    # message = models.CharField(max_length=2083)
    event_theme = models.CharField(max_length=255)
    # event_location = models.CharField(max_length=255)
    event_date = models.DateField(auto_now=False, auto_now_add=False)
    # event_date = models.DateField()
    # event_date = models.DateField(default=0 null)
    # event_date = models.DateField(default=timezone.now, null=True)

    # reward_points = models.IntegerField()


class Bill(models.Model):
    # roommate_name = models.CharField(max_length=255)
    bill_category = models.CharField(max_length=255)
    # bill_amount = models.FloatField()
    bill_amount = models.DecimalField(decimal_places=2, max_digits=1000)


class Designated(models.Model):
    # roommate = models.ForeignKey(Roommate, on_delete=models.CASCADE)
    # task = models.ForeignKey(Task, on_delete=models.CASCADE)
    # task_name = models.CharField(max_length=255)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    # task_id = models.ForeignKey(Task, on_delete=models.CASCADE)
    roommate = models.ForeignKey(Roommate, on_delete=models.CASCADE)


class Message(models.Model):
    content = models.TextField()
    roommate = models.ForeignKey(Roommate, on_delete=models.CASCADE)
