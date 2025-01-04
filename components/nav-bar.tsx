"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from "next-themes"
import { Logo } from "./logo"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function NavBar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const navbarHeight = 80
      const sectionTop = section.offsetTop - navbarHeight
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  const navItems = ['projects', 'skills', 'testimonials', 'contact']

  return (
    <header className="fixed top-0 w-full z-50 flex items-center justify-center p-6">
      <nav className="flex items-center justify-between w-full max-w-[580px] h-12 px-4 rounded-full bg-zinc-900/90 backdrop-blur-sm border border-zinc-800">
        {/* Logo and Site Name */}
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 font-semibold">
            thejas.dev
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-zinc-400 hover:text-white text-sm transition-colors duration-200 ease-in-out"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>

        {/* Theme Toggle and Mobile Menu */}
        <div className="flex items-center gap-2">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-zinc-400 hover:text-white"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}
          
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-zinc-900/95 border-zinc-800">
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="text-zinc-400 hover:text-white text-lg font-medium transition-colors duration-200 ease-in-out text-left"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}

