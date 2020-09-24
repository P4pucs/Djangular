from django.test import TestCase
from django.contrib.auth import get_user_model


class ModelTests(TestCase):

    def test_create_user_with_email_successful(self):
        email = "test@alma.com"
        password = "test123"

        user = get_user_model().objects.create_user(
			email=email,
			password=password
		)

        self.assertEqual(user.email, email.lower())
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
