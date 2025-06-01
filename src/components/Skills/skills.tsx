"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { 
  Code2, 
  Database, 
  Server, 
  Terminal, 
  GitBranch, 
  Cloud, 
  Layers, 
  Cpu 
} from 'lucide-react'

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code2 className="h-6 w-6 text-primary" />,
    description: "Building responsive and interactive user interfaces",
    skills: [
      { name: "React", level: 90, description: "Advanced" },
      { name: "Next.js", level: 85, description: "Advanced" },
      { name: "TypeScript", level: 80, description: "Intermediate" },
      { name: "Tailwind CSS", level: 90, description: "Advanced" },
      { name: "HTML/CSS", level: 95, description: "Advanced" },
    ]
  },
  {
    title: "Backend Development",
    icon: <Server className="h-6 w-6 text-primary" />,
    description: "Creating robust and scalable server-side applications",
    skills: [
      { name: "Node.js", level: 85, description: "Advanced" },
      { name: "Express", level: 80, description: "Advanced" },
      { name: "MongoDB", level: 75, description: "Intermediate" },
      { name: "PostgreSQL", level: 70, description: "Intermediate" },
    ]
  },
  {
    title: "Tools & Technologies",
    icon: <Terminal className="h-6 w-6 text-primary" />,
    description: "Mastering development tools and cloud technologies",
    skills: [
      { name: "Git", level: 85, description: "Advanced" },
      { name: "Docker", level: 70, description: "Intermediate" },
      { name: "AWS", level: 65, description: "Intermediate" },
      { name: "Linux", level: 75, description: "Intermediate" },
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-muted-foreground">
            What I Can Do
          </p>
          <h2 className="text-4xl font-bold text-foreground">
            My Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across various technologies and tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            >
              <Card className="p-6 bg-card hover:shadow-xl transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  {category.description}
                </p>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: (categoryIndex * 0.2) + (skillIndex * 0.1) 
                      }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <Badge 
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary"
                        >
                          {skill.description}
                        </Badge>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

