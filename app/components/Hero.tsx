import { Button } from "@/components/ui/button"
import Link from "next/link"
import ContactForm from "./ContactForm"
import { Badge } from "@/components/ui/badge"
import { Timer, ArrowRight, Shield, Lock, Users, CheckCircle } from "lucide-react"
import { CountdownTimer } from "./CountdownTimer"
import { VerifiedBadge } from "./VerifiedBadge"

export default function Hero() {
  return (
    <section className="py-20 px-6 bg-hero-pattern relative overflow-hidden">
      {/* Enhanced Urgency Banner with Animation */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-b-xl px-8 py-3 flex items-center gap-3 animate-pulse">
        <Timer className="w-5 h-5 text-red-400" />
        <span className="text-red-200 font-medium text-sm sm:text-base">
          Last Chance: Premium Domain Won't Last Long!
        </span>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Verified Seller Badge */}
        <div className="mb-6">
          <VerifiedBadge />
        </div>

        {/* Enhanced Premium Domain Badge */}
        <div className="mb-8">
          <Badge
            variant="outline"
            className="text-lg py-2 px-8 rounded-full border-2 border-red-400 text-red-400 font-medium"
          >
            Exclusive Domain Opportunity
          </Badge>
        </div>

        {/* Enhanced Headlines with More Emotional Impact */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 font-orbitron leading-tight">
          <span className="text-cyan-400">CheckSec.io</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 font-orbitron text-gradient-red">
          Premium Cybersecurity Domain For Sale
        </h2>

        {/* Immediate Value Props */}
        {/*<div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
          {[
            { icon: Shield, text: "Premium Security Brand" },
            { icon: Globe, text: "Instant Global Recognition" },
            { icon: Lock, text: "24-Hour Transfer" },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="flex items-center justify-center gap-2 bg-black/40 p-3 rounded-lg border border-red-400/20"
              >
                <Icon className="w-5 h-5 text-red-400" />
                <span className="text-gray-200 text-sm">{item.text}</span>
              </div>
            )
          })}
        </div>*/}

        {/* Enhanced Value Proposition */}
        <p className="text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
          The perfect domain for your security tools, OSINT platform, or cybersecurity business.
        </p>

        {/* Countdown Timer with Enhanced Styling */}
        <div className="mb-12">
          <CountdownTimer initialHours={24} />
        </div>

        {/* Enhanced CTA Section with Animation */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 max-w-2xl mx-auto mb-12">
          <Button
            asChild
            className="group relative overflow-hidden bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600 text-lg font-bold py-8 px-12 rounded-xl shadow-xl hover:shadow-red-500/20 transform hover:scale-105 transition-all duration-300 min-w-[240px] h-auto animate-gentlePulse"
          >
            <Link
              href="https://sedo.com/search/?keyword=checksec.io"
              className="flex items-center justify-center gap-3"
            >
              <span className="relative z-10">Claim It Now - $2,500</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </Link>
          </Button>
          <ContactForm />
        </div>

        {/* Enhanced Trust Signals */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto text-sm bg-black/40 p-6 rounded-xl border border-red-400/20">
          <div className="flex items-center gap-3 justify-center">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-gray-200">Verified Seller</span>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <Shield className="w-5 h-5 text-red-400" />
            <span className="text-gray-200">Secure Escrow</span>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <Users className="w-5 h-5 text-yellow-400" />
            <span className="text-gray-200">50+ Recent Inquiries</span>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <Lock className="w-5 h-5 text-blue-400" />
            <span className="text-gray-200">Instant Transfer</span>
          </div>
        </div>
      </div>
    </section>
  )
}

