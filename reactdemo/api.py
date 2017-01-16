from rest_framework.routers import DefaultRouter

from books.views import BooksViewSet

ROUTER = DefaultRouter()
ROUTER.register('books', BooksViewSet)
