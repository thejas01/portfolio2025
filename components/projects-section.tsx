"use client"

import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
export function ProjectsSection() {
  const projects = [
    {
      title: "Project One",
      description: "A customer-centric software solution that helped increase user engagement by 200%",
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "Project Two",
      description: "An interactive dashboard that streamlined business operations and improved efficiency",
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "Project Three",
      description: "A mobile-first application that revolutionized user experience in the industry",
      image: "/placeholder.svg",
      link: "#"
    }
  ]

  return (
    <section id="projects" className="py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden border-2 border-zinc-200 dark:border-zinc-800">
              <CardContent className="p-0">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">{project.description}</p>
                  <Button variant="ghost" className="group/btn" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

