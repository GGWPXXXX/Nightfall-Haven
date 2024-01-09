from django.db import models


class RoomType(models.Model):
    roomtype_name = models.CharField(max_length=50, unique=True, blank=False)


class RoomDetail(models.Model):
    roomtype_id = models.ForeignKey(RoomType)
    room_num = models.IntegerField(unique=True, blank=False)
    is_available = models.BooleanField(blank=False)
