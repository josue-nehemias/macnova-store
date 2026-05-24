'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Search,
  User,
  ShoppingBag,
  Menu,
  X,
  ChevronRight,
  Store,
} from 'lucide-react'

const anuncios = [
  'Precios especiales para estudiantes y profesores. Más información',
  'Cambia tu equipo Apple por uno nuevo. Descubre cómo',
  'iPhone 17 Pro disponible en MacNova. Comprar ahora',
]

const categorias = [
  { nombre: 'Mac', href: '/productos?categoria=mac', submenu: ['MacBook Air', 'MacBook Pro', 'iMac', 'Mac mini'] },
  { nombre: 'iPad', href: '/productos?categoria=ipad', submenu: ['iPad Pro', 'iPad Air', 'iPad mini', 'iPad'] },
  { nombre: 'iPhone', href: '/productos?categoria=iphone', submenu: ['Todos los iPhone', 'iPhone 17 Pro', 'iPhone 17', 'iPhone Air', 'iPhone 16', 'Accesorios iPhone'] },
  { nombre: 'Watch', href: '/productos?categoria=watch', submenu: ['Apple Watch Ultra', 'Apple Watch Series', 'Apple Watch SE'] },
  { nombre: 'AirPods', href: '/productos?categoria=airpods', submenu: ['AirPods Pro', 'AirPods 4', 'AirPods Max'] },
  { nombre: 'TV & Hogar', href: '/productos?categoria=tv-hogar', submenu: ['Apple TV 4K', 'HomePod', 'HomePod mini'] },
  { nombre: 'Accesorios', href: '/productos?categoria=accesorios', submenu: ['Fundas', 'Cargadores', 'Cables', 'MagSafe'] },
  { nombre: 'Servicios', href: '/servicios', submenu: ['Soporte técnico', 'Financiación', 'Garantía', 'Reparaciones'] },
  { nombre: 'Blog', href: '/blog', submenu: [] },
  { nombre: 'Tiendas', href: '/tiendas', submenu: [] },
  { nombre: 'Soporte', href: '/soporte', submenu: [] },
  { nombre: 'Educación', href: '/educacion', submenu: ['Estudiantes', 'Docentes', 'Centros educativos'] },
  { nombre: 'Empresas', href: '/empresas', submenu: [] },
]

type NavbarProps = {
  onOpenCart?: () => void
}

export default function Navbar({ onOpenCart }: NavbarProps) {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [submenuAbierto, setSubmenuAbierto] = useState<string | null>(null)
  const [anuncioActual, setAnuncioActual] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setAnuncioActual((prev) => (prev + 1) % anuncios.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const abrirCarrito = () => {
    if (onOpenCart) {
      onOpenCart()
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="bg-[#0071e3] text-white">
        <div className="max-w-[1200px] mx-auto px-4 h-[34px] flex items-center justify-between text-xs">
          <button
            type="button"
            aria-label="Anuncio anterior"
            onClick={() =>
              setAnuncioActual((prev) =>
                prev === 0 ? anuncios.length - 1 : prev - 1
              )
            }
            className="text-xl px-2"
          >
            ‹
          </button>

          <p className="text-center font-semibold leading-tight">
            {anuncios[anuncioActual]}
          </p>

          <button
            type="button"
            aria-label="Anuncio siguiente"
            onClick={() => setAnuncioActual((prev) => (prev + 1) % anuncios.length)}
            className="text-xl px-2"
          >
            ›
          </button>
        </div>
      </div>

      <div className="lg:hidden bg-white px-4 py-3 text-sm border-b border-gray-100">
        <Link href="/tiendas" className="flex items-center gap-2 text-gray-800">
          <Store size={16} />
          Selecciona tu tienda
        </Link>
      </div>

      <div className="bg-white border-b-4 border-[#00aeef] lg:border-b-0">
        <div className="max-w-[1200px] mx-auto px-4 h-[74px] lg:h-[82px] grid grid-cols-[44px_1fr_44px] lg:grid-cols-[260px_1fr_300px] items-center gap-4">
          <button
            type="button"
            aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="lg:hidden w-10 h-10 flex items-center justify-center"
          >
            {menuAbierto ? <X size={25} /> : <Menu size={25} />}
          </button>

          <Link
            href="/"
            className="flex items-center justify-center lg:justify-start gap-3 min-w-0"
          >
            <span className="text-[22px] sm:text-2xl lg:text-[26px] font-extrabold tracking-tight text-[#1d1d1f] whitespace-nowrap">
              MacNova
            </span>

            <img
              src="https://rossellimac.es/cdn/shop/files/download_10_105x@2x.webp?v=1754283475"
              alt="Apple Premium Partner"
              className="h-[36px] w-auto object-contain shrink-0"
            />
          </Link>

          <div className="hidden lg:flex justify-center">
            <div className="w-[460px] bg-[#f5f5f7] rounded-full px-5 py-3 flex items-center gap-3">
              <Search size={20} className="text-gray-500" />
              <input
                placeholder="Búsqueda"
                className="bg-transparent outline-none w-full text-gray-700"
              />
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-end gap-5 text-sm text-gray-700">
            <Link href="/tiendas" className="flex items-center gap-1 hover:text-black">
              <Store size={16} />
              Selecciona tu tienda
            </Link>

            <Link href="/cuenta" aria-label="Mi cuenta">
              <User size={22} />
            </Link>

            <button
              type="button"
              onClick={abrirCarrito}
              aria-label="Carrito"
              className="relative hover:opacity-70 transition cursor-pointer"
            >
              <ShoppingBag size={22} />

              <span className="absolute -top-2 -right-2 bg-[#0071e3] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                0
              </span>
            </button>
          </div>

          <button
            type="button"
            onClick={abrirCarrito}
            aria-label="Carrito"
            className="lg:hidden w-10 h-10 flex items-center justify-center justify-self-end"
          >
            <ShoppingBag size={23} />
          </button>
        </div>
      </div>

      {menuAbierto && (
        <>
          <div className="lg:hidden bg-white px-4 pb-3 pt-3 border-b border-gray-200">
            <div className="flex items-center gap-2 bg-[#f5f5f7] rounded-full px-4 py-3">
              <Search size={19} className="text-gray-500" />
              <input
                placeholder="Búsqueda"
                className="bg-transparent outline-none text-base flex-1"
              />
            </div>
          </div>

          <div className="lg:hidden bg-white border-t border-gray-100 max-h-[calc(100vh-170px)] overflow-y-auto">
            {categorias.map((cat) => (
              <div key={cat.nombre} className="border-b border-gray-200">
                {cat.submenu.length > 0 ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setSubmenuAbierto(
                          submenuAbierto === cat.nombre ? null : cat.nombre
                        )
                      }
                      className="w-full px-6 py-4 flex items-center justify-between text-left text-[15px] font-medium text-[#1d1d1f]"
                    >
                      {cat.nombre}

                      <ChevronRight
                        size={18}
                        className={
                          submenuAbierto === cat.nombre
                            ? 'rotate-90 transition'
                            : 'transition'
                        }
                      />
                    </button>

                    {submenuAbierto === cat.nombre && (
                      <div className="bg-[#fafafa] pb-3">
                        {cat.submenu.map((item) => (
                          <Link
                            key={item}
                            href={`${cat.href}&modelo=${item
                              .toLowerCase()
                              .replaceAll(' ', '-')}`}
                            onClick={() => setMenuAbierto(false)}
                            className="block px-9 py-2.5 text-sm text-gray-700"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={cat.href}
                    onClick={() => setMenuAbierto(false)}
                    className="block px-6 py-4 text-[15px] font-medium text-[#1d1d1f]"
                  >
                    {cat.nombre}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      <nav className="hidden lg:block bg-white border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 h-[52px] flex items-center gap-7">
          {categorias.map((cat, index) => (
            <div
              key={cat.nombre}
              className="relative h-full flex items-center"
              onMouseEnter={() => setSubmenuAbierto(cat.nombre)}
              onMouseLeave={() => setSubmenuAbierto(null)}
            >
              {index === 9 && <span className="text-gray-300 mr-7">|</span>}

              <Link
                href={cat.href}
                className="text-sm font-semibold tracking-wide text-[#1d1d1f] hover:text-[#0071e3]"
              >
                {cat.nombre}
              </Link>

              {submenuAbierto === cat.nombre && cat.submenu.length > 0 && (
                <div className="absolute left-0 top-full z-50">
                  <div className="bg-white border border-gray-200 shadow-xl min-w-[275px] py-4">
                    {cat.submenu.map((item) => (
                      <Link
                        key={item}
                        href={`${cat.href}&modelo=${item
                          .toLowerCase()
                          .replaceAll(' ', '-')}`}
                        className="block px-6 py-2.5 text-sm font-semibold text-black hover:bg-[#f5f5f7]"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  )
}