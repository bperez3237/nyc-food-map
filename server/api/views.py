from django.http import HttpResponse, JsonResponse


# Create your views here.
from django.shortcuts import get_object_or_404
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from django.db import models
from .models import Location, Price, Food
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import json
from django.core import serializers


# @csrf_exempt
class LocationIndexView(ListView):
    model = Location

    def get(self, request, *args, **kwargs):
        locations = list(self.get_queryset().values())
        return JsonResponse({"locations": locations})


@method_decorator(csrf_exempt, name="dispatch")
class LocationCreateView(CreateView):
    model = Location
    fields = ["address", "entry_date", "lat", "lng"]
    success_url = reverse_lazy("location:index")

    def post(self, request, *args, **kwargs):
        data = json.loads(request.body)
        location = Location(
            address=data["address"],
            entry_date=data["entry_date"],
            lat=data["lat"],
            lng=data["lng"],
        )
        location.save()
        return JsonResponse(
            {"address": location.address, "lat": location.lat, "lng": location.lng},
            status=201,
        )


class LocationIndexView(ListView):
    model = Location

    def get(self, request, *args, **kwargs):
        locations = []
        for location in self.get_queryset():
            location.calculate_average_price()
            location_data = {
                "id": location.id,
                "lat": location.lat,
                "lng": location.lng,
                "address": location.address,
                "average_price": location.average_price,
                "prices": [
                    {
                        "food": price.food.name,
                        "value": price.value,
                        "location": location.address,
                    }
                    for price in location.prices.all()
                ],
            }
            locations.append(location_data)
        return JsonResponse({"locations": locations})


class LocationShowView(DetailView):
    model = Location

    def get(self, request, *args, **kwargs):
        location = self.get_object()
        location.calculate_average_price()
        location_data = {
            "id": location.id,
            "lat": location.lat,
            "lng": location.lng,
            "address": location.address,
            "average_price": location.average_price,
            "prices": [
                {
                    "food": price.food.name,
                    "value": price.value,
                    "location": location.address,
                }
                for price in location.prices.all()
            ],
        }
        return JsonResponse({"location": location_data})


class LocationUpdateView(UpdateView):
    model = Location
    fields = ["address", "entry_date"]

    def form_valid(self, form):
        self.object = form.save()
        self.object.calculate_average_price()  # update the average price of related foods
        return JsonResponse({"location": serializers.serialize("json", [self.object])})

    def get_object(self, queryset=None):
        obj = super().get_object(queryset=queryset)
        obj.average_price = obj.foods.aggregate(models.Avg("prices__value"))[
            "prices__value__avg"
        ]
        return obj


@method_decorator(csrf_exempt, name="dispatch")
class LocationDeleteView(DeleteView):
    model = Location
    success_url = reverse_lazy("location:index")

    def delete(self, request, *args, **kwargs):
        location = self.get_object()
        location.delete()
        return JsonResponse({"message": "Location deleted"}, status=200)


class PriceIndexView(ListView):
    model = Price

    def get(self, request, *args, **kwargs):
        prices = list(self.get_queryset().values())
        return JsonResponse({"prices": prices})


class PriceShowView(DetailView):
    model = Price

    def get(self, request, *args, **kwargs):
        price = self.get_object()
        price_data = serializers.serialize("json", [price])
        return JsonResponse({"price": price_data})


@method_decorator(csrf_exempt, name="dispatch")
class PriceCreateView(CreateView):
    model = Price
    fields = ["value", "location", "food"]
    success_url = reverse_lazy("price:index")

    def post(self, request, *args, **kwargs):
        data = json.loads(request.body)
        location = Location.objects.get(pk=data["location"])
        food = Food.objects.get(pk=data["food"])
        price = Price(value=data["value"], location=location, food=food)
        price.save()
        return JsonResponse(
            {"value": price.value, "food": food.name, "location": location.address},
            status=201,
        )


class FoodIndexView(ListView):
    model = Food

    def get(self, request, *args, **kwargs):
        foods = list(self.get_queryset().values())
        return JsonResponse({"foods": foods})


class FoodShowView(DetailView):
    model = Food

    def get(self, request, *args, **kwargs):
        food = self.get_object()
        food.calculate_average_price()
        food_data = serializers.serialize("json", [food])
        return JsonResponse({"food": food_data})


@method_decorator(csrf_exempt, name="dispatch")
class FoodCreateView(CreateView):
    model = Food
    fields = ["name", "emoji"]
    success_url = reverse_lazy("food:index")

    def post(self, request, *args, **kwargs):
        data = json.loads(request.body)
        food = Food(name=data["name"], emoji=data["emoji"])
        food.save()
        return JsonResponse({"name": food.name, "emoji": food.emoji}, status=201)


@method_decorator(csrf_exempt, name="dispatch")
class FoodDeleteView(DeleteView):
    model = Food
    success_url = reverse_lazy("food:index")

    def delete(self, request, *args, **kwargs):
        food = self.get_object()
        food.delete()
        return JsonResponse({"message": "Food deleted"}, status=200)
