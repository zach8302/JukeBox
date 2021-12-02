from django.urls import path
from .views import JukeboxView

urlpatterns = [
    path('jukebox', JukeboxView.as_view())
]
