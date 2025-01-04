"use client"

import { X } from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from  "@/components/ui/dialog"

interface Technology {
  name: string
  className?: string
}

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    longDescription: string
    image: string
    link: string
    technologies: Technology[]
  }
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-zinc-900 border-zinc-800">
        <DialogHeader>
          <div className="flex items-start gap-4">
            <Image
              src={project.image}
              alt={project.title}
              width={80}
              height={80}
              className="rounded-lg object-cover"
            />
            <div className="flex-1">
              <DialogTitle className="text-xl font-semibold mb-2">
                {project.title}
              </DialogTitle>
              <p className="text-zinc-400">
                {project.description}
              </p>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-zinc-400 mb-2">TECH</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech.name}
                  className={`px-3 py-1 rounded-full text-sm ${
                    tech.className || 'bg-zinc-800 text-zinc-300'
                  }`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          <p className="text-zinc-300">
            {project.longDescription}
          </p>

          <div className="flex justify-start">
            <Button
              asChild
              variant="default"
              className="border-zinc-700 hover:border-zinc-600 bg-transparent text-blue-500 hover:text-blue-400 transition-colors"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Visit
              </a>
            </Button>
          </div>
        </div>

        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-zinc-400 hover:text-white transition-colors"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      </DialogContent>
    </Dialog>
  )
}

