'use client'

const categorias = [
  'iPhone',
  'MacBook',
  'iPad',
  'Apple Watch',
  'AirPods',
  'Accesorios',
]

export default function CategoryGrid() {
  return (
    <section className="bg-white py-10 border-b border-[#e5e5e5]">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-[30px] font-[500] tracking-[-0.4px] text-black mb-7">
          Compra por categoría.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categorias.map((cat) => (
            <div
              key={cat}
              className="h-[120px] rounded-[18px] bg-[#f5f5f7] flex items-center justify-center text-center font-semibold text-[#1d1d1f] hover:shadow-md transition cursor-pointer"
            >
              {cat}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}