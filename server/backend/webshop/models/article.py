from django.db import models


class Article(models.Model):

    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    price = models.IntegerField(null=True)

    def __str__(self):
        return self.name
