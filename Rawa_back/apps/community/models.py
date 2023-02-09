from django.db import models

from apps.accounts.models import User


class CommunityModel(models.Model):

    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, unique=True)
    image = models.ImageField(upload_to='community/', default='community.png', blank=True, null=True)
    verify = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = 'Community'
        verbose_name_plural = 'Communities'
        ordering = ['id']


class GroupCommunity(models.Model):
    
    community_id = models.ForeignKey(CommunityModel, on_delete=models.CASCADE)
    hobby = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='group/', default='group.png', blank=True, null=True)
    feed = models.TextField(blank=True, null=True)

    def __str__(self) -> str:
        return self.hobby

    class Meta:
        verbose_name = 'Group'
        verbose_name_plural = 'Groups'
        ordering = ['id']

