import Header from "./components/Header"
import Hero from "./components/Hero"
import ValueProposition from "./components/ValueProposition"
import Testimonials from "./components/Testimonials"
import FAQ from "./components/FAQ"
import FinalCTA from "./components/FinalCTA"
import MatrixBackground from "./components/MatrixBackground"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <MatrixBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <ValueProposition />
          <Testimonials />
          <FAQ />
          <FinalCTA />
        </main>
      </div>
    </div>
  )
}

