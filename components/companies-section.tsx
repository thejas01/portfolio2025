"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin, ExternalLink } from "lucide-react"

export function CompaniesSection() {
  const companies = [
    {
      name: "CitiusTech",
      logo: "/images/citiustech-logo.png",
      role: "Trainee Software Engineer",
      period: "2022 - 2023",
      location: "Bengaluru, India",
      description:
        "Worked as a Java Developer in the healthcare domain, contributing to enterprise-level solutions for Southwestern Healthcare. Designed and implemented backend components that supported critical clinical and operational workflows, ensuring high availability, data integrity, and security. Played a key role in optimizing system performance and integrating third-party healthcare systems to streamline patient data exchange.",
      website: "https://www.citiustech.com",
    },
    {
      name: "Omnion",
      logo: "/images/omnion-logo.png",
      role: "Software Engineer",
      period: "2024 - 2025",
      location: "Udupi, India",
      description:
        "I've been working extensively with Java and Spring Boot to build RESTful services for GST computation and analytics. The main challenge was integrating multiple data sources in real-time while maintaining accuracy and performance.",
      website: "https://www.omnion.com",
    },
    {
      name: "Codezyng",
      logo: "/images/c.png",
      role: "Software Engineer I",
      period: "2025 - Present",
      location: "Udupi, India",
      description:
        "Developed and maintained web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions and improved application performance through code optimization and best practices implementation.",
      website: "https://www.codezyng.com",
    },
  ]

  return (
    <section id="experience" className="py-12">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <motion.div
            className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium mb-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Professional Journey
          </motion.div>
          <h2 className="text-2xl md:text-4xl font-bold text-zinc-800 dark:text-zinc-100">
            Where I've{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">
              Made an Impact
            </span>
          </h2>
        </motion.div>

        {/* Mobile View */}
        <div className="md:hidden space-y-8">
          {companies.map((company) => (
            <motion.div
              key={`mobile-${company.name}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-8 border-l-2 border-gradient-to-b from-blue-500 to-teal-500"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-5px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-teal-500">
                <div className="absolute inset-0.5 rounded-full bg-white dark:bg-zinc-900"></div>
              </div>

              {/* Date badge */}
              <div className="inline-block px-3 py-1 mb-3 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 text-white text-xs font-medium">
                {company.period}
              </div>

              {/* Company card */}
              <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-md border border-zinc-100 dark:border-zinc-700 overflow-hidden">
                {/* Header with logo and company name */}
                <div className="flex items-center p-4 border-b border-zinc-100 dark:border-zinc-700">
                  <div className="relative w-12 h-12 bg-white dark:bg-zinc-900 rounded-md flex-shrink-0">
                    <Image
                      src={company.logo || "/placeholder.svg"}
                      alt={`${company.name} logo`}
                      fill
                      sizes="48px"
                      style={{ objectFit: "contain" }}
                      className="p-1"
                    />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center">
                      {company.name}
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-blue-500"
                      >
                        <ExternalLink size={14} />
                        <span className="sr-only">Visit website</span>
                      </a>
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 text-sm">{company.role}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                    <MapPin size={14} className="mr-1" />
                    {company.location}
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm">{company.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="space-y-24 relative">
            {/* Center timeline line */}
            <div className="absolute left-1/2 transform -translate-x-[0.5px] top-0 h-full w-[1px] bg-gradient-to-b from-blue-500 to-teal-500"></div>

            {companies.map((company, index) => (
              <motion.div
                key={`desktop-${company.name}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-12 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 z-10">
                  <div className="absolute inset-0.5 rounded-full bg-white dark:bg-zinc-900"></div>
                </div>

                <div className={`flex items-start ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  {/* Left side (or right side on odd indexes) */}
                  <div className={`w-[calc(50%-12px)] ${index % 2 === 0 ? "pr-3" : "pl-3"}`}> {/* Reduced from 20px to 12px and padding from 6 to 3 */}
                    {/* Company logo */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white dark:bg-zinc-800 p-5 rounded-xl shadow-md border border-zinc-100 dark:border-zinc-700 inline-block"
                    >
                      <div className="relative w-24 h-24">
                        <Image
                          src={company.logo || "/placeholder.svg"}
                          alt={`${company.name} logo`}
                          fill
                          sizes="96px"
                          style={{ objectFit: "contain" }}
                          className="p-1"
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Right side (or left side on odd indexes) */}
                  <div className={`w-[calc(50%-12px)] ${index % 2 === 0 ? "pl-3" : "pr-3"}`}> {/* Reduced from 20px to 12px and padding from 6 to 3 */}
                    {/* Content card */}
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-md border border-zinc-100 dark:border-zinc-700"
                    >
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 flex items-center">
                        {company.name}
                        <a
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-blue-500 hover:text-blue-600"
                        >
                          <ExternalLink size={16} />
                          <span className="sr-only">Visit website</span>
                        </a>
                      </h3>

                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{company.role}</p>

                      <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                        <MapPin size={16} className="mr-1" />
                        {company.location}
                      </div>

                      <p className="text-zinc-700 dark:text-zinc-300">{company.description}</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
