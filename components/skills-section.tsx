'use client'
import { 
  SiReact, 
  SiNextdotjs, 
  SiHibernate,
  SiTypescript, 
  SiMysql,
  SiCss3,
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
  SiSpringboot,
} from 'react-icons/si'
import { DiJava, DiAws } from "react-icons/di"
import { motion } from "framer-motion"

const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: { duration: 0.3 }
  }
}

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 }
  }
}

export function SkillsSection() {
  const skills = [
    { name: "Java", icon: DiJava, color: "#007396" },
    { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
    { name: "Hibernate", icon: SiHibernate, color: "#59666C" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
    { name: "CI/CD", icon: SiGithubactions, color: "#F05032" },
    { name: "AWS", icon: DiAws, color: "#FF9900" }
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
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                whileTap="hover"
                className="p-4 flex flex-col items-center justify-center gap-2 bg-white dark:bg-zinc-800/50 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors rounded-lg border border-zinc-200 dark:border-zinc-700"
              >
                <motion.div
                  variants={iconVariants}
                  className="relative w-10 h-10 flex items-center justify-center"
                >
                  <skill.icon size={28} color={skill.color} />
                </motion.div>
                <span className="text-sm font-medium text-zinc-900 dark:text-zinc-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

