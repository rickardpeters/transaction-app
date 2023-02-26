"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
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

from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken import views
from webshop.views import Storage
from webshop.views import StorageAll
from webshop.views import City
from webshop.views import TransactionsAll
from webshop.views import Login, Logout


admin.site.site_header = "Päron AB"
admin.site.site_title = "Päron AB Webbapp"
admin.site.index_title = "Välkommen till Päron AB"


urlpatterns = [
    path('admin/', admin.site.urls),
    path('storages', StorageAll.as_view()),
    path('storages/<str:city>/<str:article>', Storage.as_view()),

    path('city', City.as_view()),
    path('transactions', TransactionsAll.as_view()),

    path('login', Login.as_view()),
    path('logout', Logout.as_view()),



]
