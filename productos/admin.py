from django.contrib import admin
from .models import Categoria, Producto


@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ("id", "nombre", "slug", "activo")
    search_fields = ("nombre",)
    list_filter = ("activo",)


@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "nombre",
        "categoria",
        "modelo",
        "precio",
        "stock",
        "destacado",
        "activo",
    )
    search_fields = ("nombre", "modelo")
    list_filter = ("categoria", "destacado", "activo")
    list_editable = ("precio", "stock", "destacado", "activo")