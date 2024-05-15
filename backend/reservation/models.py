from django.db import models
from customer.models import Customer
from room.models import Room
import uuid


class Reservation(models.Model):
    customer_id = models.ForeignKey(Customer, on_delete=models.CASCADE)
    room_id = models.ForeignKey(Room, on_delete=models.CASCADE)
    reservation_id = models.CharField(max_length=6, unique=True, editable=False)
    check_in_date = models.DateTimeField()
    check_out_date = models.DateTimeField()
    
    def save(self, *args, **kwargs):
        if not self.reservation_id:
            self.reservation_id = self.generate_unique_hex_id()
        super(Reservation, self).save(*args, **kwargs)

    def generate_unique_hex_id(self):
        while True:
            hex_id = uuid.uuid4().hex[:6]
            if not Reservation.objects.filter(reservation_id=hex_id).exists():
                return hex_id
