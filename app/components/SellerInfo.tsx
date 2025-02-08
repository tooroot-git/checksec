import { User, Star, Calendar, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function SellerInfo() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-black/40 border-red-400/20">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-400 to-orange-400 flex items-center justify-center">
                <User className="w-8 h-8 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gradient-red">Premium Domain Seller</h3>
                <p className="text-gray-400">Specialized in Cybersecurity Domains</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-yellow-400" />
                <div>
                  <div className="font-bold text-white">100%</div>
                  <div className="text-sm text-gray-400">Positive Feedback</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="font-bold text-white">5+ Years</div>
                  <div className="text-sm text-gray-400">Domain Experience</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-green-400" />
                <div>
                  <div className="font-bold text-white">Verified</div>
                  <div className="text-sm text-gray-400">Premium Seller</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

