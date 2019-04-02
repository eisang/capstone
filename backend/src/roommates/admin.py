# from django.contrib import admin

# Register your models here.

# from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Roommate, Event, Task, Bill, Designated, Crew, Message


class RoommateAdmin(admin.ModelAdmin):
    list_display = ('name', 'favourite_quote', 'picture_url',
                    'email', 'password')


class EventAdmin(admin.ModelAdmin):
    list_display = ('event_theme', 'event_date', 'owner')


class TaskAdmin(admin.ModelAdmin):
    list_display = ('task_name',
                    'is_task_completed', 'task_location', 'date_to_complete', 'owner')


class BillAdmin(admin.ModelAdmin):
    list_display = ('bill_category', 'bill_amount')


class MessageAdmin(admin.ModelAdmin):
    list_display = ('content', 'roommate')


class CrewAdmin(admin.ModelAdmin):
    list_display = ('name', 'roommate')


class DesignatedAdmin(admin.ModelAdmin):
    list_display = ('task', 'event', 'roommate',)


# class EventAssignedAdmin(admin.ModelAdmin):
#     list_display = ('event_id', 'roommate')


admin.site.register(Designated, DesignatedAdmin)
# admin.site.register(EventAssigned, EventAssignedAdmin)
admin.site.register(Crew, CrewAdmin)
admin.site.register(Message, MessageAdmin)
admin.site.register(Task, TaskAdmin)
admin.site.register(Event, EventAdmin)
admin.site.register(Bill, BillAdmin)
admin.site.register(Roommate, RoommateAdmin)
