from django.db import models
from .article import Article
from .city import City


class Storage(models.Model):
    article = models.ForeignKey(
        Article, on_delete=models.CASCADE, null=True)
    amount = models.PositiveSmallIntegerField(default=0, null=False)
    city = models.ForeignKey(City, on_delete=models.CASCADE)

    class Meta:
        unique_together = ['article', 'city']

    def __str__(self):
        return (self.city.name + " - " + self.article.name)
