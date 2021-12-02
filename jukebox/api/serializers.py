from rest_framework import serializers
from .models import Jukebox

class JukeboxSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jukebox
        fields = ('id', 'code', 'host', 'guest_can_pause', 'created_at')