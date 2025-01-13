"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function TermsDialog() {
  return (
    <Dialog>
      <DialogTrigger className="text-zinc-400 hover:text-white transition-colors">
        Terms of Use
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Terms of Use</DialogTitle>
        </DialogHeader>
        <div className="prose prose-zinc dark:prose-invert mt-4">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

          <h2>2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on Thejas G S's website for personal, non-commercial transitory viewing only.</p>

          <h2>3. Disclaimer</h2>
          <p>The materials on this website are provided on an 'as is' basis. Thejas G S makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.</p>
        </div>
      </DialogContent>
    </Dialog>
  )
} 