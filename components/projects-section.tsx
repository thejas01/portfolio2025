"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { ProjectModal } from "@/components/ui/project-modal"

interface Project {
  title: string
  description: string
  longDescription: string
  image: string
  link: string
  technologies: Array<{
    name: string
    className?: string
  }>
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      title: "FullFrame",
      description: "FullFrame is an AI platform which analyses your scripts using a in-house customised LLM and turns it into a meaningful knowledge base",
      longDescription: "This is one of my client projects, I worked as a Full-stack engineer (React, JavaScript, Python, MongoDB). I built out the List builder and Idea generator features from scratch",
      image: "/images/s1.png",
      link: "https://github.com/thejas01/spring-shield",
      technologies: [
        { name: "GitHub" },
        { name: "JavaScript" },
        { name: "React" },
        { name: "CSS3" },
        { name: "Google Gemini" },
        { name: "OpenAI" }
      ]
    },
    {
      title: "Project Two",
      description: "An interactive dashboard that streamlined business operations and improved efficiency",
      longDescription: "Developed a comprehensive dashboard solution that helped businesses track and improve their operational efficiency through real-time analytics and automated reporting.",
      image: "/placeholder.svg",
      link: "#",
      technologies: [
        { name: "React" },
        { name: "TypeScript" },
        { name: "Node.js" },
        { name: "PostgreSQL" }
      ]
    },
    {
      title: "Project Three",
      description: "A mobile-first application that revolutionized user experience in the industry",
      longDescription: "Created a responsive, mobile-first application that set new standards for user experience in the industry, resulting in increased user engagement and satisfaction.",
      image: "/placeholder.svg",
      link: "#",
      technologies: [
        { name: "Next.js" },
        { name: "TailwindCSS" },
        { name: "Prisma" },
        { name: "MongoDB" }
      ]
    }
  ]

  return (
    <section id="projects" className="py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <p className="text-white flex items-center gap-2">
                      View Project <ArrowRight className="h-4 w-4" />
                    </p>
                  </div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </section>
  )
}

