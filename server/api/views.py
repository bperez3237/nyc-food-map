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
from .models import Location, Price, Food

class LocationIndexView(ListView):
    model = Location
    template_name = 'location/index.html'
    context_object_name = 'locations'

class LocationShowView(DetailView):
    model = Location
    template_name = 'location/show.html'
    context_object_name = 'location'

class LocationCreateView(CreateView):
    model = Location
    template_name = 'location/create.html'
    fields = ['value', 'entry_date']
    success_url = reverse_lazy('location:index')

class LocationUpdateView(UpdateView):
    model = Location
    template_name = 'location/update.html'
    fields = ['value', 'entry_date']
    success_url = reverse_lazy('location:index')
    
    def form_valid(self, form):
        self.object = form.save()
        self.object.calculate_average_price() # update the average price of related foods
        return super().form_valid(form)
    
    def get_object(self, queryset=None):
        obj = super().get_object(queryset=queryset)
        obj.average_price = obj.foods.aggregate(models.Avg('prices__value'))['prices__value__avg']
        return obj


class PriceIndexView(ListView):
    model = Price
    template_name = 'price/index.html'
    context_object_name = 'prices'

class PriceShowView(DetailView):
    model = Price
    template_name = 'price/show.html'
    context_object_name = 'price'

class PriceCreateView(CreateView):
    model = Price
    template_name = 'price/create.html'
    fields = ['value', 'food']
    success_url = reverse_lazy('price:index')


class FoodIndexView(ListView):
    model = Food
    template_name = 'food/index.html'
    context_object_name = 'foods'

class FoodShowView(DetailView):
    model = Food
    template_name = 'food/show.html'
    context_object_name = 'food'

class FoodCreateView(CreateView):
    model = Food
    template_name = 'food/create.html'
    fields = ['name']
    success_url = reverse_lazy('food:index')
