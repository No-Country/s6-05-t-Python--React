# from django.shortcuts import render
from django.views import View
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from .models import Community
import json

class CommunityView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    
    def get(self, request, id=0):
        if (id>0):
            communities=list(Community.objects.filter(id=id).values())
            if len(communities)>0:
                community=communities[0]
                datos={'massage': "Perfect", 'community': community}
            else:
                dato={'message': "Community not found..."}
            return JsonResponse(datos)
        else:
            communities=list(Community.objects.values())
            if len(communities)>0:
                datos={'message': "Perfect", 'communities': communities}
            else:
                datos={'message': "Oops, communities not found..."}
            return JsonResponse(datos)

    def post(self, request):
        # print(request.body)
        jd=json.loads(request.body)
        Community.objects.creats(name=jd['name'], description=jd['description'], image=jd['image'], verifity=jd['verifity'])
        datos={'message': "Perfect"}
        return JsonResponse(datos)

    def put(self, request, id):
        jd = json.loads(request.body)
        communities=list(Community.objects.filter(id=id).values())
        if len(communities)>0:
            Community+Community.objects.get(id=id)
            Community.name=jd['name']
            Community.description=jd['description']
            Community.image=jd['image']
            Community.verify=jd['verifity']
            Community.save()
            datos={'message': "Perfect"}
        else:
            datos={'message': 'Community not found...'}
        return JsonResponse(datos)

    def delet(self, request, id):
        communities=list(Community.objects.filter(id=id).values())
        if len(communities)>0:
            Community.objects.filter(id=id).delete()
            datos={'message': "Perfect"}
        else:
            datos={'message': "Community not found..."}
        return JsonResponse(datos)



# Create your views here.
