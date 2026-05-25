from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):

    ADMIN = 'ADMIN'
    VENDEDOR = 'VENDEDOR'
    CLIENTE = 'CLIENTE'

    ROLES = [
        (ADMIN, 'Administrador'),
        (VENDEDOR, 'Vendedor'),
        (CLIENTE, 'Cliente'),
    ]

    rol = models.CharField(
        max_length=20,
        choices=ROLES,
        default=CLIENTE
    )

    foto = models.ImageField(
        upload_to='usuarios/',
        blank=True,
        null=True
    )

    direccion = models.TextField(
        blank=True,
        null=True
    )

    telefono = models.CharField(
        max_length=20,
        blank=True,
        null=True
    )

    def __str__(self):
        return self.username