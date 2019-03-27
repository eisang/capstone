
from roommates.models import Roommate, Bill, Event, Task, Designated, Crew, Message

from rest_framework import viewsets, permissions

from .serializers import RoommateSerializer, EventSerializer, TaskSerializer, BillSerializer, DesignatedSerializer, MessageSerializer, CrewSerializer


class RoommateViewSet(viewsets.ModelViewSet):
    queryset = Roommate.objects.all()
    permission_class = [
        permissions.AllowAny
    ]
    serializer_class = RoommateSerializer


class CrewViewSet(viewsets.ModelViewSet):
    queryset = Crew.objects.all()
    permission_class = [
        permissions.AllowAny
    ]
    serializer_class = CrewSerializer


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    permission_class = [
        permissions.AllowAny
    ]

    serializer_class = EventSerializer


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    permission_class = [
        permissions.AllowAny
    ]

    serializer_class = TaskSerializer


class BillViewSet(viewsets.ModelViewSet):
    queryset = Bill.objects.all()
    permission_class = [
        permissions.AllowAny
    ]

    serializer_class = BillSerializer


class DesignatedViewSet(viewsets.ModelViewSet):
    queryset = Designated.objects.all()
    permission_class = [
        permissions.AllowAny
    ]
    serializer_class = DesignatedSerializer


# class TaskAssignedViewSet(viewsets.ModelViewSet):
#     queryset = TaskAssigned.objects.all()
#     permission_class = [
#         permissions.AllowAny
#     ]
#     serializer_class = TaskAssignedSerializer


class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    permission_class = [
        permissions.AllowAny
    ]
    serializer_class = MessageSerializer
