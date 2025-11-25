"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github, Star, Users, Calendar, ArrowRight, Play, Zap, TrendingUp } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    title: "E-Commerce Web Application (Nostra Clone)",
    description: "Developed a secure web email application with features such as registration, login, inbox, sent mail, and trash. Built using React, Tailwind CSS, Node.js, Express.js, and MongoDB with real-time updates using WebSockets.",
    problemSolved: "Automated order tracking for small businesses with real-time inventory management",
    image: "/Nostra-project.png",
    technologies: [
      { name: "React", icon: "⚛️", color: "bg-blue-100 text-blue-800" },
      { name: "Tailwind CSS", icon: "🎨", color: "bg-cyan-100 text-cyan-800" },
      { name: "Node.js", icon: "🟢", color: "bg-green-100 text-green-800" },
      { name: "Express.js", icon: "🚀", color: "bg-gray-100 text-gray-800" },
      { name: "MongoDB", icon: "🍃", color: "bg-emerald-100 text-emerald-800" },
      { name: "WebSockets", icon: "🔌", color: "bg-purple-100 text-purple-800" }
    ],
    github: "https://github.com/balawpugazh11/nostra-clone",
    live: "https://nostra-clone.vercel.app",
    category: "Full-Stack",
    stars: 45,
    forks: 12,
    lastUpdated: "Mar 2025",
    featured: true,
    impact: "Increased product discovery with responsive filters and 30% faster loads.",
    demo: "https://www.youtube.com/watch?v=demo1",
    hasDemo: true,
    stats: {
      users: "500+",
      performance: "30% faster",
      uptime: "99.9%"
    }
  },
  {
    title: "Netflix Login System (Full-Stack)",
    description: "Designed a responsive Netflix-style login user interface with React and Tailwind CSS. Developed back-end authentication with Express.js and integrated front-end and back-end using Axios for real-time handling.",
    problemSolved: "Secure messaging for real-time teams with enterprise-grade authentication",
    image: "/Netflix-project.png",
    technologies: [
      { name: "React", icon: "⚛️", color: "bg-blue-100 text-blue-800" },
      { name: "Tailwind CSS", icon: "🎨", color: "bg-cyan-100 text-cyan-800" },
      { name: "Express.js", icon: "🚀", color: "bg-gray-100 text-gray-800" },
      { name: "Axios", icon: "📡", color: "bg-indigo-100 text-indigo-800" },
      { name: "Authentication", icon: "🔐", color: "bg-red-100 text-red-800" }
    ],
    github: "https://github.com/balawpugazh11/netflix-login",
    live: "https://netflix-login.vercel.app",
    category: "Full-Stack",
    stars: 38,
    forks: 8,
    lastUpdated: "May 2025",
    featured: true,
    impact: "Reduced login errors by 25% with server-side validation and UX tweaks.",
    demo: "https://www.youtube.com/watch?v=demo2",
    hasDemo: true,
    stats: {
      users: "1K+",
      performance: "25% fewer errors",
      uptime: "99.8%"
    }
  },
  {
    title: "Bulkmail (Full-Stack Email Platform)",
    description: "Built a full-stack e-commerce platform using React, Node.js, and Express featuring product listing, cart management, and order processing. Implemented responsive UI with Tailwind CSS and seamless RESTful API backend integration.",
    problemSolved: "Streamlined email marketing campaigns with automated delivery tracking",
    image: "/Bulkmail-project.png",
    technologies: [
      { name: "React", icon: "⚛️", color: "bg-blue-100 text-blue-800" },
      { name: "Node.js", icon: "🟢", color: "bg-green-100 text-green-800" },
      { name: "Express.js", icon: "🚀", color: "bg-gray-100 text-gray-800" },
      { name: "Tailwind CSS", icon: "🎨", color: "bg-cyan-100 text-cyan-800" },
      { name: "REST APIs", icon: "🔗", color: "bg-orange-100 text-orange-800" }
    ],
    github: "https://github.com/balawpugazh11/Bulkmail",
    live: "https://bulkmail.vercel.app",
    category: "Full-Stack",
    stars: 52,
    forks: 15,
    lastUpdated: "Jul 2025",
    featured: true,
    impact: "Optimized API reduced send latency ~30% under typical workloads.",
    demo: "https://www.youtube.com/watch?v=demo3",
    hasDemo: true,
    stats: {
      users: "2K+",
      performance: "30% faster delivery",
      uptime: "99.7%"
    }
  },
  {
    title: "Task Manager App",
    description: "A comprehensive task management application with search and pagination features. Deployed live with advanced functionality for organizing and tracking tasks efficiently.",
    problemSolved: "Organized project workflows with intelligent task prioritization",
    image: "/Task-managment-project.png",
    technologies: [
      { name: "React", icon: "⚛️", color: "bg-blue-100 text-blue-800" },
      { name: "Node.js", icon: "🟢", color: "bg-green-100 text-green-800" },
      { name: "MongoDB", icon: "🍃", color: "bg-emerald-100 text-emerald-800" },
      { name: "Search", icon: "🔍", color: "bg-yellow-100 text-yellow-800" },
      { name: "Pagination", icon: "📄", color: "bg-gray-100 text-gray-800" }
    ],
    github: "https://github.com/balawpugazh11/task-manager",
    live: "https://task-manager.vercel.app",
    category: "Productivity",
    stars: 28,
    forks: 6,
    lastUpdated: "Aug 2025",
    featured: false,
    impact: "Improved task retrieval by 40% using indexed queries and pagination.",
    demo: "",
    hasDemo: false,
    stats: {
      users: "300+",
      performance: "40% faster search",
      uptime: "99.5%"
    }
  },
  {
    title: "Movie-API-app",
    description: "Built a  with WebSocket integration for instant messaging capabilities and user authentication.",
    problemSolved: "Real-time movie recommendations with personalized user preferences",
    image: "/movie-api-project.png",
    technologies: [
      { name: "React", icon: "⚛️", color: "bg-blue-100 text-blue-800" },
      { name: "Socket.io", icon: "🔌", color: "bg-purple-100 text-purple-800" },
      { name: "Node.js", icon: "🟢", color: "bg-green-100 text-green-800" },
      { name: "Express.js", icon: "🚀", color: "bg-gray-100 text-gray-800" },
      { name: "Real-time", icon: "⚡", color: "bg-yellow-100 text-yellow-800" }
    ],
    github: "https://github.com/balawpugazh11/chat-app",
    live: "https://chat-app.vercel.app",
    category: "Real-time",
    stars: 34,
    forks: 9,
    lastUpdated: "Sep 2025",
    featured: false,
    impact: "Real-time updates with WebSockets; sub-second feedback on actions.",
    demo: "",
    hasDemo: false,
    stats: {
      users: "800+",
      performance: "Sub-second updates",
      uptime: "99.6%"
    }
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts and interactive maps using external weather APIs.",
    problemSolved: "Location-aware weather insights for daily planning and travel",
    image: "/weather-api-project.png",
    technologies: [
      { name: "React", icon: "⚛️", color: "bg-blue-100 text-blue-800" },
      { name: "Weather API", icon: "🌤️", color: "bg-sky-100 text-sky-800" },
      { name: "Geolocation", icon: "📍", color: "bg-red-100 text-red-800" },
      { name: "Responsive Design", icon: "📱", color: "bg-green-100 text-green-800" }
    ],
    github: "https://github.com/balawpugazh11/project-6-WeatherAPI-",
    live: "https://project-6-weather-api.vercel.app/",
    category: "Utility",
    stars: 22,
    forks: 5,
    lastUpdated: "July 2025",
    featured: false,
    impact: "Geo-aware caching cut repeat lookups; instant city switching.",
    demo: "",
    hasDemo: false,
    stats: {
      users: "1.5K+",
      performance: "Instant city switching",
      uptime: "99.4%"
    }
  }
]

const categories = ["All", "Full-Stack", "Productivity", "Real-time", "Utility"]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-20" />
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
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my latest work, demonstrating expertise in full-stack development, 
            real-time applications, and modern web technologies.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          style={{ scale }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 relative"
              >
                {/* Featured Badge */}
                {project.featured && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="absolute top-4 left-4 z-10 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1"
                  >
                    <Star className="h-3 w-3" />
                    <span>Featured</span>
                  </motion.div>
                )}

                {/* Project Image */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={project.featured}
                    onError={(e) => {
                      // Fallback to a placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="flex items-center justify-center h-full bg-gradient-to-br from-blue-100 to-purple-100">
                            <div class="text-center">
                              <div class="text-4xl mb-2">📱</div>
                              <div class="text-gray-600 font-medium">${project.title}</div>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-sm">
                    {project.category}
                  </div>

                  {/* Demo Video Badge */}
                  {project.hasDemo && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="absolute bottom-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1"
                    >
                      <Play className="h-3 w-3" />
                      <span>Demo</span>
                    </motion.div>
                  )}

                  {/* Live Demo Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="absolute bottom-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                  >
                    Live
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {project.title}
                  </h3>
                  
                  {/* Problem Solved */}
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-semibold text-blue-800">Problem Solved</span>
                    </div>
                    <p className="text-sm text-blue-700">
                      {project.problemSolved}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {project.impact && (
                    <div className="mb-6 p-3 bg-green-50 rounded-lg border border-green-100">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-semibold text-green-800">Impact</span>
                      </div>
                      <p className="text-sm text-green-700">
                        {project.impact}
                      </p>
                    </div>
                  )}

                  {/* Project Stats */}
                  {project.stats && (
                    <div className="mb-6 grid grid-cols-3 gap-3">
                      <div className="text-center p-2 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-black">{project.stats.users}</div>
                        <div className="text-xs text-gray-600">Users</div>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-black">{project.stats.performance}</div>
                        <div className="text-xs text-gray-600">Performance</div>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-black">{project.stats.uptime}</div>
                        <div className="text-xs text-gray-600">Uptime</div>
                      </div>
                    </div>
                  )}

                  {/* Technologies with Icons */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech.name}
                        className={`px-3 py-1 ${tech.color} text-sm rounded-full flex items-center space-x-1`}
                      >
                        <span>{tech.icon}</span>
                        <span>{tech.name}</span>
                      </span>
                    ))}
                  </div>

                  {/* Project Stats */}
                  <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4" />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{project.forks}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{project.lastUpdated}</span>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-200 text-gray-700 hover:text-black"
                    >
                      <Github className="h-5 w-5" />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all duration-200 font-medium shadow-md hover:shadow-lg"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>

                  {project.hasDemo && (
                    <div className="mt-4">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-sm text-red-600 hover:text-red-700 font-medium"
                      >
                        <Play className="h-4 w-4" />
                        <span>Watch 10s Demo</span>
                      </motion.a>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/balawpugazh11"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <span>View All Projects</span>
            <ArrowRight className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
