# MacNova Store

MacNova Store es una tienda online de productos Apple desarrollada con React/Next.js en el frontend y Django REST Framework en el backend. El sistema permite gestionar productos, categorías, usuarios, roles, pedidos, carrito de compras y catálogo dinámico conectado mediante API REST.

## Descripción del Proyecto

El proyecto MacNova está inspirado visualmente en tiendas Apple premium como Rossellimac. Su objetivo es ofrecer una experiencia moderna, limpia y profesional para la compra de productos Apple, integrando un panel administrativo en Django y una interfaz web dinámica en React/Next.js.

## Stack Tecnológico

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- Axios
- Lucide React

### Backend
- Python
- Django
- Django REST Framework
- SimpleJWT
- Pillow
- django-cors-headers

### Base de Datos
- SQLite en desarrollo
- PostgreSQL en producción

### Control de Versiones
- Git
- GitHub
- Git Flow

## Roles del Sistema

### Administrador
- Gestionar productos y categorías.
- Subir imágenes de productos.
- Ver usuarios registrados.
- Gestionar stock.
- Ver pedidos.
- Administrar reportes.

### Vendedor
- Registrar y actualizar productos.
- Modificar precios y stock.
- Gestionar pedidos asignados.
- Marcar pedidos como enviados.

### Cliente
- Ver catálogo de productos.
- Agregar productos al carrito.
- Realizar pedidos.
- Ver historial de compras.
- Guardar favoritos.
- Actualizar perfil.

## Funcionalidades Principales

- Catálogo de productos Apple.
- Categorías dinámicas.
- API REST para productos y categorías.
- Panel administrativo Django.
- Subida de imágenes.
- Frontend conectado al backend.
- Diseño responsive estilo Apple.
- Gestión de usuarios con roles.
- GitHub Projects con tablero Kanban.

## Requisitos Funcionales

- RF01: El sistema debe permitir registrar productos Apple.
- RF02: El sistema debe permitir editar productos existentes.
- RF03: El sistema debe permitir eliminar productos desde el panel admin.
- RF04: El sistema debe permitir registrar categorías.
- RF05: El sistema debe mostrar productos desde la API REST.
- RF06: El sistema debe permitir subir imágenes de productos.
- RF07: El sistema debe mostrar productos destacados en el home.
- RF08: El sistema debe permitir gestionar usuarios.
- RF09: El sistema debe permitir asignar roles a usuarios.
- RF10: El sistema debe permitir visualizar productos por categoría.
- RF11: El sistema debe permitir agregar productos al carrito.
- RF12: El sistema debe permitir realizar checkout.
- RF13: El sistema debe permitir registrar pedidos.
- RF14: El sistema debe permitir aplicar cupones.
- RF15: El sistema debe permitir ver historial de pedidos.

## Requisitos No Funcionales

- RNF01: El sistema debe tener diseño responsive.
- RNF02: El backend debe exponer servicios mediante API REST.
- RNF03: El sistema debe usar autenticación segura.
- RNF04: El sistema debe permitir escalabilidad hacia PostgreSQL.
- RNF05: El sistema debe mantener estructura modular por apps.
- RNF06: El frontend debe consumir datos dinámicos desde Django.
- RNF07: El sistema debe tener control de versiones con Git Flow.
- RNF08: El sistema debe permitir mantenimiento mediante código organizado.

## Estructura del Proyecto

```txt
macnova-store/
├── backend/
├── api/
├── productos/
├── usuarios/
├── pedidos/
├── carrito/
├── frontend/
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── public/
├── media/
├── requirements.txt
├── manage.py
└── README.md
