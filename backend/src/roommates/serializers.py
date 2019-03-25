

from rest_framework import serializers

from roommates.models import Roommate, Event, Bill, Task, TaskAssigned, EventAssigned, Crew, Message


class RoommateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Roommate
        # fields = ('__all__')
        fields = ('id', 'name', 'favorite_quote',
                  'picture_url', 'email', 'password')


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('__all__')


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('__all__')


class BillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bill
        fields = ('__all__')


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ('__all__')


class CrewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crew
        fields = ('__all__')


class TaskAssignedSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskAssigned
        fields = ('__all__')


class EventAssignedSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventAssigned
        fields = ('__all__')
