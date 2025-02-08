"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Mail, ArrowRight } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name")
    const email = formData.get("email")
    const offer = formData.get("offer")
    const message = formData.get("message")

    const mailtoUrl = `mailto:offer@2us.io?subject=Offer for CheckSec.io&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AOffer Amount: ${offer}%0D%0AMessage: ${message}`
    window.location.href = mailtoUrl

    setIsSubmitting(false)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="group border-2 border-cyan-400 bg-black text-cyan-400 
                   hover:bg-cyan-400 hover:text-black transition-all duration-300
                   font-bold py-8 px-12 rounded-xl shadow-lg min-w-[240px] h-auto
                   hover:shadow-cyan-400/20 transform hover:scale-105 text-lg"
        >
          <span className="flex items-center justify-center gap-3">
            Submit Your Offer
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black border-cyan-400">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gradient">Make Your Offer</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <Input
            name="name"
            placeholder="Your Name"
            required
            className="border-cyan-400/30 bg-black/50 text-white focus:border-cyan-400"
          />
          <Input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="border-cyan-400/30 bg-black/50 text-white focus:border-cyan-400"
          />
          <Input
            name="offer"
            type="text"
            placeholder="Your Offer Amount"
            required
            className="border-cyan-400/30 bg-black/50 text-white focus:border-cyan-400"
          />
          <Textarea
            name="message"
            placeholder="Additional Message (Optional)"
            className="border-cyan-400/30 bg-black/50 text-white focus:border-cyan-400"
          />
          <Button
            type="submit"
            className="w-full group bg-gradient-to-r from-emerald-400 to-cyan-400 
                     text-black hover:from-emerald-500 hover:to-cyan-500 font-bold 
                     py-6 flex items-center justify-center gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit Offer"}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

