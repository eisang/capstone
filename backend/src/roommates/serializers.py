

from rest_framework import serializers

from roommates.models import Roommate, Event, Bill, Task


class RoommateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Roommate
        fields = ('__all__')


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('__all__')


class BillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bill
        fields = ('__all__')


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('__all__')
