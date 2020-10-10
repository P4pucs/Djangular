from django.test import TestCase
from django.contrib.auth import get_user_model

from unittest.mock import patch

from core import models

class ModelTests(TestCase):

    def test_create_user_with_email_successful(self):
        email = "test@alma.com"
        password = "test123"

        user = get_user_model().objects.create_user(
			email=email,
			password=password
		)

        self.assertEqual(user.email, email.lower()) #also checks that email is not case sensitive
        self.assertTrue(user.check_password(password))

    def test_create_user_without_email_unsuccessful(self):
        with self.assertRaises(ValueError):
            get_user_model().objects.create_user(None, 'test123')

    def test_create_superuser(self):
        user = get_user_model().objects.create_superuser(
            email='test@alma.com',
            password='test123'
        )

        self.assertTrue(user.is_superuser)

    @patch('uuid.uuid4')
    def test_image_file_name_uuid(self, mock_uuid):
        uuid = 'test_uuid'
        mock_uuid.return_value = uuid
        file_path = models.image_file_path(None, 'testimage.jpg')

        exp_path = f'uploads/images/{uuid}.jpg'

        self.assertEqual(file_path, exp_path)