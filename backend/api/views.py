import sys
sys.path.append("..")
from django.shortcuts import render
from .serializers import CustomerSerializer
from customer.models import Customer
from rest_framework import viewsets

class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all().order_by('first_name')
    serializer_class = CustomerSerializer