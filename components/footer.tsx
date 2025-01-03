import { Github, Twitter, LinkedinIcon, Linkedin, Heart } from 'lucide-react'
import Link from 'next/link'

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
                <p>Mangalore,India</p>
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
              <p className="text-zinc-400">© 2025 Thejas</p>
            </div>

            {/* Right Column */}
            <div className="flex justify-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-300 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-300 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-300 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
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
