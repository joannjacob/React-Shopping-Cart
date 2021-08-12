from django.contrib import admin
from .models import Product, Cart, Order  # add this


class ProductAdmin(admin.ModelAdmin):  # add this
    list_display = ("name", )  # add this


class CartAdmin(admin.ModelAdmin):  # add this
    list_display = ("id",)  # add this


class OrderAdmin(admin.ModelAdmin):  # add this
    list_display = ("id",)  # add this


# Register your models here.
admin.site.register(Product, ProductAdmin)
admin.site.register(Cart, CartAdmin)
admin.site.register(Order, OrderAdmin)
