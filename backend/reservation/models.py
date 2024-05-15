from django.db import models
from customer.models import Customer
from room.models import Room


class Reservation(models.Model):
    customer_id = models.ForeignKey(Customer, on_delete=models.CASCADE)
    room_id = models.ForeignKey(Room, on_delete=models.CASCADE)
    check_in_date = models.DateTimeField()
    check_out_date = models.DateTimeField()
