"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Set the scroll event listener
  useEffect(() => {
    if (!isMobile) {
      window.addEventListener("scroll", toggleVisibility)
      return () => window.removeEventListener("scroll", toggleVisibility)
    }
  }, [isMobile, toggleVisibility]) // Added toggleVisibility to dependencies

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768) // Adjust this breakpoint as needed
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const scrollUpOnePage = () => {
    const currentPosition = window.pageYOffset
    const viewportHeight = window.innerHeight
    const newPosition = Math.max(currentPosition - viewportHeight, 0)

    window.scrollTo({
      top: newPosition,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && !isMobile && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollUpOnePage}
          className="fixed top-1/2 -translate-y-1/2 right-8 z-50 p-3 rounded-lg bg-[#b87264] hover:bg-[#a66557] transition-colors duration-300 shadow-lg"
          aria-label="Scroll up one page"
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

