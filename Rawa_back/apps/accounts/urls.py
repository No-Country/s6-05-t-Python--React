from django.urls import path
from apps.accounts.views import (RegisterView, VerifyEmail, LoginView)
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    # path('logout/', LogoutAPIView.as_view(), name="logout"),
    path('token/refresh/', TokenRefreshView.as_view(), name="token_refresh"),
    path('email-verify/', VerifyEmail.as_view(), name='email-verify'),
]