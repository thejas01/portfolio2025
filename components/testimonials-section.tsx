"use client"
import React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "An exceptional developer who delivers outstanding results. Their expertise in creating user-centric solutions has been invaluable to our project.",
      author: "Client Name",
      role: "CEO, Company Name",
      image: "/placeholder.svg"
    },
    {
      quote: "Working with them was a game-changer for our business. They understood our needs perfectly and delivered beyond expectations.",
      author: "Client Name",
      role: "Product Manager, Company Name",
      image: "/placeholder.svg"
    }
  ]

  return (
    <section id="testimonials" className="py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-12">What Clients Say</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 border-zinc-200 dark:border-zinc-800">
              <CardContent className="p-6">
                <blockquote className="space-y-6">
                  <p className="text-lg text-zinc-600 dark:text-zinc-400">
                    "{testimonial.quote}"
                  </p>
                  <footer className="flex items-center gap-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <cite className="not-italic font-semibold">{testimonial.author}</cite>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">{testimonial.role}</p>
                    </div>
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

