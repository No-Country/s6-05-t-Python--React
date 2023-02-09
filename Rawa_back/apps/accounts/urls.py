from django.urls import path

from apps.accounts.views import ListAll

urlpatterns = [
    path('list/', ListAll.as_view(), name='list_all'),
]