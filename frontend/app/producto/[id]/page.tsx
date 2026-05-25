'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import api from '@/lib/api'
import AddToCartButton from '@/components/AddToCartButton'

type Producto = {
  id: number
  categoria_nombre: string
  nombre: string
  modelo: string
  descripcion: string
  precio: string
  stock: number
  color: string
  almacenamiento: string
  imagen: string | null
  destacado: boolean
}

export default function ProductoDetalle() {
  const params = useParams()
  const id = params.id

  const [producto, setProducto] = useState<Producto | null>(null)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    obtenerProducto()
  }, [])

  const obtenerProducto = async () => {
    try {
      const response = await api.get(`productos/${id}/`)
      setProducto(response.data)
    } catch (error) {
      console.error('Error al obtener producto:', error)
    } finally {
      setCargando(false)
    }
  }

  if (cargando) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-500">
          Cargando producto...
        </p>
      </main>
    )
  }

  if (!producto) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-500">
          Producto no encontrado.
        </p>
      </main>
    )
  }

  const imagenProducto = producto.imagen?.startsWith('http')
    ? producto.imagen
    : producto.imagen
      ? `http://127.0.0.1:8000${producto.imagen}`
      : '/placeholder.png'

  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      <section className="max-w-[1200px] mx-auto px-6 py-10">

        <Link
          href="/"
          className="inline-block text-[#0071e3] text-sm font-semibold mb-8"
        >
          ← Volver al inicio
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white rounded-[28px] p-8 lg:p-12 shadow-sm">

          <div className="flex items-center justify-center bg-[#f5f5f7] rounded-[24px] min-h-[430px]">

            <img
              src={imagenProducto}
              alt={producto.nombre}
              className="max-h-[390px] max-w-full object-contain"
              draggable={false}
            />

          </div>

          <div className="flex flex-col justify-center">

            {producto.destacado && (
              <p className="text-[#bf4800] text-xs font-bold tracking-wide mb-3">
                NUEVO
              </p>
            )}

            <p className="text-sm text-gray-500 mb-2">
              {producto.categoria_nombre}
            </p>

            <h1 className="text-[46px] leading-[52px] font-bold tracking-[-1.5px] text-[#1d1d1f]">
              {producto.nombre}
            </h1>

            <p className="text-[22px] text-[#1d1d1f] mt-4">
              {producto.descripcion}
            </p>

            <div className="mt-8 space-y-3 text-[16px] text-gray-700">

              <p>
                <span className="font-semibold text-black">
                  Modelo:
                </span>{' '}
                {producto.modelo}
              </p>

              <p>
                <span className="font-semibold text-black">
                  Color:
                </span>{' '}
                {producto.color}
              </p>

              <p>
                <span className="font-semibold text-black">
                  Almacenamiento:
                </span>{' '}
                {producto.almacenamiento}
              </p>

              <p>
                <span className="font-semibold text-black">
                  Stock:
                </span>{' '}
                {producto.stock} unidades
              </p>

            </div>

            <p className="text-[30px] font-bold text-[#1d1d1f] mt-8">
              S/ {producto.precio}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">

              <AddToCartButton producto={producto} />

              <button className="border border-[#0071e3] text-[#0071e3] px-8 py-3 rounded-full font-semibold hover:bg-[#f0f7ff] transition">
                Comprar ahora
              </button>

            </div>

          </div>

        </div>

      </section>
    </main>
  )
}