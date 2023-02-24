from django.db import models
from .storage import Storage
from datetime import date


class Transaction(models.Model):

    class Operation(models.TextChoices):
        WITHDRAW = "Withdraw",
        DEPOSIT = "Deposit"

    storage = models.ForeignKey(Storage, on_delete=models.CASCADE)
    amount = models.PositiveSmallIntegerField(default=0)
    date = models.DateField(default=date.today)
    operation = models.CharField(
        max_length=64, choices=Operation.choices, null=False)

    def __str__(self):
        return (str(self.date) + " - " + str(self.amount) +
                "st. " + self.storage.article.name + " - " +
                self.operation)

    def get_value(self):
        return self.storage.article.price * self.amount
