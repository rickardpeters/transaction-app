from rest_framework import serializers

from .models.article import Article
from .models.storage import Storage
from .models.city import City


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'


class StorageSerializer(serializers.ModelSerializer):

    article = ArticleSerializer(read_only=True)
    amount = serializers.IntegerField(source='amount', read_only=True)

    class Meta:
        model = Storage
        fields = ('article', 'amount')


class CitySerializer(serializers.ModelSerializer):

    storages = StorageSerializer(source='storage', many=True, read_only=True)

    class Meta:
        model = City
        fields = ('name', 'storages')
