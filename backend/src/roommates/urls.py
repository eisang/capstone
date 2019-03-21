

from rest_framework import routers
from .api import RoommateViewSet, EventViewSet, TaskViewSet, BillViewSet


router = routers.DefaultRouter()


router.register('api/roommates', RoommateViewSet, 'roommates')
router.register('api/events', EventViewSet, 'events')
router.register('api/tasks', TaskViewSet, 'tasks')
router.register('api/bills', BillViewSet, 'bills')


urlpatterns = router.urls
