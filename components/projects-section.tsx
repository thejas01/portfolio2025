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
      title: "Spring Shield",
      description: "A deployed framework for building secure and scalable applications with Spring with JWT Authentication",
      longDescription: "This is one of my  projects, I worked as a Full-stack engineer (Java, Spring, Microservices). I built out the Authentication and  generator features from scratch",
      image: "/images/spring.png",
      link: "https://github.com/thejas01/spring-shield",
      technologies: [
        { name: "Java" },
        { name: "SpringBoot" },
        { name: "Spring Security" },
        { name: "Microservices" },
        { name: "JWT" },
        { name: "Mysql" }
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
      title: "E-commerce Platform",
      description: "A backend API for an e-commerce platform built with java ,spring boot and microservices",
      longDescription: "A modern e-commerce backend system built with Spring Boot, implementing a microservices architecture. Features include product catalog, user authentication with JWT, shopping cart, order management, payment processing, API Gateway, Eureka Server, and messaging with Kafka.",
      image:  "/images/ecom.png",
      link: "https://github.com/thejas01/ecommerce-microservices-jwt-auth",
      technologies: [
        { name: "Java" },
        { name: "Springboot" },
        { name: "Microservices" },
        { name: "Mysql" },
        { name: "Kafka" },
        { name: "JWT" }
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

