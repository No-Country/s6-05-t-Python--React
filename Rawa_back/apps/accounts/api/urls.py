from django.urls import path, include
from rest_framework.routers import DefaultRouter
from apps.accounts.api.views import UserApiViewSet

router_posts = DefaultRouter()

router_posts.register(prefix='user', basename='user', viewset=UserApiViewSet)

urlpatterns = [
    path('user/', include(router_posts.urls), name='user_api'),
]