from django.shortcuts import render
from rest_framework import generics, serializers
from .serializers import JukeboxSerializer
from .models import Jukebox

# Create your views here.

class JukeboxView(generics.ListAPIView):
    queryset = Jukebox.objects.all()
    serializer_class = JukeboxSerializer

