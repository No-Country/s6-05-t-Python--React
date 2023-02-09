from django.contrib import admin

from apps.community.models import CommunityModel, GroupCommunity

admin.site.register(CommunityModel)
admin.site.register(GroupCommunity)
