"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "HTML/CSS", level: "Advanced" },
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express", level: "Advanced" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "PostgreSQL", level: "Intermediate" },
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
      { name: "AWS", level: "Intermediate" },
      { name: "Linux", level: "Intermediate" },
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
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: (categoryIndex * 0.2) + (skillIndex * 0.1) 
                      }}
                    >
                      <Badge 
                        variant="secondary"
                        className="px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {skill.name}
                        <span className="ml-2 text-xs opacity-75">
                          {skill.level}
                        </span>
                      </Badge>
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

