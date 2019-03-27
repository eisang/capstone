

from rest_framework import routers
from .api import RoommateViewSet, EventViewSet, TaskViewSet, BillViewSet, DesignatedViewSet, MessageViewSet, CrewViewSet


router = routers.DefaultRouter()


router.register('api/roommates', RoommateViewSet, 'roommates')
router.register('api/events', EventViewSet, 'events')
router.register('api/tasks', TaskViewSet, 'tasks')
router.register('api/bills', BillViewSet, 'bills')
router.register('api/designated', DesignatedViewSet, 'designated')
# router.register('api/tasks/assigned', TaskAssignedViewSet, 'taskAssigned')
router.register('api/message', MessageViewSet, 'message')
router.register('api/crews', CrewViewSet, 'crews')


urlpatterns = router.urls
