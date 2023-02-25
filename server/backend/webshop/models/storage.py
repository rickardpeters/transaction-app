from django.db import models
from .article import Article
from .city import City


class Storage(models.Model):
    id = models.IntegerField(primary_key=True)
    article = models.ForeignKey(
        Article, on_delete=models.CASCADE, null=True)
    amount = models.PositiveSmallIntegerField(default=None, null=False)
    city = models.ForeignKey(City, on_delete=models.CASCADE)

    class Meta:
        unique_together = ['article', 'city']

    def __str__(self):
        return (self.article.name + " - " + self.city.name + " - " + str(self.amount))
