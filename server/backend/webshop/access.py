from .__init__ import dataAccessInjector as di

from .models.storage import Storage
from .models.article import Article
from .models.city import City
from .models.transaction import Transaction


@di.register(name="StorageAccess")
class StorageAccess():

    def get_storage(self, id) -> Storage:

        storage = Storage.objects.get(id=id)
        return storage

    def set_storage(self, city: str, article: str, amount) -> int:
        try:
            Storage.objects.filter(
                city=city, article=article).update(amount=amount)
            storage_amount = Storage.objects.get(
                city=city, article=article).amount
            return storage_amount
        except Exception:
            None

    def get_all_storages(self) -> dict:
        try:
            return Storage.objects.all()
        except Exception:
            return None


@di.register(name="TransactionAccess")
class TransactionAccess():

    def get_all_transactions(self) -> dict:
        try:
            return Transaction.objects.all()
        except Exception:
            return None


@di.register(name="ArticleAccess")
class ArticleAccess():

    def get_article(self, name: str) -> Article:
        try:
            article = Article.objects.get(name=name)
            return article

        except Exception:
            return None


@di.register(name="CityAccess")
class CityAccess():

    def get_city(self, id) -> City:
        try:
            city = City.objects.get(id=id)
            return city
        except Exception:
            return None
