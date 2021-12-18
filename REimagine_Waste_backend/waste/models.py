from django.db import models
from django.contrib.auth.models import User
import uuid
# Create your models here.


class Employee(models.Model):
    ID = models.UUIDField(primary_key=True, default=uuid.uuid1, editable=False)
    name = models.CharField(max_length=150)


class Product(models.Model):
    ID = models.UUIDField(primary_key=True, default=uuid.uuid1, editable=False)
    name = models.CharField(max_length=150)
    price_per_kilo = models.IntegerField()


class Waste(models.Model):
    ID = models.UUIDField(primary_key=True, default=uuid.uuid1, editable=False)
    user_id = models.ForeignKey(
        to=Employee, on_delete=models.CASCADE, null=True, blank=True)
    product_id = models.ForeignKey(
        to=Product, on_delete=models.CASCADE, null=True, blank=True)
    wasted_kilos = models.IntegerField(default=0)
    estimated_price = models.IntegerField(default=0)
    date = models.DateField(verbose_name="date")


class Entries(models.Model):
    ID = models.UUIDField(primary_key=True, default=uuid.uuid1, editable=False)
    user_id = models.ForeignKey(
        to=Employee, on_delete=models.CASCADE, null=True, blank=True)
    product_id = models.ForeignKey(
        to=Product, on_delete=models.CASCADE, null=True, blank=True)
    entered_kilos = models.IntegerField(default=0)
    estimated_price = models.IntegerField(default=0)
    date = models.DateField()
