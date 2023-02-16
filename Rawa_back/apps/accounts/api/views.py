from rest_framework.viewsets import ModelViewSet
from rest_framework.authtoken.models import Token

from apps.accounts.models import User
from apps.accounts.api.serializer import UserSerializer

class UserApiViewSet(ModelViewSet):
    serializer_class= UserSerializer
    queryset = User.objects.all()
    # token = Token.objects.create(queryset=queryset)
    # print(queryset)
    # print(token.key)

## permiso personalizado(rest_framework)
