from rest_framework import serializers
from core.models import Image


class ImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Image
        fields = ('id', 'title', 'image')
        read_only_fields = ('id',)

