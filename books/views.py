from django.shortcuts import render
from rest_framework import viewsets 

from books.models import Book
from books.serializers import BookSerializer

# class BooksList(generics.ListCreateAPIView):
#     queryset = Book.objects.all()
#     serializer_class = BookSerializer

class BooksViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
