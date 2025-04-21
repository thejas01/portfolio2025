"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast, Toaster } from "sonner"
import { CustomToast } from "@/components/ui/custom-toast"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const form = e.target as HTMLFormElement
      const response = await fetch("https://formspree.io/f/mpwdadra", {
        method: "POST",
        body: new FormData(form),
        headers: {
          "Accept": "application/json"
        }
      })
      
      if (response.ok) {
        toast.custom((t) => (
          <CustomToast message="Message sent successfully!" />
        ))
        form.reset()
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast.custom((t) => (
        <CustomToast message="Failed to send message. Please try again." />
      ))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.section 
      id="contact" 
      className="py-24 bg-zinc-50 dark:bg-zinc-800/50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            className="text-zinc-600 dark:text-zinc-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Have a project in mind? Let's work together to create something amazing.
          </motion.p>
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Input
                name="name"
                placeholder="Your name"
                required
                className="bg-white dark:bg-zinc-900"
              />
              <Input
                name="email"
                type="email"
                placeholder="Your email"
                required
                className="bg-white dark:bg-zinc-900"
              />
            </div>
            <Textarea
              name="message"
              placeholder="Your message"
              required
              className="min-h-[150px] bg-white dark:bg-zinc-900"
            />
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </div>
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 3000,
          className: '!bg-transparent !border-0 !shadow-none !p-0',
        }}
      />
    </motion.section>
  )
}

