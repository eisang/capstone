# from django.contrib import admin

# Register your models here.

# from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Roommate, Event, Task, Bill


class RoommateAdmin(admin.ModelAdmin):
    list_display = ('name', 'favourite_quote')


class EventAdmin(admin.ModelAdmin):
    list_display = ('roommate_name', 'message', 'event_theme',
                    'event_date', 'reward_points')


class TaskAdmin(admin.ModelAdmin):
    list_display = ('roommate_name', 'task_name',
                    'is_task_completed', 'task_location')


class BillAdmin(admin.ModelAdmin):
    list_display = ('roommate_name', 'bills_for')


admin.site.register(Task, TaskAdmin)
admin.site.register(Event, EventAdmin)
admin.site.register(Bill, BillAdmin)
admin.site.register(Roommate, RoommateAdmin)
