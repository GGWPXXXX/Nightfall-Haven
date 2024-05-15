from django.contrib import admin
from .models import Room, RoomType

admin.site.register(Room)


@admin.register(RoomType)
class RoomTypeAdmin(admin.ModelAdmin):
    list_display = ['id', "room_type_name"]

