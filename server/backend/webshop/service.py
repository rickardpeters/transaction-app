from .__init__ import serviceInjector as si
from .__init__ import dataAccessInjector as di

from .access import StorageAccess
from .access import ArticleAccess
from .access import CityAccess
from .access import TransactionAccess

from .models.storage import Storage
from .models.article import Article
from .models.city import City
from .models.transaction import Transaction

''' self.article_access: ArticleAccess = _deps["ArticleAccess"]()
self.city_access: CityAccess = _deps["CityAccess"]()
 '''


@si.register(name='StorageManagementService')
class StorageManagementService():

    @di.inject
    def __init__(self, _deps, *args):
        self.storage_access: StorageAccess = _deps["StorageAccess"]()
        self.city_access: CityAccess = _deps["CityAccess"]()
        self.transaction_access: TransactionAccess = _deps["TransactionAccess"](
        )

    def get_storage(self, id) -> Storage:

        return self.storage_access.get_storage(id)

    def get_city(self, id) -> City:
        return self.city_access.get_city(id)

    def update_storage(self, id, amount, operation) -> Transaction:

        storage = self.storage_access.get_storage(id)

        if operation == "Deposit":
            new_amount = storage.amount + amount
        elif operation == "Withdraw":
            new_amount = storage.amount - amount

        Storage.objects.filter(id=id).update(amount=new_amount)

        new_transaction = Transaction.objects.create(
            storage=storage, amount=amount, operation="Deposit"
        )
        return new_transaction

    def get_all_storages(self) -> dict:
        return self.storage_access.get_all_storages()

    def get_all_transactions(self) -> dict:
        return self.transaction_access.get_all_transactions()
