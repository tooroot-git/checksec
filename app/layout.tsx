import "./globals.css"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import type React from "react"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Own CheckSec.io – The Perfect Brand for Cybersecurity & OSINT",
  description:
    "Premium cybersecurity domain for sale. Perfect for security tools, OSINT services, and cyber businesses. Instant transfer available.",
  openGraph: {
    title: "Own CheckSec.io – The Perfect Brand for Cybersecurity & OSINT",
    description:
      "Premium cybersecurity domain for sale. Perfect for security tools, OSINT services, and cyber businesses. Instant transfer available.",
    url: "https://checksec.io",
    siteName: "CheckSec.io - Premium Domain For Sale",
    images: [
      {
        url: "https://example.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CheckSec.io - Premium Cybersecurity Domain For Sale",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}

