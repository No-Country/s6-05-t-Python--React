from django.db import models
from django.db.models import (Model, TextField, DateTimeField, ForeignKey, CASCADE)

# Create your models here.
class Community(models.Model):
    id_community=models.AutoField (primary_key=True)
    name=models.CharField (max_length=200, blank=False, null=False)
    description=models.TextField (blank=False, null=False)
    image=models.ImageField (upload_to='community/', default='community.png', blank=True, null=True)
    verify=models.BooleanField (default=True)

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = 'Community'
        verbose_name_plural = 'Communities'
        ordering = ['name']


class GroupCommunity(models.Model):
    
    id_group = models.AutoField (primary_key=True)
    community_category = models.ForeignKey(Community, on_delete=models.CASCADE)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='group/', default='group.png', blank=True, null=True)
    feed = models.TextField(blank=True, null=True),
    date_publication=models.DateField(blank=False, null=False)

    def __str__(self) -> str:
        return self.hobby

    class Meta:
        verbose_name = 'Group'
        verbose_name_plural = 'Groups'
        ordering = ['date_publication']