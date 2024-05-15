from django.db import models


class RoomType(models.Model):
    room_type_name = models.CharField(max_length=50, unique=True, blank=False)


class Room(models.Model):
    room_type_id = models.ForeignKey(RoomType, on_delete=models.CASCADE)
    room_num = models.IntegerField(unique=True, blank=False)
    is_available = models.BooleanField(blank=False)
    price = models.FloatField(blank=False)
