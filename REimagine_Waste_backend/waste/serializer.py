from rest_framework import serializers
from .models import Employee, Entries, Product, Waste


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'


class EntriesSerializer(serializers.ModelSerializer):
    user_id = Employee()
    product_id = Product()

    class Meta:
          model = Entries
          fields = ('product_id', 'user_id', 'entered_kilos',
                    'estimated_price', 'date')


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class WasteSerializer(serializers.ModelSerializer):
    user_id = Employee()
    product_id = Product()

    class Meta:
          model = Waste
          fields = ('product_id','user_id', 'wasted_kilos',
                    'estimated_price', 'date')
