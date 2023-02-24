from rest_framework import serializers

from .models.article import Article
from .models.storage import Storage
from .models.city import City
from .models.transaction import Transaction


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'


class StorageSerializer(serializers.ModelSerializer):

    article = ArticleSerializer(read_only=True)
    amount = serializers.IntegerField(read_only=True)

    class Meta:
        model = Storage
        fields = ('id', 'city', 'article', 'amount')


class CitySerializer(serializers.ModelSerializer):

    storages = serializers.SerializerMethodField()

    class Meta:
        model = City
        fields = ('id', 'name', 'storages')

    def get_storages(self, obj):
        storages = Storage.objects.filter(city=obj)
        serializer = StorageSerializer(storages, many=True)
        return serializer.data


class TransactionSerializer(serializers.ModelSerializer):

    storage = StorageSerializer(read_only=True)

    class Meta:
        model = Transaction
        fields = ('id', 'amount', 'date', 'operation', 'storage')
