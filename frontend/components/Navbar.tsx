'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
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
  {
    nombre: 'Mac',
    href: '/productos?categoria=mac',
    submenu: [
      'Todos los Mac',
      'MacBook Air',
      'MacBook Pro',
      'iMac',
      'Mac mini',
    ],
  },

  {
    nombre: 'iPad',
    href: '/productos?categoria=ipad',
    submenu: [
      'Todos los iPad',
      'iPad Pro',
      'iPad Air',
      'iPad mini',
      'iPad',
    ],
  },

  {
    nombre: 'iPhone',
    href: '/productos?categoria=iphone',
    submenu: [
      'Todos los iPhone',
      'iPhone 17 Pro',
      'iPhone 17',
      'iPhone 17e',
      'iPhone Air',
      'iPhone 16',
      'Accesorios para iPhone',
    ],
  },

  {
    nombre: 'Watch',
    href: '/productos?categoria=watch',
    submenu: [
      'Todos los Watch',
      'Apple Watch Ultra',
      'Apple Watch Series',
      'Apple Watch SE',
    ],
  },

  {
    nombre: 'AirPods',
    href: '/productos?categoria=airpods',
    submenu: [
      'Todos los AirPods',
      'AirPods Pro',
      'AirPods Max',
    ],
  },

  {
    nombre: 'TV & Hogar',
    href: '/productos?categoria=tv-hogar',
    submenu: [
      'Apple TV',
      'HomePod',
    ],
  },

  {
    nombre: 'Accesorios',
    href: '/productos?categoria=accesorios',
    submenu: [
      'Fundas',
      'Cargadores',
      'Cables',
      'MagSafe',
    ],
  },

  {
    nombre: 'Servicios',
    href: '/servicios',
    submenu: [
      'AppleCare',
      'Financiación',
      'Reparaciones',
    ],
  },

  {
    nombre: 'Blog',
    href: '/blog',
    submenu: [],
  },

  {
    nombre: 'Tiendas',
    href: '/tiendas',
    submenu: [],
  },

  {
    nombre: 'Soporte',
    href: '/soporte',
    submenu: [],
  },

  {
    nombre: 'Educación',
    href: '/educacion',
    submenu: [],
  },

  {
    nombre: 'Empresas',
    href: '/empresas',
    submenu: [],
  },
]

export default function Navbar() {
  const router = useRouter()

  const [menuAbierto, setMenuAbierto] = useState(false)

  const [submenuAbierto, setSubmenuAbierto] =
    useState<string | null>(null)

  const [anuncioActual, setAnuncioActual] =
    useState(0)

  const [cantidadCarrito, setCantidadCarrito] =
    useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setAnuncioActual(
        (prev) =>
          (prev + 1) % anuncios.length
      )
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const carrito =
      localStorage.getItem('macnova_carrito')

    const items = carrito
      ? JSON.parse(carrito)
      : []

    const total = items.reduce(
      (
        acum: number,
        item: { cantidad?: number }
      ) => acum + (item.cantidad || 1),
      0
    )

    setCantidadCarrito(total)
  }, [])

  const abrirCarrito = () => {
    router.push('/carrito')
  }

  const abrirCategoria = (
    cat: (typeof categorias)[number]
  ) => {
    if (cat.submenu.length > 0) {
      setSubmenuAbierto(
        submenuAbierto === cat.nombre
          ? null
          : cat.nombre
      )
    } else {
      router.push(cat.href)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white">

      {/* TOP BAR */}
      <div className="bg-[#0071e3] text-white">

        <div className="max-w-[1200px] mx-auto px-4 h-[34px] flex items-center justify-between text-xs">

          <button
            type="button"
            onClick={() =>
              setAnuncioActual((prev) =>
                prev === 0
                  ? anuncios.length - 1
                  : prev - 1
              )
            }
            className="text-xl px-2 cursor-pointer"
          >
            ‹
          </button>

          <p className="text-center font-semibold">
            {anuncios[anuncioActual]}
          </p>

          <button
            type="button"
            onClick={() =>
              setAnuncioActual(
                (prev) =>
                  (prev + 1) %
                  anuncios.length
              )
            }
            className="text-xl px-2 cursor-pointer"
          >
            ›
          </button>

        </div>

      </div>

      {/* HEADER */}
      <div className="bg-white border-b border-gray-200">

        <div className="max-w-[1200px] mx-auto px-4 h-[82px] flex items-center justify-between gap-6">

          {/* MOBILE MENU */}
          <button
            type="button"
            onClick={() =>
              setMenuAbierto(!menuAbierto)
            }
            className="lg:hidden cursor-pointer"
          >
            {menuAbierto
              ? <X size={25} />
              : <Menu size={25} />}
          </button>

          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <span className="text-[26px] font-extrabold tracking-tight text-[#1d1d1f]">
              MacNova
            </span>

            <img
              src="https://rossellimac.es/cdn/shop/files/download_10_105x@2x.webp?v=1754283475"
              alt="Premium Partner"
              className="h-[36px]"
            />
          </Link>

          {/* SEARCH */}
          <div className="hidden lg:flex w-[460px] bg-[#f5f5f7] rounded-full px-5 py-3 items-center gap-3">

            <Search
              size={20}
              className="text-gray-500"
            />

            <input
              placeholder="Búsqueda"
              className="bg-transparent outline-none w-full text-gray-700"
            />

          </div>

          {/* RIGHT */}
          <div className="hidden lg:flex items-center gap-5 text-sm text-gray-700">

            <Link
              href="/tiendas"
              className="flex items-center gap-1 hover:text-black"
            >
              <Store size={16} />
              Selecciona tu tienda
            </Link>

            <Link href="/cuenta">
              <User size={22} />
            </Link>

            <button
              type="button"
              onClick={abrirCarrito}
              className="relative cursor-pointer"
            >
              <ShoppingBag size={22} />

              <span className="absolute -top-2 -right-2 bg-[#0071e3] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                {cantidadCarrito}
              </span>
            </button>

          </div>

        </div>

      </div>

      {/* NAVBAR */}
      <nav className="hidden lg:block bg-white border-t border-gray-100">

        <div className="max-w-[1200px] mx-auto px-4 h-[52px] flex items-center gap-7">

          {categorias.map((cat, index) => (

            <div
              key={cat.nombre}
              className="relative h-full flex items-center"
            >

              {index === 9 && (
                <span className="text-gray-300 mr-7">
                  |
                </span>
              )}

              {/* BOTON */}
              <button
                type="button"
                onClick={() =>
                  abrirCategoria(cat)
                }
                className="text-sm font-semibold tracking-wide text-[#1d1d1f] hover:text-[#0071e3] cursor-pointer"
              >
                {cat.nombre}
              </button>

              {/* SUBMENU */}
              {submenuAbierto === cat.nombre &&
                cat.submenu.length > 0 && (

                  <div className="absolute left-0 top-full z-50">

                    <div className="bg-white border border-gray-200 shadow-lg min-w-[210px] py-3 rounded-[2px]">

                      {cat.submenu.map((item) => (

                        <Link
                          key={item}
                          href={cat.href}
                          onClick={() =>
                            setSubmenuAbierto(null)
                          }
                          className="block px-5 py-2 text-[13px] font-semibold text-black hover:bg-[#f5f5f7] cursor-pointer transition"
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