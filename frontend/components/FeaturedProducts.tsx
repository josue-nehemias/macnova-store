'use client'

import { useEffect, useRef, useState } from 'react'
import api from '@/lib/api'

type Producto = {
  id: number
  nombre: string
  modelo: string
  descripcion: string
  precio: string
  imagen: string | null
  destacado: boolean
}

export default function FeaturedProducts() {
  const sliderRef = useRef<HTMLDivElement | null>(null)
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

  const mover = (direction: 'left' | 'right') => {
    sliderRef.current?.scrollBy({
      left: direction === 'right' ? 1120 : -1120,
      behavior: 'smooth',
    })
  }

  return (
    <section className="w-full bg-white border-t border-[#e5e5e5] overflow-hidden py-[34px]">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-[30px] leading-[38px] font-[500] tracking-[-0.4px] text-black mb-7">
          Descubre todas las novedades.
        </h2>

        <div className="relative w-[calc(100%+170px)] pr-[170px]">
          <button
            type="button"
            aria-label="Anterior"
            title="Anterior"
            onClick={() => mover('left')}
            className="hidden md:flex absolute left-[-40px] top-1/2 -translate-y-1/2 z-30 w-[28px] h-[76px] bg-white border-r border-[#d2d2d7] items-center justify-center text-[32px] text-[#86868b] hover:text-black"
          >
            ‹
          </button>

          <div
            ref={sliderRef}
            className="overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex gap-[22px] min-w-max pr-[170px]">
              {productos.map((producto) => (
                <article
                  key={producto.id}
                  className="w-[260px] h-[430px] bg-white rounded-[16px] border border-[#eeeeee] shadow-[0_2px_12px_rgba(0,0,0,0.08)] shrink-0 overflow-hidden"
                >
                  <div className="h-[178px] flex items-end justify-center px-6 pt-7">
                    <img
                      src={
                        producto.imagen?.startsWith('http')
                          ? producto.imagen
                          : producto.imagen
                          ? `http://127.0.0.1:8000${producto.imagen}`
                          : '/placeholder.png'
                      }
                      alt={producto.nombre}
                      draggable={false}
                      className="max-h-[155px] max-w-full object-contain select-none"
                    />
                  </div>

                  <div className="px-5 pt-6 pb-5">
                    {producto.destacado && (
                      <p className="text-[11px] leading-[14px] font-[500] text-[#bf4800] tracking-wide mb-2">
                        NUEVO
                      </p>
                    )}

                    <h3 className="text-[22px] leading-[26px] font-[600] text-black">
                      {producto.nombre}
                    </h3>

                    <p className="text-[14px] leading-[20px] font-[500] text-black mt-2">
                      {producto.descripcion}
                    </p>

                    <p className="text-[14px] leading-[20px] text-black mt-6">
                      S/ {producto.precio}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Siguiente"
            title="Siguiente"
            onClick={() => mover('right')}
            className="hidden md:flex absolute right-[0px] top-1/2 -translate-y-1/2 z-30 w-[28px] h-[76px] bg-white border-l border-[#d2d2d7] items-center justify-center text-[32px] text-[#86868b] hover:text-black"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}