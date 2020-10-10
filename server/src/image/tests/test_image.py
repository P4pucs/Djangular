from django.test import TestCase
from django.contrib.auth import get_user_model
from django.urls import reverse

from rest_framework.test import APIClient
from rest_framework import status

from image.serializers import ImageSerializer
from core.models import Image


IMAGES_URL = reverse('image:image-list')


class PublicImageTests(TestCase):

    def setUp(self):
        self.client = APIClient()

    def test_auth_required(self):
        res = self.client.get(IMAGES_URL)

        self.assertEqual(res.status_code, status.HTTP_401_UNAUTHORIZED)


class PrivateImageTests(TestCase):

    def setUp(self):
        self.client = APIClient()
        self.user = get_user_model().objects.create_user(
            'test@alma.com',
            'test123'
        )
        self.client.force_authenticate(self.user)

    def test_add_image_succesfull(self):
        payload = { 'title': 'test123'}

        res = self.client.post(IMAGES_URL, payload)

        self.assertEqual(res.status_code, status.HTTP_201_CREATED)
        image = Image.objects.get(id=res.data['id'])
        for key in payload.keys():
            self.assertEqual(payload[key], getattr(image, key))

        def test_add_image_without_title_succesfull(self):
            payload = { }

            res = self.client.post(IMAGES_URL, payload)

            self.assertEqual(res.status_code, status.HTTP_201_CREATED)
            image = Image.objects.get(id=res.data['id'])
            for key in payload.keys():
                self.assertEqual(payload[key], getattr(image, key))