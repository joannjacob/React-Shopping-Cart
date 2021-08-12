from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User


class Product(models.Model):
    serial_number = models.IntegerField()
    name = models.CharField(max_length=64, unique=True)
    description = models.TextField(default="")
    cost = models.FloatField(default=0.00)
    image = models.ImageField(upload_to='images/')


class Cart(models.Model):
    user = models.ForeignKey(
        User, null=True, blank=True, on_delete=models.CASCADE)
    shipping_charge = models.FloatField(default=0.00)
    # Tax percentage
    tax = models.FloatField(default=0.00)


class Order(models.Model):
    product = models.ForeignKey(Product, null=True, on_delete=models.CASCADE)
    cart = models.ForeignKey(Cart, null=True, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=0)
    total = models.FloatField(default=0.00)
