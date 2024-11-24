"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { GraduationCap, Briefcase, Code, Database } from 'lucide-react'
import { useState } from "react"

interface TimelineItemProps {
  icon: string | React.ReactNode
  date: string
  title: string
  organization: string
  description?: React.ReactNode
  shortDescription?: string
  gpa?: string
}

function TimelineItem({ icon, date, title, organization, description, shortDescription, gpa }: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const hasLongContent = shortDescription && description

  return (
    <motion.div 
      className="flex gap-6 relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center">
        <motion.div 
          className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shadow-lg p-2 z-10"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {typeof icon === 'string' ? (
            <Image
              src={icon}
              alt=""
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
          ) : (
            <div className="text-primary w-8 h-8">
              {icon}
            </div>
          )}
        </motion.div>
        <div className="w-0.5 h-full bg-primary/20 absolute top-16 left-8 -z-10" />
      </div>
      <Card className="flex-1 mb-8 bg-card hover:shadow-lg transition-all duration-300">
        <div className="p-6 space-y-3">
          <span className="text-sm text-primary">{date}</span>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <div className="text-muted-foreground font-medium">{organization}</div>
          <div className="text-muted-foreground">
            {hasLongContent ? (
              <>
                <div className="space-y-2">
                  {isExpanded ? description : shortDescription}
                </div>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-4 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                >
                  {isExpanded ? "Show Less" : "Read More"}
                </button>
              </>
            ) : (
              description
            )}
          </div>
          {gpa && (
            <div className="flex items-center gap-2 text-primary">
              <span className="font-semibold">GPA:</span> {gpa}
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  )
}

export default function Timeline() {
  const education = [
    {
      icon: <GraduationCap className="w-full h-full" />,
      date: "2023 - 2025",
      title: "Master of Computer Applications",
      organization: "Dr.G.R Damodaran College of Science",
      gpa: "8.1/10"
    },
    {
      icon: <Code className="w-full h-full" />,
      date: "2023 - 2025",
      title: "PG Diploma in Robotics",
      organization: "Dr.G.R Damodaran College of Science"
    },
    {
      icon: <GraduationCap className="w-full h-full" />,
      date: "2020 - 2023",
      title: "Bachelor of Computer Science",
      organization: "Sri Krishna Adithya College of Arts and Science",
      gpa: "8.3/10"
    }
  ]

  const experience = [
    {
      icon: <Briefcase className="w-full h-full" />,
      date: "Jan 2024 - Present",
      title: "Freelance Web Developer",
      organization: "Self-Employed",
      shortDescription: "• Web Development: Built responsive and visually appealing websites using modern web technologies like React JS, Tailwind CSS, and TypeScript.",
      description: (
        <div className="space-y-2">
          <p>• Web Development: Built responsive and visually appealing websites using modern web technologies like React JS, Tailwind CSS, and TypeScript.</p>
          <p>• Portfolio Creation: Developed and enhanced personal and professional portfolio pages, incorporating light and dark mode switching, React components, and user-friendly designs.</p>
          <p>• Client Projects: Delivered a live website for the startup Datashore hosted on Netlify (datashore.netlify.app), showcasing expertise in front-end development and design.</p>
          <p>• Problem Solving: Resolved bugs and implemented new features for clients, ensuring high-quality and functional web solutions.</p>
          <p>• Technology Expertise: Skilled in HTML, CSS, JavaScript, and frameworks like React. Actively expanding knowledge in TypeScript and Framer for more complex projects.</p>
          <p>• Collaboration: Worked closely with clients to gather requirements and deliver solutions tailored to their needs.</p>
        </div>
      )
    }
  ]

  return (
    <section id="timeline" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-muted-foreground">
            My Professional Journey
          </p>
          <h2 className="text-4xl font-bold text-foreground">
            Timeline
          </h2>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-foreground">Education</h3>
            {education.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold mb-8 text-foreground">Experience</h3>
            {experience.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

