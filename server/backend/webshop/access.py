from __init__ import dataAccessInjector as di

from models.storage import Storage


@di.register(name="StorageAccess")
class StorageAccess():

    def get_storage(self, city: str, article: str) -> Storage:
        try:
            storage = Storage.objects.get(city=city, article=article)

        except Exception:
            return None
