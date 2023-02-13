from django.contrib import admin

from apps.accounts.models import User

# admin.site.register(User)

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['full_name']
