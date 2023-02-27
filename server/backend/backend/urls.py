

from django.contrib import admin
from django.urls import path
from webshop.views import StorageAll
from webshop.views import City
from webshop.views import TransactionsAll
from webshop.views import LoginView, Logout


admin.site.site_url = 'localhost:3000'
admin.site.site_header = "Päron AB"
admin.site.site_title = "Päron AB Webbapp"
admin.site.index_title = "Välkommen till Päron AB"


urlpatterns = [
    path('admin/', admin.site.urls),
    path('storages', StorageAll.as_view()),


    path('city', City.as_view()),
    path('transactions', TransactionsAll.as_view()),
    path('transactions/<str:id>', TransactionsAll.as_view()),

    path('login', LoginView.as_view()),
    path('logout', Logout.as_view()),



]
