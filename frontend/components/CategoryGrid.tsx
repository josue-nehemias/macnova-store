import Link from 'next/link'

const categorias = [
  {
    nombre: 'Mac',
    precio: 'Desde S/ 719.00',
    href: '/productos?categoria=mac',
    imagen:
      'https://rossellimac.es/cdn/shop/files/store-card-13-mac-nav-202603_1.png?v=1772779088&width=200',
  },
  {
    nombre: 'iPhone',
    precio: 'Desde S/ 599.00',
    href: '/productos?categoria=iphone',
    imagen:
      'https://rossellimac.es/cdn/shop/files/download_1_ff68839e-f515-4588-a1a0-d58f15db038d.png?v=1757446894&width=200',
  },
  {
    nombre: 'iPad',
    precio: 'Desde S/ 379.00',
    href: '/productos?categoria=ipad',
    imagen:
      'https://rossellimac.es/cdn/shop/files/download_2_32b24539-ed39-485f-b5cb-c91732793fef.png?v=1757446980&width=200',
  },
  {
    nombre: 'Watch',
    precio: 'Desde S/ 254.00',
    href: '/productos?categoria=watch',
    imagen:
      'https://rossellimac.es/cdn/shop/files/download_3_b69d5aa5-b6c9-418f-937e-d05b476dcd35.png?v=1757447045&width=200',
  },
  {
    nombre: 'AirPods',
    precio: 'Desde S/ 149.00',
    href: '/productos?categoria=airpods',
    imagen:
      'https://rossellimac.es/cdn/shop/files/download_4.png?v=1757447060&width=200',
  },
  {
    nombre: 'TV & Hogar',
    precio: 'Desde S/ 65.00',
    href: '/productos?categoria=tv-hogar',
    imagen:
      'https://rossellimac.es/cdn/shop/files/AMZ_FamilyStripe_Apple_TV_4K_copy_84aa2c8e-7e7d-43c5-8115-6cb1ff307795.png?v=1691475986&width=200',
  },
  {
    nombre: 'Accesorios',
    precio: 'Desde S/ 10.00',
    href: '/productos?categoria=accesorios',
    imagen:
      'https://rossellimac.es/cdn/shop/files/store-card-13-accessories-nav-20.png?v=1772779219&width=200',
  },
  {
    nombre: 'Airtag',
    precio: 'Desde S/ 35.00',
    href: '/productos?categoria=airtag',
    imagen:
      'https://rossellimac.es/cdn/shop/files/download_7_ac672309-557d-4cab-8dae-291c43f05689.png?v=1769518153&width=200',
  },
]

export default function CategoryGrid() {
  return (
    <section className="w-full bg-white border-b border-[#d2d2d7] pt-[42px] pb-[34px]">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-[32px] leading-[40px] font-[550] tracking-[-0.4px] text-black mb-8">
          Ver todos los productos Apple.
        </h2>

        <div className="relative">
          <div className="flex items-start justify-between gap-8 overflow-x-auto pr-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categorias.map((categoria) => (
              <Link
                key={categoria.nombre}
                href={categoria.href}
                className="min-w-[105px] text-center cursor-pointer group"
              >
                <div className="h-[62px] flex items-end justify-center mb-2">
                  <img
                    src={categoria.imagen}
                    alt={categoria.nombre}
                    draggable={false}
                    className="max-h-[60px] max-w-[95px] object-contain group-hover:scale-105 transition"
                  />
                </div>

                <h3 className="text-[16px] leading-[19px] font-[700] text-black">
                  {categoria.nombre}
                </h3>

                <p className="text-[14px] leading-[18px] text-black mt-1">
                  {categoria.precio}
                </p>
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="absolute right-[-28px] top-[28px] h-[54px] w-[26px] border-l border-[#d2d2d7] text-[32px] text-[#86868b] hover:text-black"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}