"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Datashore Webpage",
    description: "A comprehensive website for Datashore, a data analytics startup. The site features an intuitive interface, dynamic content sections, and optimized performance to effectively showcase the company's services and solutions.",
    image: "/datashore.jpg",
    tags: ["React.js", "Tailwind CSS", "Netlify", "Responsive Design", "SEO"],
    link: "https://datashore.netlify.app/",
    features: [
      "Custom animations and transitions for enhanced user experience",
      "Optimized SEO implementation for better visibility",
      "Responsive design with mobile-first approach",
      "Integration with contact forms and analytics",
      "Fast loading times with optimized assets"
    ]
  },
  {
    title: "FitX - Fitness Tracker Website",
    description: "A responsive and user-friendly fitness tracker web application designed to help users monitor their workouts, track fitness goals, and maintain a healthy lifestyle.",
    image: "/project2.jpg",
    tags: ["React", "TypeScript", "Vercel", "Responsive Design"],
    link: "https://fitx-9f93uf66y-balawpugazh11s-projects.vercel.app/",
    features: [
      "Interactive dashboard for logging workouts and tracking progress",
      "Responsive design for seamless usage across devices",
      "Dynamic visualizations to represent fitness metrics",
      "Intuitive navigation for a smooth user experience"
    ]
  },
  {
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and TypeScript, featuring dark mode, smooth animations, and a clean design to showcase my projects and skills.",
    image: "/project3.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "#",
    features: [
      "Dark/Light mode theme switching",
      "Smooth scroll and animations using Framer Motion",
      "Responsive design for all devices",
      "Server-side rendering for optimal performance"
    ]
  }
]

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
            Browse My Recent
          </p>
          <h2 className="text-4xl font-bold text-foreground">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden bg-card hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {project.features && (
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  )}
                  <Link 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    View Project
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

