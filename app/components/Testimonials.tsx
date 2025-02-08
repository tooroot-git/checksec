import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Premium domains like this are rare in the cybersecurity space. The perfect choice for security tools and OSINT platforms.",
      author: "John D.",
      role: "Security Consultant",
    },
    {
      quote: "Short, memorable, and instantly recognizable. Exactly what you want in a domain for security products.",
      author: "Sarah M.",
      role: "Cybersecurity Startup Founder",
    },
  ]

  return (
    <section className="py-20 px-6 bg-black/40">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-neon-cyan">What Experts Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-black/60 border-neon-cyan/20">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-neon-cyan mb-4" />
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div className="text-sm">
                  <p className="font-semibold text-neon-cyan">{testimonial.author}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

