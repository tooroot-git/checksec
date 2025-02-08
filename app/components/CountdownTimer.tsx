"use client"

import { useState, useEffect } from "react"
import { Timer } from "lucide-react"

interface CountdownTimerProps {
  initialHours: number
}

export function CountdownTimer({ initialHours }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialHours * 3600)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const hours = Math.floor(timeLeft / 3600)
  const minutes = Math.floor((timeLeft % 3600) / 60)
  const seconds = timeLeft % 60

  return (
    <div className="inline-flex flex-col items-center bg-black/40 rounded-xl border border-red-400/20 p-6">
      <div className="flex items-center gap-2 text-red-400 mb-3">
        <Timer className="w-5 h-5 animate-pulse" />
        <span className="font-bold">Limited Time Offer Ends In:</span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {[
          { value: hours, label: "Hours" },
          { value: minutes, label: "Minutes" },
          { value: seconds, label: "Seconds" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-3xl font-bold font-mono bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text">
              {item.value.toString().padStart(2, "0")}
            </div>
            <div className="text-xs text-gray-400">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

