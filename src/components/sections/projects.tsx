"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: "Nostra E-Commerce Platform",
    description: "Full-featured e-commerce web platform with registration, cart management, instant product filtering, and order handling.",
    image: "/images/projects/nostra.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/balawpugazh11/nostra-clone",
    live: "https://nostra-clone.vercel.app",
    category: "Full-Stack",
    featured: true,
  },
  {
    title: "Netflix Authentication Suite",
    description: "Responsive Netflix-inspired authentication UI with secure server-side validation and session management.",
    image: "/images/projects/netflix.png",
    technologies: ["React", "Express.js", "Axios", "Tailwind CSS"],
    github: "https://github.com/balawpugazh11/netflix-login",
    live: "https://netflix-login.vercel.app",
    category: "Full-Stack",
    featured: true,
  },
  {
    title: "BulkMail Dispatcher",
    description: "High-volume email communication system featuring customizable templates, automated queueing, and deliverability tracking.",
    image: "/images/projects/bulkmail.png",
    technologies: ["React", "Node.js", "Express", "REST APIs"],
    github: "https://github.com/balawpugazh11/Bulkmail",
    live: "https://bulkmail.vercel.app",
    category: "Full-Stack",
    featured: true,
  },
  {
    title: "TaskFlow Manager",
    description: "Productivity application with real-time status tracking, fast indexed search, pagination, and persistent storage.",
    image: "/images/projects/task-management.png",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/balawpugazh11/task-manager",
    live: "https://task-manager.vercel.app",
    category: "Productivity",
    featured: false,
  },
  {
    title: "Movie & Media Stream API",
    description: "Media discovery web application consuming external streaming APIs with instant search and responsive video previews.",
    image: "/images/projects/movie-api.png",
    technologies: ["React", "REST API", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/balawpugazh11/chat-app",
    live: "https://chat-app.vercel.app",
    category: "Real-time",
    featured: false,
  },
  {
    title: "Live Weather Dashboard",
    description: "Location-aware meteorological app delivering 5-day forecasts, radar maps, and fast cached location lookups.",
    image: "/images/projects/weather-api.png",
    technologies: ["React", "Weather API", "Geolocation", "Tailwind CSS"],
    github: "https://github.com/balawpugazh11/project-6-WeatherAPI-",
    live: "https://project-6-weather-api.vercel.app/",
    category: "Utility",
    featured: false,
  }
]

const categories = ["All", "Full-Stack", "Productivity", "Real-time", "Utility"]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full border border-zinc-200">
            Selected Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
            Real-world projects & apps.
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            Each project is built with clean architecture, responsive layouts, and production deployment.
          </p>
        </div>

        {/* Minimalist Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200/80 hover:text-zinc-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group flex flex-col rounded-2xl bg-white border border-zinc-200/80 overflow-hidden shadow-sm hover:shadow-md hover:border-zinc-300 transition-all"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 border-b border-zinc-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-[11px] font-semibold text-zinc-700 shadow-xs border border-zinc-200/50">
                  {project.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-zinc-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-zinc-100 text-zinc-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Action Links */}
                <div className="flex items-center gap-3 pt-3 border-t border-zinc-100 text-xs sm:text-sm font-medium">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-zinc-900 hover:text-blue-600 transition-colors font-semibold"
                  >
                    <span>Live Preview</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-zinc-300">•</span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-zinc-900 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Footnote */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/balawpugazh11"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-100 hover:bg-zinc-200/80 text-zinc-800 text-xs sm:text-sm font-medium transition-all"
          >
            <Github className="w-4 h-4" />
            <span>More projects on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
          </a>
        </div>

      </div>
    </section>
  )
}
