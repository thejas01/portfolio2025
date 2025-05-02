"use client"

import { useState, useEffect } from "react"

export function GridBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-10">
      {Array.from({ length: 21 }).map((_, i) => (
        <div key={`h-${i}`} className="col-span-full h-px bg-zinc-400 dark:bg-zinc-500"></div>
      ))}
      {Array.from({ length: 21 }).map((_, i) => (
        <div key={`v-${i}`} className="row-span-full w-px bg-zinc-400 dark:bg-zinc-500"></div>
      ))}
    </div>
  )
}
