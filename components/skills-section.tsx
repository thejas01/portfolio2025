import { 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiTypescript, 
  SiPython, 
  SiDjango, 
  SiGraphql,
  SiRemix,
  SiCss3,
  SiKubernetes,
  SiTerraform,
  SiGithubactions
} from 'react-icons/si'
import { Card } from "@/components/ui/card"

export function SkillsSection() {
  const skills = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Django", icon: SiDjango, color: "#092E20" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    { name: "Remix", icon: SiRemix, color: "#000000" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
    { name: "CI/CD", icon: SiGithubactions, color: "#F05032" }
  ]

  return (
    <section id="skills" className="py-24 bg-zinc-50 dark:bg-zinc-900">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            For those who know what they&apos;re looking for.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
            {skills.map((skill) => (
              <Card 
                key={skill.name}
                className="p-4 flex flex-col items-center justify-center gap-2 bg-white dark:bg-zinc-800/50 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors group"
              >
                <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  {<skill.icon size={28} color={skill.color} />}
                </div>
                <span className="text-sm font-medium text-zinc-900 dark:text-zinc-300">
                  {skill.name}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

