from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token
from apps.accounts.api.views import UserApiViewSet

router = DefaultRouter()

router.register(prefix='user', basename='user', viewset=UserApiViewSet)

urlpatterns = [
    path('user/', include(router.urls), name='user_api'),
    path('login/', obtain_auth_token, name='login_api'),
]