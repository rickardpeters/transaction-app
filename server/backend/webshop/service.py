from .__init__ import serviceInjector as si
from .__init__ import dataAccessInjector as di

from .access import StorageAccess
from .access import ArticleAccess
from .access import CityAccess
from .access import TransactionAccess
from .access import UserAccess

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
        self.user_access: UserAccess = _deps["UserAccess"]()

    def get_storage(self, city, article) -> Storage:

        return self.storage_access.get_storage(city, article)

    def get_city(self, id) -> City:
        return self.city_access.get_city(id)

    def update_storage(self, city, article, amount, operation) -> Transaction:

        storage = self.storage_access.get_storage(city=city, article=article)
        print(storage.amount)

        if operation == "Deposit":
            new_amount = storage.amount + amount
        elif operation == "Withdraw":
            new_amount = storage.amount - amount

        print(f'New amount: {new_amount} and this is a "{operation}"')
        storage.amount = new_amount

        storage.save()
        print(
            f'New amount on the storage: {storage.amount}')

        new_transaction = Transaction.objects.create(
            storage=storage, amount=amount, operation=operation
        )

        new_transaction.save()
        return new_transaction

    def get_all_storages(self) -> dict:
        return self.storage_access.get_all_storages()

    def get_all_transactions(self) -> dict:
        return self.transaction_access.get_all_transactions()

    def edit_transaction(self, id, new_amount, new_date) -> Transaction:
        return self.storage_access.edit_transaction(id, new_amount, new_date)

    def get_user(self, user):
        return self.user_access.get_user(user)
