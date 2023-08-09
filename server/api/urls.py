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
from .views import (
    LocationIndexView,
    LocationShowView,
    LocationCreateView,
    LocationUpdateView,
    LocationDeleteView,
    PriceIndexView,
    PriceShowView,
    PriceCreateView,
    FoodIndexView,
    FoodShowView,
    FoodCreateView,
    FoodDeleteView,
)


urlpatterns = [
    # Location URLs
    path("locations/", LocationIndexView.as_view(), name="location_index"),
    path("locations/<int:pk>/", LocationShowView.as_view(), name="location_show"),
    path("locations/create/", LocationCreateView.as_view(), name="location_create"),
    path(
        "locations/<int:pk>/update/",
        LocationUpdateView.as_view(),
        name="location_update",
    ),
    path(
        "locations/<int:pk>/delete/",
        LocationDeleteView.as_view(),
        name="location_delete",
    ),
    # Price URLs
    path("prices/", PriceIndexView.as_view(), name="price_index"),
    path("prices/create/", PriceCreateView.as_view(), name="price_create"),
    path("prices/<int:pk>/", PriceShowView.as_view(), name="price_show"),
    # Food URLs
    path("foods/", FoodIndexView.as_view(), name="food_index"),
    path("foods/create/", FoodCreateView.as_view(), name="food_create"),
    path("foods/<int:pk>/", FoodShowView.as_view(), name="food_show"),
    path("foods/<int:pk>/delete/", FoodDeleteView.as_view(), name="food_delete"),
]
