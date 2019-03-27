

from rest_framework import serializers

from roommates.models import Roommate, Event, Bill, Task, Designated, Crew, Message


class RoommateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Roommate
        fields = ('__all__')


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


class DesignatedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Designated
        fields = ('__all__')


# class EventAssignedSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = EventAssigned
#         fields = ('__all__')
