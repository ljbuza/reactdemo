from __future__ import unicode_literals

from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=200, unique=True)
    author = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=6, decimal_places=2, blank=True, null=True)

def __str__(self):
    return self.title