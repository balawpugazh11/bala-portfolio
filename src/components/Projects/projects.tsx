"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Code2, Globe, Database } from "lucide-react"

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  features: string[]
  category: "frontend" | "fullstack" | "backend"
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and a clean design.",
    image: "/project3.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/balawpugazh11/portfolio",
    liveUrl: "https://balawpugazh.vercel.app",
    features: [
      "Responsive design with mobile-first approach",
      "Dark mode support with system preference detection",
      "Smooth animations and transitions",
      "SEO optimized with metadata",
      "Contact form with email integration"
    ],
    category: "frontend"
  },
  {
    title: "Datashore",
    description: "A data analytics platform for businesses to visualize and analyze their data. Built with React and Node.js.",
    image: "/datashore.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
    githubUrl: "https://github.com/balawpugazh11/datashore",
    liveUrl: "https://datashore.netlify.app",
    features: [
      "Interactive data visualization",
      "Real-time data updates",
      "User authentication and authorization",
      "Custom dashboard creation",
      "Data export functionality"
    ],
    category: "fullstack"
  },
  {
    title: "Task Management API",
    description: "A robust RESTful API for task management with user authentication, role-based access control, and real-time updates.",
    image: "/project2.jpg",
    technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Socket.io"],
    githubUrl: "https://github.com/balawpugazh11/task-management-api",
    features: [
      "JWT-based authentication",
      "Role-based access control",
      "Real-time updates with WebSocket",
      "Database optimization",
      "API documentation with Swagger"
    ],
    category: "backend"
  }
]

const categoryIcons = {
  frontend: <Code2 className="h-4 w-4" />,
  fullstack: <Globe className="h-4 w-4" />,
  backend: <Database className="h-4 w-4" />
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-muted-foreground">
            My Work
          </p>
          <h2 className="text-4xl font-bold text-foreground">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating my skills in web development, 
            problem-solving, and creating user-friendly applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full bg-card hover:shadow-xl transition-all duration-300 overflow-hidden card-hover">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110 image-elegant"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.githubUrl && (
                      <Button
                        size="icon"
                        variant="secondary"
                        asChild
                        className="bg-background/80 hover:bg-background button-elegant"
                      >
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        size="icon"
                        variant="secondary"
                        asChild
                        className="bg-background/80 hover:bg-background button-elegant"
                      >
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      {categoryIcons[project.category]}
                      {project.category}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

