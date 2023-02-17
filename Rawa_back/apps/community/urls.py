from django.urls import path
from .views import CommunityView

urlpatterns=[
    path('community/', CommunityView.as_view(), name='communities'),
    path('community/<int:id>', CommunityView.as_view(), name='community')
]
