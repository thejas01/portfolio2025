"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function PrivacyDialog() {
  return (
    <Dialog>
      <DialogTrigger className="text-zinc-400 hover:text-white transition-colors">
        Privacy Policy
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Privacy Policy</DialogTitle>
        </DialogHeader>
        <div className="prose prose-zinc dark:prose-invert mt-4">
          <h2>1. Information We Collect</h2>
          <p>We collect information that you provide directly to us when using our website, including contact information and any other information you choose to provide.</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to develop new services.</p>

          <h2>3. Information Sharing</h2>
          <p>We do not share your personal information with third parties except as described in this privacy policy.</p>
        </div>
      </DialogContent>
    </Dialog>
  )
} 