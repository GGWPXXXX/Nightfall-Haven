from rest_framework import serializers
from customer.models import Customer


class CustomerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Customer
        fields = ('first_name', 'last_name')
