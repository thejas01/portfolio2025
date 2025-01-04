"use client"
import Image from "next/image"
import { Button } from "./ui/button"

export function HeroSection() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      const navbarHeight = 80 // Adjust this value based on your navbar height
      const projectsSectionTop = projectsSection.offsetTop - navbarHeight
      window.scrollTo({
        top: projectsSectionTop,
        behavior: 'smooth'
      })
    }
  };

  return (
    <section className="min-h-screen flex items-center">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center gap-8 pt-16">
        <div className="flex-1 space-y-4">
          <h1 className="text-xl font-normal">
            Hi there, I&apos;m Thejas👋
          </h1>
          {/* <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            I help people and brands reach their business goals by designing & building{" "}
            <span className="text-blue-500">customer-centric software</span>{" "}
            <span className="text-teal-500">products</span> and interactive experiences
          </h2> */}
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
  I specialize in designing and developing{" "}
  <span className="text-blue-500">robust Java-based applications</span>{" "}
  that help businesses achieve their goals. With a strong focus on{" "}
  <span className="text-teal-500">clean code, scalability</span>, and{" "}
  <span className="text-teal-500">performance</span>, I create software solutions that deliver real value to users
</h2>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              className="bg-gradient-to-r from-blue-500 to-teal-500 text-white"
              onClick={scrollToProjects}
            >
              View my work
            </Button>
            <Button 
              variant="link" 
              className="text-zinc-800 dark:text-zinc-200"
              asChild
            >
              <a href="https://github.com/thejas01" target="_blank" rel="noopener noreferrer">
                My Resume
              </a>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="w-[280px] h-[280px] rounded-full bg-yellow-400 p-2">
            <div className="w-full h-full rounded-full border-4 border-green-600 overflow-hidden">
              <Image
                src="/images/profile.png"
                alt="Profile"
                width={280}
                height={280}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

