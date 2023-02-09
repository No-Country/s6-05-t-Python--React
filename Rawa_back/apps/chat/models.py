from django.db import models
from apps.accounts.models import User


class ChatModel(models.Model):

    user_is = models.ForeignKey(User, on_delete=models.CASCADE)
    recipient = models.TextField()

    class Meta:
        verbose_name = 'Chat'
        verbose_name_plural = 'Chats'
        ordering = ['id']
