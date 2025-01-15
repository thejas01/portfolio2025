"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export function AiChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput("")
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      // Simulate AI response for now
      await new Promise(resolve => setTimeout(resolve, 1000))
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "Hello! I'm your AI assistant. How can I help you today?"
      }])
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Floating Button - adjusted bottom spacing for mobile */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 p-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full text-white shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open AI Chat"
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      {/* Chat Interface - adjusted positioning and width for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed inset-x-0 bottom-0 sm:bottom-24 sm:right-6 sm:inset-x-auto z-50 w-full sm:max-w-md mx-auto sm:mx-0"
          >
            <Card className="border-2 border-zinc-200 dark:border-zinc-800 sm:rounded-xl rounded-b-none">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800">
                <h2 className="text-lg font-semibold">AI Assistant</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  <X className="w-5 h-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>

              {/* Messages */}
              <div className="p-4 h-[400px] overflow-y-auto space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.role === 'user'
                          ? 'bg-blue-500 text-white'
                          : 'bg-zinc-100 dark:bg-zinc-800'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-3 animate-pulse">
                      Thinking...
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <form onSubmit={handleSubmit} className="p-4 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex gap-2">
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="min-h-[44px] max-h-[144px]"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault()
                        handleSubmit(e)
                      }
                    }}
                  />
                  <Button 
                    type="submit" 
                    disabled={isLoading || !input.trim()}
                    className="bg-gradient-to-r from-blue-500 to-teal-500 text-white"
                  >
                    <Send className="w-4 h-4" />
                    <span className="sr-only">Send message</span>
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

