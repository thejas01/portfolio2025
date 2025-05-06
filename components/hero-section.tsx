"use client"
import Image from "next/image"
import { Button } from "./ui/button"
import { Download } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      const navbarHeight = 80
      const projectsSectionTop = projectsSection.offsetTop - navbarHeight
      window.scrollTo({
        top: projectsSectionTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <motion.section
      className="h-screen flex items-center relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center gap-8 pt-16 pb-16 sm:pb-0">
        <motion.div
          className="flex-1 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h1
            className="text-xl font-normal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Hi there, I&apos;m Thejas👋
          </motion.h1>
          <motion.h2
            className="text-3xl sm:text-4xl leading-relaxed text-zinc-700 dark:text-zinc-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            I specialize in designing and developing{" "}
            <span className="text-blue-500">robust Java-based applications</span> that help businesses achieve their
            goals. With a strong focus on <span className="text-teal-500">clean code, scalability</span> and{" "}
            <span className="text-teal-500">performance</span>.
          </motion.h2>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white" onClick={scrollToProjects}>
              View my work
            </Button>
            <Button variant="link" className="text-zinc-800 dark:text-zinc-200 flex items-center gap-2" asChild>
              <a
                href="https://drive.google.com/file/d/19dcu_kAo60aoW7fWxG1dQCHgCs1kk_ex/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4" />
                My Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative w-48 h-48 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full p-1">
              <div className="w-full h-full rounded-full border-4 border-white dark:border-zinc-800 overflow-hidden bg-white dark:bg-zinc-800">
                <Image src="/images/pro.png" alt="Profile" fill className="object-cover" sizes="192px" priority />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - hidden on very small screens */}
      <div className="absolute bottom-8 md:bottom-16 left-1/2 transform -translate-x-1/2 hidden sm:block">
        <motion.div
          className="w-6 h-12 rounded-full border-2 border-zinc-500 dark:border-zinc-400 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-zinc-500 dark:bg-zinc-400 rounded-full mt-2"
            animate={{
              y: [0, 16, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  )
}
