from rest_framework import serializers
from cart.models import Product, Cart, Order

# Product Serializer


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"


# Cart Serializer
class CartSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cart
        fields = "__all__"


# Order Serializer
class OrderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order
        fields = "__all__"

# Order ListSerializer


class OrderListSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    cost = serializers.SerializerMethodField()
    image = serializers.SerializerMethodField()
    shipping_charge = serializers.SerializerMethodField()
    tax = serializers.SerializerMethodField()
    product_id = serializers.SerializerMethodField()

    def get_name(self, instance):
        return instance.product.name

    def get_cost(self, instance):
        return instance.product.cost

    def get_image(self, instance):
        request = self.context.get('request')
        image_url = instance.product.image.url
        return request.build_absolute_uri(image_url)

    def get_shipping_charge(self, instance):
        return instance.cart.shipping_charge

    def get_tax(self, instance):
        return instance.cart.tax

    def get_product_id(self, instance):
        return instance.product.id

    class Meta:
        model = Order
        fields = ('id', 'shipping_charge', 'tax', 'name',
                  'quantity', 'cost', 'total', 'image', "product_id")
