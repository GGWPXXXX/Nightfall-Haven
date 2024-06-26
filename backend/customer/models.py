from django.db import models


class Customer(models.Model):

    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    contact_number = models.CharField(max_length=10)
    email = models.CharField(max_length=255)
    
    def __str__(self):
        return self.first_name
