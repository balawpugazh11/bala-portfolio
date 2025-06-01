"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Code2, 
  GraduationCap, 
  Briefcase, 
  Award,
  Lightbulb,
  Users,
  Rocket
} from "lucide-react"

const stats = [
  {
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    value: "3+",
    label: "Projects Completed",
    description: "For various clients"
  },
  {
    icon: <Award className="h-6 w-6 text-primary" />,
    value: "100%",
    label: "Client Satisfaction",
    description: "Based on feedback"
  }
]

const values = [
  {
    icon: <Lightbulb className="h-6 w-6 text-primary" />,
    title: "Innovation",
    description: "Constantly exploring new technologies and approaches to create better solutions."
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Collaboration",
    description: "Working closely with clients and team members to achieve shared goals."
  },
  {
    icon: <Rocket className="h-6 w-6 text-primary" />,
    title: "Growth",
    description: "Continuously learning and improving skills to deliver better results."
  }
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-muted-foreground">
            Get to Know Me
          </p>
          <h2 className="text-4xl font-bold text-foreground">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate Full Stack Developer with a strong foundation in web technologies 
            and a drive to create impactful digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl" />
              <Image
                src="/about.jpeg"
                alt="About Me"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Who am I?
              </h3>
              <p className="text-muted-foreground">
                I am a Full Stack Developer with a passion for creating efficient, scalable, 
                and user-friendly web applications. My journey in web development started 
                during my college years, and since then, I've been constantly learning and 
                adapting to new technologies.
              </p>
              <p className="text-muted-foreground">
                Currently pursuing my Master's in Computer Applications, I combine academic 
                knowledge with practical experience to deliver high-quality solutions. I 
                specialize in modern web technologies and enjoy solving complex problems 
                through clean, maintainable code.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-4 text-center bg-card hover:shadow-lg transition-all duration-300">
                    <div className="flex justify-center mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {stat.description}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              My Values
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide my approach to development and collaboration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-card hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    {value.icon}
                    <h4 className="text-xl font-semibold text-foreground">
                      {value.title}
                    </h4>
                  </div>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

