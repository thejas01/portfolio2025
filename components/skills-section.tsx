export function SkillsSection() {
  const skills = {
    "Frontend Development": [
      "React", "Next.js", "TypeScript", "Tailwind CSS"
    ],
    "Backend Development": [
      "Node.js", "Express", "PostgreSQL", "MongoDB"
    ],
    "Design & Tools": [
      "Figma", "Git", "REST APIs", "GraphQL"
    ]
  }

  return (
    <section id="skills" className="py-24 bg-zinc-50 dark:bg-zinc-800/50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-12">Skills & Expertise</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{category}</h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li key={skill} className="text-zinc-600 dark:text-zinc-400">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

