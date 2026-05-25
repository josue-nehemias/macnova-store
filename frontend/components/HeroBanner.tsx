'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const slides = [
  {
    titulo: 'iPhone Air',
    href: '/productos?categoria=iphone&modelo=iphone-air',
    imagen:
      'https://rossellimac.es/cdn/shop/files/Q3FY2026_20-anos-HOME_Desktop_iPhone-Air.png?v=1778174153&width=1400',
    fondo: '#11aceb',
  },
  {
    titulo: 'AirPods Max 2',
    href: '/productos?categoria=airpods',
    imagen:
      'https://rossellimac.es/cdn/shop/files/ESES_AirPodsMax2_Q226_Web_Banner_1400x700_Avail_1fcfae32-4b0c-48d4-b53a-3c7dd70da8f7.png?v=1775465059&width=1400',
    fondo: '#f5f5f7',
  },
  {
    titulo: 'MacBook Neo',
    href: '/productos?categoria=mac',
    imagen:
      'https://rossellimac.es/cdn/shop/files/ESES_MacBookNeo_Q226_Web_Banner_1400x700_Avail_1b15500f-0b89-44a2-bf8c-d1957eae3280.png?v=1773155989&width=1400',
    fondo: '#f5f5f7',
  },
  {
    titulo: 'iPad Air',
    href: '/productos?categoria=ipad',
    imagen:
      'https://rossellimac.es/cdn/shop/files/Q3FY2026_20-anos-HOME_Desktop_iPad-Air.png?v=1778174154&width=1400',
    fondo: '#11aceb',
  },
  {
    titulo: 'Financiación',
    href: '/servicios/financiacion',
    imagen:
      'https://rossellimac.es/cdn/shop/files/Q3FY2026_Financiacion10-Cetelem_EVERGREEN_Web_Desktop-CTA.png?v=1776759075&width=1400',
    fondo: '#11aceb',
  },
]

export default function HeroBanner() {
  const [actual, setActual] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActual((prev) => (prev + 1) % slides.length)
    }, 4500)

    return () => clearInterval(timer)
  }, [])

  const slide = slides[actual]

  return (
    <section
      className="relative border-b border-gray-200 overflow-visible transition-all duration-500"
      style={{
        backgroundColor: slide.fondo,
      }}
    >
      <Link href={slide.href} className="block cursor-pointer">
        <div className="max-w-[1524px] mx-auto h-[240px] sm:h-[280px] md:h-[340px] lg:h-[406px] flex items-center justify-center overflow-hidden">
          <img
            src={slide.imagen}
            alt={slide.titulo}
            className="w-full h-full object-contain object-center select-none cursor-pointer"
            draggable={false}
          />
        </div>
      </Link>

      <div className="absolute left-1/2 -bottom-6 -translate-x-1/2 bg-white rounded-full px-6 py-3 shadow-lg flex items-center gap-4 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ir al slide ${i + 1}`}
            onClick={() => setActual(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              i === actual
                ? 'bg-black scale-110'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  )
}