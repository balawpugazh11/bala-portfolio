"use client"

import { motion } from 'framer-motion'
import { Star, Quote, User, Award, TrendingUp } from 'lucide-react'

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Senior Software Engineer",
    company: "TechCorp Solutions",
    image: "/testimonial-1.jpg",
    content: "Balamurugan is an exceptional developer with a keen eye for detail and a passion for creating user-centric applications. His expertise in the MERN stack and ability to deliver high-quality code consistently makes him a valuable asset to any development team.",
    rating: 5,
    project: "E-commerce Platform",
    impact: "Reduced load times by 40%"
  },
  {
    name: "Prof. Michael Chen",
    role: "Computer Science Professor",
    company: "University of Technology",
    image: "/testimonial-2.jpg",
    content: "As a student, Balamurugan demonstrated exceptional problem-solving skills and a deep understanding of web development principles. His projects consistently showcased innovative thinking and technical excellence.",
    rating: 5,
    project: "Academic Projects",
    impact: "Top 5% of graduating class"
  },
  {
    name: "Alex Rodriguez",
    role: "Project Manager",
    company: "InnovateTech",
    image: "/testimonial-3.jpg",
    content: "Working with Balamurugan was a pleasure. He consistently delivered projects on time, communicated effectively, and went above and beyond to ensure client satisfaction. His technical skills are matched only by his professionalism.",
    rating: 5,
    project: "Real-time Chat Application",
    impact: "100% client satisfaction"
  }
]

const achievements = [
  {
    title: "Hackathon Winner",
    description: "First place in CodeFest 2024",
    icon: Award,
    color: "bg-yellow-100 text-yellow-800"
  },
  {
    title: "Certified Developer",
    description: "MongoDB Developer Certification",
    icon: TrendingUp,
    color: "bg-green-100 text-green-800"
  },
  {
    title: "Open Source Contributor",
    description: "50+ contributions to popular repos",
    icon: Star,
    color: "bg-blue-100 text-blue-800"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black tracking-tight mb-6">
            What People Say
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Testimonials from colleagues, professors, and clients who have worked with me 
            and witnessed my commitment to excellence in web development.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="h-8 w-8 text-gray-300" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Project Impact */}
              <div className="mb-6 p-3 bg-blue-50 rounded-lg">
                <div className="text-sm font-semibold text-blue-800 mb-1">
                  Project: {testimonial.project}
                </div>
                <div className="text-sm text-blue-600">
                  Impact: {testimonial.impact}
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-black mb-8 text-center">
            Achievements & Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-16 h-16 ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <achievement.icon className="h-8 w-8" />
                </div>
                <h4 className="font-semibold text-black mb-2">{achievement.title}</h4>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and see how I can help bring your ideas to life 
              with cutting-edge web development solutions.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              <span>Get In Touch</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
