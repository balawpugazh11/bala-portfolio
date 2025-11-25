"use client"

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, BookOpen, Code, Zap } from 'lucide-react'

const blogPosts = [
  {
    title: "Why I Love Building Real-Time Applications",
    excerpt: "Exploring the challenges and rewards of developing real-time features with WebSockets, and how they can transform user experience.",
    category: "Technical Insights",
    readTime: "5 min read",
    date: "March 15, 2025",
    tags: ["WebSockets", "Real-time", "UX"],
    icon: Zap,
    color: "bg-blue-100 text-blue-800"
  },
  {
    title: "What I Learned from Building on Vercel",
    excerpt: "A deep dive into the deployment experience, performance optimizations, and best practices I discovered while hosting projects on Vercel.",
    category: "Deployment",
    readTime: "7 min read",
    date: "February 28, 2025",
    tags: ["Vercel", "Deployment", "Performance"],
    icon: Code,
    color: "bg-green-100 text-green-800"
  },
  {
    title: "MERN Stack Best Practices for 2025",
    excerpt: "Sharing the lessons learned from building production applications with MongoDB, Express, React, and Node.js.",
    category: "Best Practices",
    readTime: "8 min read",
    date: "February 10, 2025",
    tags: ["MERN", "Best Practices", "Architecture"],
    icon: BookOpen,
    color: "bg-purple-100 text-purple-800"
  }
]

export default function Blog() {
  return (
    <section id="blog" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-20" />
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
            Insights & Learnings
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Sharing my thoughts on web development, technical challenges, and lessons learned 
            from building real-world applications.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Category Badge */}
              <div className="flex items-center space-x-2 mb-4">
                <div className={`w-8 h-8 ${post.color} rounded-full flex items-center justify-center`}>
                  <post.icon className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-gray-600">{post.category}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-black mb-4 leading-tight">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Read More Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                <span>Read Article</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Stay Updated with My Latest Insights
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get notified when I publish new articles about web development, 
            technical challenges, and industry best practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
