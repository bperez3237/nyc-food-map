from django.shortcuts import render
from rest_framework import status
from rest_framework.renderers import JSONRenderer
from django.http import HttpResponse, JsonResponse
import rest_framework.status

# Create your views here.
from django.shortcuts import get_object_or_404
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView, UpdateView
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
        return JsonResponse({'locations': locations})


@method_decorator(csrf_exempt, name='dispatch')
class LocationCreateView(CreateView):
    model = Location
    fields = ['address', 'entry_date', 'lat', 'lng']
    success_url = reverse_lazy('location:index')

    def post(self, request, *args, **kwargs):
        data = json.loads(request.body)
        location = Location(address=data['address'], entry_date=data['entry_date'], lat=data['lat'], lng=data['lng'])
        location.save()
        return JsonResponse({'success': True})


class LocationIndexView(ListView):
    model = Location

    def get(self, request, *args, **kwargs):
        locations = list(self.get_queryset().values())
        return JsonResponse({'locations': locations})


class LocationShowView(DetailView):
    model = Location

    def get(self, request, *args, **kwargs):
        location = self.get_object()
        location_data = serializers.serialize('json', [location])
        return JsonResponse({'location': location_data})


class LocationUpdateView(UpdateView):
    model = Location
    fields = ['address', 'entry_date']

    def form_valid(self, form):
        self.object = form.save()
        self.object.calculate_average_price() # update the average price of related foods
        return JsonResponse({'location': serializers.serialize('json', [self.object])})

    def get_object(self, queryset=None):
        obj = super().get_object(queryset=queryset)
        obj.average_price = obj.foods.aggregate(models.Avg('prices__value'))['prices__value__avg']
        return obj


class PriceIndexView(ListView):
    model = Price

    def get(self, request, *args, **kwargs):
        prices = list(self.get_queryset().values())
        return JsonResponse({'prices': prices})


class PriceShowView(DetailView):
    model = Price

    def get(self, request, *args, **kwargs):
        price = self.get_object()
        price_data = serializers.serialize('json', [price])
        return JsonResponse({'price': price_data})


@method_decorator(csrf_exempt, name='dispatch')
class PriceCreateView(CreateView):
    model = Price
    fields = ['value', 'location', 'food']
    success_url = reverse_lazy('price:index')

    def post(self, request, *args, **kwargs):
        data = json.loads(request.body)
        location = Location.objects.get(pk=data['location'])
        food = Food.objects.get(pk=data['food'])
        price = Price(value=data['value'], location=location, food=food)
        price.save()
        return JsonResponse({'success': True})



class FoodIndexView(ListView):
    model = Food

    def get(self, request, *args, **kwargs):
        foods = list(self.get_queryset().values())
        return JsonResponse({'foods': foods})


class FoodShowView(DetailView):
    model = Food

    def get(self, request, *args, **kwargs):
        food = self.get_object()
        food_data = serializers.serialize('json', [food])
        return JsonResponse({'food': food_data})

@method_decorator(csrf_exempt, name='dispatch')
class FoodCreateView(CreateView):
    model = Food
    fields = ['name']
    success_url = reverse_lazy('food:index')

    def post(self, request, *args, **kwargs):
        data = json.loads(request.body)
        food = Food(name=data['name'])
        food.save()
        return JsonResponse({'success': True})

