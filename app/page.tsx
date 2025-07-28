import { NavBar } from "@/components/nav-bar"
import { HeroSection } from "@/components/hero-section"
import { CompaniesSection } from "@/components/companies-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { AiChat } from "@/components/ai-chat"

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat opacity-20 dark:opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbXB1dGVyc3xlbnwwfHwwfHx8MA%3D%3D")',
          zIndex: 0
        }}
      />
      <div className="relative z-10">
        <NavBar />
        <main>
          <HeroSection />
          <CompaniesSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
        <AiChat />
      </div>
    </div>
  )
}

