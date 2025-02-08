import { Shield, Zap, Globe, Lock, TrendingUpIcon as Trending, Clock } from "lucide-react"

export default function ValueProposition() {
  const benefits = [
    {
      icon: Shield,
      title: "Perfect for Security & OSINT",
      description: "Ideal domain for cybersecurity tools, OSINT platforms, and professional security services.",
    },
    {
      icon: Zap,
      title: "Short & Memorable",
      description: "Easy to type, remember, and brand. Makes marketing and word-of-mouth promotion effortless.",
    },
    {
      icon: Globe,
      title: "Premium .IO Extension",
      description: "The preferred choice for tech startups and security companies worldwide.",
    },
    {
      icon: Lock,
      title: "Instant Ownership Transfer",
      description: "Quick and secure transfer process through professional escrow service.",
    },
    {
      icon: Trending,
      title: "High Market Value",
      description: "Premium domains in the cybersecurity space are increasingly rare and valuable.",
    },
    {
      icon: Clock,
      title: "Ready for Immediate Use",
      description: "Start building your brand immediately after purchase. No waiting period.",
    },
  ]

  return (
    <section id="value" className="py-20 px-6 bg-gradient-to-b from-black/60 to-black/40">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-neon-cyan font-orbitron">Why Choose CheckSec.io?</h2>
        <p className="text-xl mb-12 text-center text-gray-400 max-w-3xl mx-auto">
          Secure your brand's future with a premium domain that perfectly represents your cybersecurity expertise.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="p-6 bg-black/40 rounded-xl border border-neon-cyan/10 hover:border-neon-cyan/30 
                         transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg 
                         hover:shadow-neon-cyan/5"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-neon-cyan/10 rounded-lg mr-4">
                    <Icon className="text-neon-cyan h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg text-neon-cyan">{benefit.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>

        {/* Market Stats */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-black/30 p-6 rounded-lg border border-neon-cyan/20 text-center">
            <div className="text-3xl font-bold text-neon-cyan mb-2">50+</div>
            <div className="text-gray-400">Recent Inquiries</div>
          </div>
          <div className="bg-black/30 p-6 rounded-lg border border-neon-cyan/20 text-center">
            <div className="text-3xl font-bold text-neon-cyan mb-2">24h</div>
            <div className="text-gray-400">Transfer Time</div>
          </div>
          <div className="bg-black/30 p-6 rounded-lg border border-neon-cyan/20 text-center">
            <div className="text-3xl font-bold text-neon-cyan mb-2">100%</div>
            <div className="text-gray-400">Secure Process</div>
          </div>
        </div>
      </div>
    </section>
  )
}

