import sys
sys.path.append("..")
from .serializers import RoomTypeSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from room.models import RoomType
from rest_framework import viewsets

class RoomTypeViewSet(viewsets.ModelViewSet):
    queryset = RoomType.objects.all().order_by('id')
    serializer_class = RoomTypeSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]