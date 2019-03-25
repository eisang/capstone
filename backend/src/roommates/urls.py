

from rest_framework import routers
from .api import RoommateViewSet, EventViewSet, TaskViewSet, BillViewSet, EventAssignedViewSet, TaskAssignedViewSet, MessageViewSet, CrewViewSet


router = routers.DefaultRouter()


router.register('api/roommates', RoommateViewSet, 'roommates')
router.register('api/events', EventViewSet, 'events')
router.register('api/tasks', TaskViewSet, 'tasks')
router.register('api/bills', BillViewSet, 'bills')
router.register('api/events/assigned', EventAssignedViewSet, 'bills')
router.register('api/tasks/assigned', TaskAssignedViewSet, 'bills')
router.register('api/message', MessageViewSet, 'tasks')
router.register('api/crews', CrewViewSet, 'bills')


urlpatterns = router.urls
