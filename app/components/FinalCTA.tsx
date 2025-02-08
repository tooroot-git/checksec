"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"
import ContactForm from "./ContactForm"
import { Timer, ArrowRight } from "lucide-react"

export default function FinalCTA() {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black/40 to-black/60">
      <div className="max-w-4xl mx-auto text-center">
        {/* Urgency Badge */}
        <div className="inline-block mb-8 px-6 py-3 bg-red-500/10 border border-red-500/20 rounded-lg">
          <div className="flex items-center gap-2 text-red-400">
            <Timer className="w-5 h-5 animate-pulse" />
            <span className="font-bold">Limited Time Offer</span>
          </div>
        </div>

        {/* Main Content */}
        <h2 className="text-4xl font-bold mb-6 text-gradient font-orbitron">Secure Your Cybersecurity Brand Today</h2>
        <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Premium domains sell fast. Don't miss your chance to own CheckSec.io!
        </p>

        {/* Timer */}
        <div className="mb-12">
          <div className="text-2xl font-bold text-neon-cyan font-orbitron mb-2">Time Remaining</div>
          <div className="text-4xl font-bold text-white font-mono bg-black/40 inline-block px-8 py-4 rounded-lg border border-neon-cyan/20">
            {formatTime(timeLeft)}
          </div>
        </div>

        {/* CTA Buttons Container */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6 max-w-2xl mx-auto">
          {/* Buy Now Button */}
          <Button
            asChild
            size="lg"
            className="flex-1 bg-gradient-to-r from-emerald-400 to-cyan-400 text-black hover:from-emerald-500 hover:to-cyan-500 
                     text-lg font-bold py-8 px-12 rounded-xl shadow-xl hover:shadow-cyan-400/20 transform hover:scale-105 
                     transition-all duration-300 min-w-[200px] h-auto"
          >
            <Link
              href="https://sedo.com/search/?keyword=checksec.io"
              className="flex items-center justify-center gap-2"
            >
              Buy Instantly for $2,500
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>

          {/* Make Offer Button - Using same size as Buy Now */}
          <div className="flex-1 min-w-[200px]">
            <ContactForm />
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mt-12 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-sm">
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Secure Escrow Service
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            24/7 Support
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            Instant Transfer
          </div>
        </div>
      </div>
    </section>
  )
}

