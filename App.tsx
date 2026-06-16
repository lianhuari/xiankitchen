import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedBanner from './components/FeaturedBanner'
import MenuSection from './components/MenuSection'
import TrustPillars from './components/TrustPillars'
import OurStory from './components/OurStory'
import Reviews from './components/Reviews'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0D0A09' }}>
      <Navbar />
      <Hero />
      <FeaturedBanner />
      <MenuSection />
      <TrustPillars />
      <OurStory />
      <Reviews />
      <CtaSection />
      <Footer />
    </div>
  )
}
