from django.contrib import admin
from .models.article import Article
from .models.storage import Storage
from .models.city import City
from .models.transaction import Transaction


admin.site.register(Article)
admin.site.register(Storage)
admin.site.register(City)
admin.site.register(Transaction)


class CityInline(admin.StackedInline):
    model = City


class StorageInline(admin.TabularInline):
    model = Storage


class ArticleInline(admin.StackedInline):
    model = Article


class TransactionInline(admin.TabularInline):
    model = Transaction
