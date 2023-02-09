# from django.contrib.auth.models import User
from apps.accounts.models import User
from django.db.models import (Model, TextField, DateTimeField, ForeignKey,
                              CASCADE)

from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer


class MessageModel(Model):
    """
    Esta clase representa el modelo de los mensajes, tiene un owner (user), timestamp, mensaje body y el receptor
    (recipient).

    """
    user = ForeignKey(User, on_delete=CASCADE, verbose_name='user',
                      related_name='from_user', db_index=True)
    recipient = ForeignKey(User, on_delete=CASCADE, verbose_name='recipient',
                           related_name='to_user', db_index=True)
    timestamp = DateTimeField('timestamp', auto_now_add=True, editable=False,
                              db_index=True)
    body = TextField('body')

    def __str__(self):
        return str(self.id)

    def characters(self):
        """
        Función para contar caracteres del mensaje.
         :return: número de caracteres del body
        """
        return len(self.body)

    def notify_ws_clients(self):
        """
        Informar al cliente que hay un nuevo mensaje.
        """
        notification = {
            'type': 'recieve_group_message',
            'message': '{}'.format(self.id)
        }

        channel_layer = get_channel_layer()
        print("user.id {}".format(self.user.id))
        print("user.id {}".format(self.recipient.id))

        async_to_sync(channel_layer.group_send)("{}".format(self.user.id), notification)
        async_to_sync(channel_layer.group_send)("{}".format(self.recipient.id), notification)

    def save(self, *args, **kwargs):
        """
        Recorta los espacios en blanco, guarda el mensaje y notifica al destinatario a través de WS
         si el mensaje es nuevo.
        """
        new = self.id
        self.body = self.body.strip()  # Recorta espacios en blanco del body
        super(MessageModel, self).save(*args, **kwargs)
        if new is None:
            self.notify_ws_clients()

    # Meta
    class Meta:
        app_label = 'chat'
        verbose_name = 'message'
        verbose_name_plural = 'messages'
        ordering = ('-timestamp',)
