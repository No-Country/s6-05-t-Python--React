from django.db import models
from apps.accounts.manager import MyUserManager
from django.contrib.auth.models import (
    AbstractBaseUser, PermissionsMixin)


class User(AbstractBaseUser, PermissionsMixin):

    full_name = models.CharField(max_length=255, unique=True)
    image = models.ImageField(upload_to='user/', default='profile.png', blank=True, null=True)
    email = models.EmailField(max_length=255, unique=True, db_index=True)
    artist = models.BooleanField(default=False)

    is_verified = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = MyUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['full_name']

    def __str__(self):
        return self.email