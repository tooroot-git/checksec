import { Shield, Zap, Globe, Lock, TrendingUp, DollarSign } from "lucide-react"

export default function KeyBenefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Instant Authority",
      description: "Position yourself as a leader in the cybersecurity space from day one.",
      color: "text-red-400",
    },
    {
      icon: Zap,
      title: "Premium Branding",
      description: "Short, memorable, and powerful - perfect for building a lasting security brand.",
      color: "text-orange-400",
    },
    {
      icon: Globe,
      title: "Global Recognition",
      description: ".IO domains are the gold standard for tech and security companies worldwide.",
      color: "text-yellow-400",
    },
    {
      icon: Lock,
      title: "Secure Transfer",
      description: "Professional escrow service ensures a safe and instant domain transfer.",
      color: "text-green-400",
    },
    {
      icon: TrendingUp,
      title: "High Growth Potential",
      description: "Cybersecurity domain values are skyrocketing - invest in your future today.",
      color: "text-blue-400",
    },
    {
      icon: DollarSign,
      title: "Investment Value",
      description: "Premium domains in the security space are becoming increasingly rare and valuable.",
      color: "text-purple-400",
    },
  ]

  return (
    <section className="py-20 px-6 bg-black/40">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center font-orbitron bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">
          Why CheckSec.io Is Your Perfect Domain
        </h2>
        <p className="text-xl mb-12 text-center text-gray-400 max-w-3xl mx-auto">
          Don't miss this opportunity to own a premium cybersecurity domain that perfectly represents your expertise and
          ambition.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="p-6 bg-black/40 rounded-xl border border-red-400/10 hover:border-red-400/30 
                         transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg 
                         hover:shadow-red-400/5 group"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-2 bg-black/60 rounded-lg mr-4 ${benefit.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className={`font-bold text-lg ${benefit.color}`}>{benefit.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

