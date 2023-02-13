from django.urls import path, include
from apps.accounts.views import ListAll
# from apps.accounts.api.router import router_posts

urlpatterns = [
    path('list/', ListAll.as_view(), name='list_all'),
    # path('user/', include(router_posts)),
    path('user/', include('apps.accounts.api.urls'))
]