"""server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from .views import (LocationIndexView, LocationShowView, LocationCreateView, LocationUpdateView,
    PriceIndexView, PriceShowView, PriceCreateView,
    FoodIndexView, FoodShowView, FoodCreateView)


urlpatterns = [
    # Location URLs
    path('', LocationIndexView.as_view(), name='location:index'),
    path('<int:pk>/', LocationShowView.as_view(), name='location:show'),
    path('create/', LocationCreateView.as_view(), name='location:create'),
    path('<int:pk>/update/', LocationUpdateView.as_view(), name='location:update'),
    # Price URLs
    path('prices/', PriceIndexView.as_view(), name='price:index'),
    path('prices/create/', PriceCreateView.as_view(), name='price:create'),
    path('prices/<int:pk>/', PriceShowView.as_view(), name='price:show'),
    
    # Food URLs
    path('foods/', FoodIndexView.as_view(), name='food:index'),
    path('foods/create/', FoodCreateView.as_view(), name='food:create'),
    path('foods/<int:pk>/', FoodShowView.as_view(), name='food:show'),
]

