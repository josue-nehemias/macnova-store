import Navbar from '@/components/Navbar'
import HeroBanner from '@/components/HeroBanner'
import CategoryGrid from '@/components/CategoryGrid'
import FeaturedProducts from '@/components/FeaturedProducts'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroBanner />
      <CategoryGrid />
      <FeaturedProducts />
    </main>
  )
}