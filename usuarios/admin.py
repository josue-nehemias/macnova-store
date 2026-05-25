from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser


@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):

    fieldsets = UserAdmin.fieldsets + (
        (
            'Información adicional',
            {
                'fields': (
                    'rol',
                    'foto',
                    'direccion',
                    'telefono',
                )
            }
        ),
    )

    list_display = (
        'username',
        'email',
        'rol',
        'is_staff',
    )