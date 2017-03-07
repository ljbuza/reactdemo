import os

from django.http import HttpResponse
from django.views.generic import View
from reactdemo import settings

class IndexView(View):
    """main page"""

    def get(self, request):
        """Return html for main app page."""

        abspath = open(os.path.join(settings.BASE_DIR, 'assets/index.html'), 'r')
        return HttpResponse(content=abspath.read())
    