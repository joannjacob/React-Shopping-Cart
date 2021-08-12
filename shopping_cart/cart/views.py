from django.shortcuts import render
from cart.models import Product, Cart, Order
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from .serializers import ProductSerializer, CartSerializer, OrderSerializer, OrderListSerializer

# Product ViewSet


class ProductViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.all()


# Cart ViewSet
class CartViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]

    serializer_class = CartSerializer

    def get_queryset(self):
        return Cart.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


# Order ViewSet
class OrderListViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]

    serializer_class = OrderListSerializer

    def get_queryset(self):
        return Order.objects.all()

# Order ViewSet


class OrderViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    def create(self, request):
        existing_order = Order.objects.filter(
            cart__id=request.data['cart'], product__id=request.data['product'])
        if existing_order:
            return Response({'status': 'Item exists in the cart'},
                            status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer = self.serializer_class(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
