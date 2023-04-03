
from django.contrib.contenttypes.fields import GenericForeignKey, GenericRelation
from django.contrib.contenttypes.models import ContentType
from django.db import models

# Create your models here.
# class User(models.Model):
#     username = models.CharField(max_length=50)
#     password = models.CharField(max_length=50)
#     email = models.CharField(max_length=50)

class Account(models.Model):
    id = models.AutoField(primary_key=True)
    profile_picture = models.CharField(max_length=100)
    
class Social(models.Model):
    site = models.CharField(max_length=50)
    username = models.CharField(max_length=50)
    account = models.ForeignKey(Account, on_delete=models.CASCADE)

# class Name(models.Model):
#     value = models.CharField(max_length=50)
#     account = models.ForeignKey(Account, on_delete=models.CASCADE)
    
# class Born(models.Model):
#     value = models.DateField()
#     account = models.ForeignKey(Account, on_delete=models.CASCADE)
    
# class Homeplace(models.Model):
#     value = models.CharField(max_length=50)
#     account = models.ForeignKey(Account, on_delete=models.CASCADE)
    
# class Occupation(models.Model):
#     value = models.CharField(max_length=50)
#     account = models.ForeignKey(Account, on_delete=models.CASCADE)
    
# class Bio(models.Model):
#     text = models.TextField()
#     account = models.ForeignKey(Account, on_delete=models.CASCADE)
    
# class Note(models.Model):
#     content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
#     object_id = models.PositiveIntegerField()
#     content_object = GenericForeignKey('content_type', 'object_id')
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
    
#     text = models.TextField()
    
# class Post(models.Model):
    
#     content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
#     object_id = models.PositiveIntegerField()
#     content_object = GenericForeignKey('content_type', 'object_id')
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
    
#     value = models.CharField(max_length=500)
    
# class Votes(models.Model):
#     post = models.ForeignKey(Post, on_delete=models.CASCADE)
#     user = models.ForeignKey(User, on_delete=models.CASCADE)