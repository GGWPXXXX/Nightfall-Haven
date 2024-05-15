from rest_framework import serializers
from room.models import RoomType


class RoomTypeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = RoomType
        fields = ('room_type_name', )
