'use client'

import Link from 'next/link'
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { motion } from "framer-motion"
import { MapPin, Mail, Phone } from 'lucide-react'
import { Logo } from './logo'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.3, 
    rotate: [0, -10, 10, -10, 10, 0],
    transition: { 
      duration: 0.5,
      rotate: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 1
      }
    } 
  }
}

const SocialIcon = ({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-zinc-400 hover:text-zinc-300 transition-colors"
      variants={iconVariants}
      initial="initial"
      whileHover="hover"
    >
      <Icon className="h-5 w-5" />
      <span className="sr-only">{label}</span>
    </motion.a>
  )
}

const smoothScroll = (target: number) => {
  const startPosition = window.pageYOffset
  const distance = target - startPosition
  const duration = 800 // ms
  let start: number | null = null

  const step = (timestamp: number) => {
    if (!start) start = timestamp
    const progress = timestamp - start
    const percentage = Math.min(progress / duration, 1)

    window.scrollTo(0, startPosition + distance * easeInOutCubic(percentage))

    if (progress < duration) {
      window.requestAnimationFrame(step)
    }
  }

  window.requestAnimationFrame(step)
}

// Easing function for smoother animation
const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
}

export function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault()
    let targetPosition: number

    if (target === 'top') {
      targetPosition = 0
    } else {
      const element = document.getElementById(target)
      if (element) {
        const navbarHeight = 80
        targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight
      } else {
        return // Exit if target element not found
      }
    }

    smoothScroll(targetPosition)
  }

  return (
    <footer className="bg-zinc-900 py-16">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Contact</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-zinc-400">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Thejas G S</p>
                  <p className="text-sm">Mangalore, Karnataka</p>
                  <p className="text-sm">India, 574248</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-zinc-400">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:thejasgs19@gmail.com" className="text-sm hover:text-white transition-colors">
                  thejasgs19@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-zinc-400">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+919591740163" className="text-sm hover:text-white transition-colors">
                  +91 9591740163
                </a>
              </div>
            </div>
          </div>

          {/* Links Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Links</h2>
            <div className="flex flex-col space-y-2">
              <Link 
                href="/"
                onClick={(e) => handleScroll(e, 'top')}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link 
                href="#contact" 
                onClick={(e) => handleScroll(e, 'contact')}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
              <Link href="/terms" className="text-zinc-400 hover:text-white transition-colors">
                Terms of Use
              </Link>
              <Link href="/privacy" className="text-zinc-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Logo Column */}
          <div className="flex flex-col items-center md:items-end space-y-6">
            <Logo />
            <div className="flex gap-4">
              <SocialIcon 
                href="https://www.linkedin.com/in/thejas-g-s-bb8037219"
                icon={FaLinkedin}
                label="LinkedIn"
              />
              <SocialIcon
                href="https://github.com/thejas01"
                icon={FaGithub}
                label="GitHub"
              />
              <SocialIcon
                href="https://twitter.com"
                icon={FaSquareXTwitter}
                label="Twitter"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="mt-16 text-center text-zinc-500 text-sm"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          © 2008-{new Date().getFullYear()} . ALL RIGHTS RESERVED.
        </motion.div>
      </div>
    </footer>
  )
}

