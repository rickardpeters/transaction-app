from django.contrib import admin
from .models.article import Article
from .models.storage import Storage
from .models.city import City


admin.site.register(Article)
admin.site.register(Storage)
admin.site.register(City)


class CityInline(admin.StackedInline):
    model = City


class StorageInline(admin.TabularInline):
    model = Storage.article
