import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Screenshots from './components/Screenshots'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Screenshots />
      <FAQ />
      <Footer />
    </div>
  )
}
