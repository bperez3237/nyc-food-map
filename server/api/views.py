from django.shortcuts import render
from rest_framework import status
from rest_framework.renderers import JSONRenderer
from django.http import HttpResponse, JsonResponse
import rest_framework.status
from .models import Account, Social
from .serializers import AccountSerializer, SocialSerializer

# Create your views here.


def IndexAccount(request):
    accounts = Account.objects.values()
    print(list(accounts))
    return JsonResponse(list(accounts), status=status.HTTP_200_OK, safe=False)


def CreateAccount(request):
    serializer_class = AccountSerializer
    if request.method == 'POST':
        serializer = AccountSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
