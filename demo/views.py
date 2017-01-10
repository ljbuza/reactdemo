from django.shortcuts import render
from rest_framework import generics

from demo.models import Book
from demo.serializers import BookSerializer

class BookList(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
