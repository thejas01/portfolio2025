"use client"

import { useEffect, useState, useCallback } from "react"
import Link from "next/link"
import { Moon, Sun, Menu } from "lucide-react"
import { useTheme } from "next-themes"
import { Logo } from "./logo"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function NavBar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const navItems = ["projects", "skills", "testimonials", "contact"]

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10)

    let currentSection = ""
    const scrollPosition = window.scrollY + 100 // Adjust for navbar height

    for (const section of navItems) {
      const element = document.getElementById(section)
      if (element && scrollPosition >= element.offsetTop) {
        currentSection = section
      }
    }

    if (currentSection !== activeSection) {
      setActiveSection(currentSection)
    }
  }, [activeSection, navItems])

  useEffect(() => {
    setMounted(true)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const navbarHeight = 80
      const sectionTop = section.offsetTop - navbarHeight
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      })
    }
    setActiveSection(sectionId)
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav
        className={`flex items-center justify-between w-full max-w-[580px] h-12 px-4 rounded-full transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800"
            : "bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800"
        }`}
      >
        {/* Logo and Site Name */}
        <Link href="/" className="flex items-center gap-2 group">
          <Logo />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 font-semibold transition-transform duration-300 ease-in-out group-hover:scale-105">
            thejas.dev
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`relative px-3 py-2 text-sm transition-all duration-300 ease-in-out ${
                activeSection === item
                  ? "text-zinc-900 dark:text-white"
                  : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              {activeSection === item && (
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 dark:bg-teal-500" />
              )}
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
              className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors duration-300 ease-in-out"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-300 ease-in-out dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-300 ease-in-out dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors duration-300 ease-in-out"
                >
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800"
              >
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`relative text-left px-3 py-2 text-lg font-medium transition-all duration-300 ease-in-out ${
                        activeSection === item
                          ? "text-zinc-900 dark:text-white"
                          : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
                      }`}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                      {activeSection === item && (
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 dark:bg-teal-500" />
                      )}
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
