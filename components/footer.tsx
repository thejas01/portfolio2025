'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { Heart } from 'lucide-react'
import { motion } from "framer-motion"

const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: { 
    scale: 3.0, 
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

export function Footer() {
  return (
    <footer className="bg-zinc-900 py-16">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="flex flex-col items-center space-y-12">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8 md:gap-4">
            {/* Left Column */}
            <div className="flex flex-col items-center space-y-2">
              <Link 
                href="/" 
                className="text-blue-400 hover:text-blue-400 transition-colors text-xl font-semibold"
              >
                Thejas
              </Link>
              <address className="not-italic text-zinc-400 space-y-1 text-center">    
                <p>Mangalore, India</p>
                <p>574248</p>
              </address>
            </div>

            {/* Middle Column */}
            <div className="flex flex-col items-center space-y-2 order-last md:order-none">
              <Link 
                href="/terms" 
                className="text-blue-400 hover:text-blue-400 transition-colors"
              >
                Terms & Conditions
              </Link>
              <p className="text-zinc-400">© {new Date().getFullYear()} Thejas</p>
            </div>

            {/* Right Column */}
            <div className="flex justify-center gap-4">
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

          {/* Bottom Text */}
          <div className="flex items-center gap-1 text-zinc-400 text-sm pt-4">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>in</span>
            <span className="text-lg">🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

