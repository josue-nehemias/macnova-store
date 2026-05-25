'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import api from '@/lib/api'
import Navbar from '@/components/Navbar'

type Producto = {
  id: number
  categoria_nombre: string
  nombre: string
  modelo: string
  descripcion: string
  precio: string
  imagen: string | null
  destacado: boolean
}

export default function ProductosPage() {
  const searchParams = useSearchParams()
  const categoria = searchParams.get('categoria')

  const [productos, setProductos] = useState<Producto[]>([])

  useEffect(() => {
    obtenerProductos()
  }, [])

  const obtenerProductos = async () => {
    try {
      const response = await api.get('productos/')
      setProductos(response.data)
    } catch (error) {
      console.error('Error al obtener productos:', error)
    }
  }

  const productosFiltrados = categoria
    ? productos.filter((producto) =>
        producto.categoria_nombre
          .toLowerCase()
          .includes(categoria.toLowerCase())
      )
    : productos

  const titulo =
    categoria === 'iphone'
      ? 'iPhone'
      : categoria === 'mac'
      ? 'Mac'
      : categoria === 'ipad'
      ? 'iPad'
      : categoria === 'watch'
      ? 'Apple Watch'
      : categoria === 'airpods'
      ? 'AirPods'
      : 'Productos Apple'

  const imagen = (producto: Producto) =>
    producto.imagen?.startsWith('http')
      ? producto.imagen
      : producto.imagen
      ? `http://127.0.0.1:8000${producto.imagen}`
      : '/placeholder.png'

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* MINI CARRUSEL SUPERIOR */}
      <section className="border-b border-[#e5e5e5] bg-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 h-[108px] flex items-center gap-12 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {productosFiltrados.map((producto) => (
            <Link
              key={producto.id}
              href={`/producto/${producto.id}`}
              className="min-w-[170px] flex items-center gap-3 hover:opacity-75 transition"
            >
              <img
                src={imagen(producto)}
                alt={producto.nombre}
                className="w-[58px] h-[58px] object-contain"
              />

              <div>
                {producto.destacado && (
                  <p className="text-[9px] text-[#bf4800] font-bold">
                    NUEVO
                  </p>
                )}

                <p className="text-[12px] font-semibold text-black leading-tight">
                  {producto.nombre}
                </p>

                <p className="text-[11px] text-gray-500">
                  Desde S/ {producto.precio}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* HERO COMPARACIÓN */}
      <section className="bg-[#fbfbfd] border-b border-[#d2d2d7]">
        <div className="max-w-[1200px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="flex justify-center">
            <div className="flex items-end gap-5">
              {productosFiltrados.slice(0, 3).map((producto) => (
                <img
                  key={producto.id}
                  src={imagen(producto)}
                  alt={producto.nombre}
                  className="max-h-[220px] object-contain"
                />
              ))}
            </div>
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-[32px] md:text-[38px] font-bold tracking-[-0.8px] text-[#1d1d1f]">
              ¿Qué {titulo} elegir?
            </h1>

            <p className="text-gray-600 mt-3">
              Compara modelos, características y precios para elegir el producto ideal.
            </p>

            <button className="mt-6 border border-[#0071e3] text-[#0071e3] px-10 py-3 rounded-full font-semibold hover:bg-[#f0f7ff] transition">
              Comparar
            </button>
          </div>
        </div>
      </section>

      {/* LISTADO PRINCIPAL */}
      <section className="max-w-[1200px] mx-auto px-6">
        {productosFiltrados.map((producto) => (
          <article
            key={producto.id}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 border-b border-[#d2d2d7] py-16"
          >
            <div className="text-center md:text-left md:pl-12">
              {producto.destacado && (
                <p className="text-[#bf4800] text-xs font-bold mb-2 tracking-wide">
                  NUEVO
                </p>
              )}

              <h2 className="text-[38px] md:text-[44px] leading-tight font-bold tracking-[-1px] text-black">
                {producto.nombre}
              </h2>

              <p className="text-[18px] text-black mt-2">
                {producto.descripcion}
              </p>

              <p className="text-[16px] text-black mt-1">
                Desde S/ {producto.precio}
              </p>

              <div className="mt-7 flex justify-center md:justify-start items-center gap-5">
                <Link
                  href={`/producto/${producto.id}`}
                  className="text-[#0071e3] font-semibold text-sm hover:underline"
                >
                  Más información ›
                </Link>

                <Link
                  href={`/producto/${producto.id}`}
                  className="bg-[#0071e3] text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#005bb5] transition"
                >
                  Comprar
                </Link>
              </div>

              <div className="mt-8 flex justify-center md:justify-start gap-6 text-[#0071e3] text-sm font-semibold">
                <span>🟩 Etiqueta Energética ›</span>
                <span>Ficha de Producto ›</span>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src={imagen(producto)}
                alt={producto.nombre}
                className="max-h-[320px] object-contain"
              />
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}