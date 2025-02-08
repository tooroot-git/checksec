import { Shield, CheckCircle } from "lucide-react"

export function VerifiedBadge() {
  return (
    <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-full">
      <div className="relative">
        <Shield className="w-5 h-5 text-green-400" />
        <CheckCircle className="w-3 h-3 text-green-400 absolute -bottom-1 -right-1" />
      </div>
      <span className="text-green-400 text-sm font-medium">Verified Seller</span>
    </div>
  )
}

