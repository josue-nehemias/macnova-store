'use client'

type ProductoCarrito = {
  id: number
  nombre: string
  precio: string
  imagen: string | null
  cantidad?: number
}

type AddToCartButtonProps = {
  producto: ProductoCarrito
}

export default function AddToCartButton({ producto }: AddToCartButtonProps) {
  const agregarAlCarrito = () => {
    const carritoActual = localStorage.getItem('macnova_carrito')
    const carrito = carritoActual ? JSON.parse(carritoActual) : []

    const productoExistente = carrito.find(
      (item: ProductoCarrito) => item.id === producto.id
    )

    let nuevoCarrito

    if (productoExistente) {
      nuevoCarrito = carrito.map((item: ProductoCarrito) =>
        item.id === producto.id
          ? { ...item, cantidad: (item.cantidad || 1) + 1 }
          : item
      )
    } else {
      nuevoCarrito = [
        ...carrito,
        {
          ...producto,
          cantidad: 1,
        },
      ]
    }

    localStorage.setItem('macnova_carrito', JSON.stringify(nuevoCarrito))

    alert('Producto agregado al carrito')
  }

  return (
    <button
      onClick={agregarAlCarrito}
      className="bg-[#0071e3] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#005bb5] transition"
    >
      Agregar al carrito
    </button>
  )
}