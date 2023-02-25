from django.db import models


class Article(models.Model):
    id = models.CharField(max_length=16, primary_key=True)
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    price = models.IntegerField(null=True)

    def __str__(self):
        return self.name
