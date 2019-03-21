
from roommates.models import Roommate, Bill, Event, Task

from rest_framework import viewsets, permissions

from .serializers import RoommateSerializer, EventSerializer, TaskSerializer, BillSerializer


class RoommateViewSet(viewsets.ModelViewSet):
    queryset = Roommate.objects.all()
    permission_class = [
        permissions.AllowAny
    ]
    serializer_class = RoommateSerializer


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
