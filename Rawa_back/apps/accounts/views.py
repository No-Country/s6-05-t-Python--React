from rest_framework.response import Response
from rest_framework.views import APIView


class ListAll(APIView):

    def get(self, request):
        """
        Return a list of all users.
        """
        return Response({"access": "seccess"})