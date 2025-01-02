import { NavBar } from "@/components/nav-bar"
import { HeroSection } from "@/components/hero-section"
import { CompaniesSection } from "@/components/companies-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      <NavBar />
      <main>
        <HeroSection />
        <CompaniesSection />
        <ProjectsSection />
        <SkillsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

