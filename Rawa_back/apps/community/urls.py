from django.urls import path
from .views import CommunityView
from .views import GroupCommunityView

urlpatterns = [
    path('community/', CommunityView.as_view(), name='communities'),
    path('community/<int:id>', CommunityView.as_view(), name='community'),
    path('community/', GroupCommunityView.as_view(), name='groups'),
    path('community/<int:id>', GroupCommunityView.as_view(), name='group')
]
