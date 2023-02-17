from django.contrib import admin
from .models import Community
from .models import GroupCommunity

admin.site.register(Community)
admin.site.register(GroupCommunity)

# class CommunityForm(admin.ModelForm):
#     class Meta:
#         list_display=['id', 'name', 'description', 'image', 'verifity']

# class GroupCommunityForm(admin.ModelForm):
#     class Meta:
#         list_display=['id', 'hobby', 'description', 'image', 'feed', 'date_publication']


