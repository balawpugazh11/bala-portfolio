"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Calendar, MapPin, Award, Users, Code, Lightbulb, GraduationCap, BookOpen, Sparkles, ArrowRight } from 'lucide-react'

export default function AppleAbout() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  const experiences = [
    {
      year: "2023 - 2025",
      title: "Master of Computer Applications (MCA)",
      company: "GRD College of Science, Coimbatore",
      description: "CGPA: 8.1/10 - Advanced studies in computer applications and software development."
    },
    {
      year: "2020 - 2023",
      title: "Bachelor of Computer Applications (BCA)",
      company: "Sri Krishna Adithya College of Arts & Science, Coimbatore",
      description: "CGPA: 8.3/10 - Foundation in computer science and programming fundamentals."
    }
  ]

  const achievements = [
    { icon: Award, title: "Live Projects Deployed", description: "Successfully deployed multiple live projects including Task Manager App with search and pagination" },
    { icon: Users, title: "Nostra E-Commerce Clone", description: "Independently recreated the Nostra E-Commerce frontend as a self-driven learning initiative" },
    { icon: Code, title: "Netflix UI Mastery", description: "Designed and validated a Netflix-style login UI, demonstrating mastery of modern frameworks" },
    { icon: Lightbulb, title: "Problem Solving", description: "Strong analytical skills with expertise in real-time app development and API integration" }
  ]

  return (
    <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Enhanced Background Pattern with floating elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-20 left-10 opacity-20"
      >
        <Sparkles className="h-8 w-8 text-gray-400" />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-40 right-20 opacity-20"
      >
        <Sparkles className="h-6 w-6 text-gray-400" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold text-black tracking-tight"
            >
              About Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Full-Stack Developer with proven expertise in designing and deploying responsive, user-friendly web 
              applications. Highly skilled in both front-end and back-end technologies, including React, Node.js, 
              Express.js, MongoDB, and MySQL.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Adept at API integration, real-time app development, and cloud deployment. Committed to writing 
              maintainable code and continuously upgrading skills through advanced training and live projects.
            </motion.p>

            {/* Enhanced Stats with hover animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8"
            >
              {[
                { number: "10+", label: "Projects Completed", icon: Code },
                { number: "8.1", label: "MCA CGPA", icon: GraduationCap },
                { number: "8.3", label: "BCA CGPA", icon: BookOpen }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  className="text-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="h-6 w-6 text-gray-600 mx-auto mb-2" />
                  </motion.div>
                  <div className="text-2xl font-bold text-black">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Hero Image with animations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              style={{ scale, y }}
              whileHover={{ 
                scale: 1.03,
                rotateY: 5
              }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/hero-image.jpeg"
                alt="Balamurugan - Full Stack Developer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Animated gradient overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
                animate={{
                  background: [
                    "linear-gradient(to top, rgba(0,0,0,0.3), transparent, transparent)",
                    "linear-gradient(to top, rgba(0,0,0,0.4), transparent, transparent)",
                    "linear-gradient(to top, rgba(0,0,0,0.3), transparent, transparent)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Floating info card with enhanced animations */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5
                }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20"
              >
                <div className="flex items-center space-x-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <MapPin className="h-6 w-6 text-gray-600" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="font-bold text-black text-lg">Cuddalore, India</div>
                    <div className="text-sm text-gray-600">Available for remote work worldwide</div>
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating achievement badges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true }}
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
              >
                <Award className="h-6 w-6 text-yellow-500" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                viewport={{ once: true }}
                className="absolute top-20 left-6 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
              >
                <Code className="h-6 w-6 text-blue-500" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Education Timeline with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-3xl font-bold text-black text-center mb-12">Educational Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="text-sm font-medium text-gray-500 mb-2">{exp.year}</div>
                <h4 className="text-xl font-bold text-black mb-2">{exp.title}</h4>
                <div className="text-gray-600 font-medium mb-3">{exp.company}</div>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-3xl font-bold text-black text-center mb-12">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <achievement.icon className="h-8 w-8 text-gray-600 mx-auto mb-4" />
                </motion.div>
                <h4 className="text-lg font-bold text-black mb-2">{achievement.title}</h4>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
