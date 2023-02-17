from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from apps.accounts.serializer import RegisterSerializer, LoginSerializer
from apps.accounts.verify import email_confirm


class LoginView(GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


class RegisterView(GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            user_data = serializer.data
            email_confirm(request, user_data)
            return Response(user_data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VerifyEmail(APIView):
    def get(self, request):
        pass


# class LogoutAPIView(GenericAPIView):
#     serializer_class = LogoutSerializer
#
#     permission_classes = (permissions.IsAuthenticated,)
#
#     def post(self, request):
#
#         serializer = self.serializer_class(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({'message': 'Sesión cerrada correctamente.'}, status=status.HTTP_200_OK)
#         return Response({'error': 'No existe este usuario.'}, status=status.HTTP_400_BAD_REQUEST)