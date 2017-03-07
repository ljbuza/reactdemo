from django.conf.urls import include, url
from django.contrib import admin
# from django.views.generic import TemplateView
from django.views.decorators.cache import cache_page
from reactdemo.api import ROUTER
from base import views as base_views

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    # url(r'^demo/', include('demo.urls')),
    # url(r'^$', TemplateView.as_view(template_name='index.html')),
    # url(r'^cust/$', TemplateView.as_view(template_name='cust.html')),
    # url(r'^advanced/$', TemplateView.as_view(template_name='cust.html')),
    # url(r'^history/$', TemplateView.as_view(template_name='cust.html')),
    # url(r'^api/', include('books.urls', namespace='books')),
    url(r'^api/', include(ROUTER.urls)),

    # url(r'', cache_page(settings.PAGE_CACHE_SECONDS)(base_views.IndexView.as_view()), name='index'),
    url(r'', cache_page(60)(base_views.IndexView.as_view()), name='index'),

]
