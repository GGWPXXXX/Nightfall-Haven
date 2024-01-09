import sys
sys.path.append("..")
from .serializers import CustomerSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from customer.models import Customer
from rest_framework import viewsets

class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all().order_by('first_name')
    serializer_class = CustomerSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]