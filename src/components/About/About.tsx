"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { GraduationCap, Briefcase } from 'lucide-react'
import { useState } from "react"

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false)

  const shortDescription = "Hey there! I'm Balamurugan M, a passionate front-end developer with a growing interest in full-stack development. I enjoy crafting dynamic, responsive, and visually appealing web applications..."

  const fullDescription = (
    <>
      <p className="text-muted-foreground">
        Hey there! I&apos;m Balamurugan M, a passionate front-end developer with a growing interest in full-stack development. I enjoy crafting dynamic, responsive, and visually appealing web applications. With hands-on experience in building projects like Datashore, I aim to merge creativity and logic in every line of code.
      </p>
      <p className="text-muted-foreground">
        Currently pursuing an MCA, I&apos;m expanding my skills in TypeScript, React, and open-source technologies. I'm also keen on entrepreneurship and have ideas brewing for future ventures. When I&apos;m not coding, you can find me exploring Spanish culture or preparing for exciting tech challenges.
      </p>
      {/* Add more paragraphs here for additional content you want to show when expanded */}
    </>
  )

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
            Get To Know More
          </p>
          <h2 className="text-4xl font-bold text-foreground">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square group"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl group-hover:blur-2xl transition-all duration-300" />
            <motion.div
              whileHover={{ 
                scale: 1.02,
                rotate: 2,
                transition: { duration: 0.3 }
              }}
              className="relative w-full h-full"
            >
              <Image
                src="/about.jpeg"
                alt="About Me"
                fill
                className="rounded-2xl object-cover shadow-xl transition-all duration-300 group-hover:shadow-2xl"
              />
            </motion.div>
          </motion.div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="p-6 bg-primary/5 border-primary/10 h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <Briefcase className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-semibold">Experience</h3>
                    </div>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Frontend & Full-Stack Developer</p>
                      <p>1+ year of experience in building innovative projects and learning new tech stacks.</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Card className="p-6 bg-primary/5 border-primary/10 h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <GraduationCap className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-semibold">Education</h3>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>MCA (Master of Computer Applications) – Present</li>
                      <li>PG Diploma in Robotics</li>
                      <li>BCA (Bachelor of Computer Applications)</li>
                    </ul>
                  </div>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-accent/50 p-6 rounded-xl space-y-4"
            >
              <div className="space-y-4">
                {isExpanded ? fullDescription : (
                  <p className="text-muted-foreground">
                    {shortDescription}
                  </p>
                )}
              </div>
              <Button 
                variant="outline" 
                className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "Show Less" : "Read More"}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

