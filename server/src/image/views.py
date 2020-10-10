from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import viewsets, mixins, status
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from core.models import Image

from image import serializers


class ImageViewSet(viewsets.ModelViewSet):

    serializer_class = serializers.ImageSerializer
    queryset = Image.objects.all()
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return serializers.ImageSerializer

        return self.serializer_class
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)