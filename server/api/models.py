from django.contrib.contenttypes.fields import GenericForeignKey, GenericRelation
from django.contrib.contenttypes.models import ContentType
from django.db import models

# Create your models here.

class Location(models.Model):
    address = models.CharField(max_length=255)
    lat = models.FloatField(null=True, blank=True)
    lng = models.FloatField(null=True, blank=True)
    entry_date = models.DateField()
    average_price = models.FloatField(null=True, blank=True)
    def calculate_average_price(self):
        prices = self.prices.all()
        if prices:
            total_price = sum(price.value for price in prices)
            self.average_price = total_price / len(prices)
            self.save()
    

class Price(models.Model):
    location = models.ForeignKey(Location, on_delete=models.CASCADE, related_name='prices')
    food = models.ForeignKey('Food', on_delete=models.CASCADE, related_name='prices')
    value = models.FloatField()

class Food(models.Model):
    name = models.CharField(max_length=255)
    average_price = models.FloatField(null=True, blank=True)

    def calculate_average_price(self):
        prices = self.prices.all()
        if prices:
            total_price = sum(price.value for price in prices)
            self.average_price = total_price / len(prices)
            self.save()

    def save(self, *args, **kwargs):
        self.calculate_average_price()
        super().save(*args, **kwargs)
