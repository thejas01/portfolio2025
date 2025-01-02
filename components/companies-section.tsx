
import Image from "next/image"

export function CompaniesSection() {
  const companies = [
    { name: "CitiusTech", logo: "/images/citiustech-logo.png" },
    { name: "Omnion", logo: "/images/omnion-logo.png" },
  ]

  return (
    <section className="py-12 border-t">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        <p className="text-center text-sm text-zinc-600 dark:text-zinc-400 mb-8">
          SOFTWARE ENGINEER AT CITIUSTECH AND OMNION
        </p>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          {companies.map((company) => (
            <div key={company.name} className="relative w-40 h-20">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "contain" }}
                className="transition-opacity duration-300 opacity-70 hover:opacity-100 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



