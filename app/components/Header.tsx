import Link from "next/link"

export default function Header() {
  return (
    <header className="py-4 px-6 bg-black border-b border-neon-cyan/20">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="flex items-center">
          <span className="text-3xl font-bold text-neon-cyan font-orbitron mr-4">CheckSec.io</span>
          <span className="bg-neon-cyan text-black text-sm font-bold py-1 px-2 rounded-full">For Sale</span>
        </Link>
        <div className="space-x-6">
          <Link href="#value" className="text-sm hover:text-neon-cyan transition-colors">
            Why CheckSec.io?
          </Link>
          <Link href="#testimonials" className="text-sm hover:text-neon-cyan transition-colors">
            Testimonials
          </Link>
        </div>
      </nav>
    </header>
  )
}

