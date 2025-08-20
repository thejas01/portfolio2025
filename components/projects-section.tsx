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
      title: "Flight Booking System",
      description: "A modern, microservices-based flight booking system built with Spring Boot, React, and PostgreSQL. The system features JWT authentication, role-based authorization, and a clean, responsive user interface.",
      longDescription: "This is one of my  projects, I worked as a Full-stack engineer (Java, Spring, Microservices). I built out the Authentication and  generator features from scratch",
      image: "/images/flight.png",
      link: "https://github.com/thejas01/airline-booking-system",
      technologies: [
        { name: "Java" },
        { name: "SpringBoot" },
        { name: "Spring Security" },
        { name: "Microservices" },
        { name: "JWT" },
        { name: "React" },
        { name: "PostgreSQL" }
       
      ]
    },
    {
      title: "MicroSeviceRouter",
      description: "Spring Boot microservices project with Eureka Server and API Gateway(Based on Netflix OSS)",
      longDescription: "Spring Boot microservices project with Eureka Server and API Gateway. Eureka Server acts as a service registry, while the API Gateway routes requests to services like user-service, which is registered with Eureka. This project demonstrates service discovery, routing, and load balancing in microservices architecture.",
      image: "/images/micro.png",
      link: "https://github.com/thejas01/gateway-and-discovery-service",
      technologies: [
        { name: "Microservices" },
        { name: "Spring Boot" },
        { name: "Eureka client" },
        { name: "API Gateway" },
        { name: "Netflix OSS" },
        { name: "Mysql" }
      ]
    },
    {
      title: "Stock-Price streamer",
      description: "A modern application for streaming stock prices using Kafka and Zookeeper",
      longDescription: "This is one of my projects where I worked as a Full-stack engineer (Java, Spring, React, Kafka, Zookeeper).",
      image:  "/images/kafka.png",
      link: "https://github.com/thejas01/stock-price-streamer.git",
      technologies: [
        { name: "Java" },
        { name: "Springboot" },
        { name: "Docker" },
        { name: "React" },
        { name: "Kafka" },
        { name: "Zookeeper" }
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
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <p className="text-white flex items-center gap-2">
                      View Project <ArrowRight className="h-4 w-4" />
                    </p>
                  </div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-sm md:group-hover:blur-sm touch:blur-[2px] touch:scale-105"
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

