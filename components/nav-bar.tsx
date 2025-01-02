"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"
import { Logo } from "./logo"

import { Button } from "./ui/button"

export function NavBar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const navbarHeight = 80 // Adjust this value based on your navbar height
      const sectionTop = section.offsetTop - navbarHeight
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="flex items-center justify-between h-16 bg-zinc-900/90 backdrop-blur-sm rounded-full w-full my-4">
          <Link href="/" className="flex items-center gap-2 pl-4">
            <Logo />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 font-semibold">
              thejas.dev
            </span>
          </Link>
          <div className="flex items-center gap-4 pr-4">
            {['projects', 'skills', 'testimonials', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-zinc-300 hover:text-white text-sm transition-colors duration-200 ease-in-out relative group"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out"></span>
              </button>
            ))}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-300 hover:text-white transition-colors duration-200 ease-in-out"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}

