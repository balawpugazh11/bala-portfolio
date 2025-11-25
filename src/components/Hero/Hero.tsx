"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, ArrowRight, Sparkles, Code, Palette, Zap, Download, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { useEffect, useState, useMemo } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [typewriterText, setTypewriterText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, 100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  
  const roles = useMemo(() => ['Full-Stack Developer', 'React Specialist', 'Node.js Expert', 'MERN Stack Developer'], [])

  useEffect(() => {
    setIsClient(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Typewriter effect
  useEffect(() => {
    if (!isClient || !roles.length) return
    
    const currentRole = roles[currentIndex]
    if (!currentRole) return
    
    let pauseTimeout: NodeJS.Timeout | null = null
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typewriterText.length < currentRole.length) {
          setTypewriterText(currentRole.slice(0, typewriterText.length + 1))
        } else {
          pauseTimeout = setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (typewriterText.length > 0) {
          setTypewriterText(currentRole.slice(0, typewriterText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => {
      clearTimeout(timeout)
      if (pauseTimeout) clearTimeout(pauseTimeout)
    }
  }, [typewriterText, currentIndex, isDeleting, roles, isClient])

  const scrollToAbout = () => {
    if (typeof window !== 'undefined') {
      const aboutSection = document.getElementById('about')
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const features = [
    { icon: Code, text: "Full-Stack Development", color: "from-blue-500 to-cyan-500" },
    { icon: Palette, text: "Responsive Design", color: "from-purple-500 to-pink-500" },
    { icon: Zap, text: "Real-time Applications", color: "from-orange-500 to-red-500" }
  ]

  const techStack = [
    "React", "Node.js", "TypeScript", "MongoDB", "Express", "Next.js"
  ]

  // Memoized particles data to prevent re-creation on every render
  const particles = useMemo(() => {
    if (typeof window === 'undefined') return []
    
    return [...Array(20)].map((_, i) => {
      const randomX = Math.random() * window.innerWidth
      const randomY = Math.random() * window.innerHeight
      const targetY = Math.random() * window.innerHeight
      const randomOpacity = Math.random() * 0.5 + 0.2
      const randomDuration = Math.random() * 3 + 2
      const randomDelay = Math.random() * 2
      
      return {
        id: i,
        x: randomX,
        y: randomY,
        targetY,
        opacity: randomOpacity,
        duration: randomDuration,
        delay: randomDelay
      }
    })
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden py-12 sm:py-16 md:py-0">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Hero Image Background */}
        <div className="absolute inset-0">
          <Image
            src="/hero-image.jpeg"
            alt="Balamurugan - Full-Stack Developer Background"
            fill
            className="object-cover object-center"
            priority
            quality={90}
            sizes="100vw"
            style={{
              opacity: 0.3,
              filter: 'grayscale(30%) blur(1px)'
            }}
          />
          {/* Enhanced gradient overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-white/60" />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 via-transparent to-purple-50/30" />
        </div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <motion.div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
              backgroundPosition: '0px 0px'
            }}
            animate={{
              backgroundPosition: '60px 60px'
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse"
            }}
          />
        </div>

        {/* Animated particles - only on client */}
        {isClient && particles.map((particle) => (
          <motion.div
            key={`particle-${particle.id}`}
            className="absolute w-1 h-1 bg-gray-400 rounded-full"
            initial={{
              x: particle.x,
              y: particle.y,
              opacity: particle.opacity
            }}
            animate={{
              y: [particle.y, particle.targetY],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay
            }}
          />
        ))}

        <motion.div 
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blue-50 rounded-full blur-3xl opacity-20 sm:opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-purple-50 rounded-full blur-3xl opacity-20 sm:opacity-30"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Mouse-following gradient - only on desktop */}
        <motion.div
          className="hidden md:block absolute w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-20 pointer-events-none"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div 
          style={{ y, opacity }}
          className="flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-12"
        >
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center w-full max-w-4xl"
          >
            <motion.div className="space-y-6 sm:space-y-8 md:space-y-10">
              
              {/* Greeting Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200/50 shadow-sm"
                >
                  <Sparkles className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">Welcome to my portfolio</span>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="h-4 w-4 text-purple-600" />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Main Headline with Enhanced Animated Gradient */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[1.1] relative"
              >
                <span className="relative inline-block">
                  {/* Animated gradient overlay */}
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                    animate={{
                      opacity: [0.4, 0.7, 0.4],
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{
                      backgroundSize: '200% 200%'
                    }}
                  >
                    Hi, I'm BALAMURUGAN
                  </motion.span>
                  {/* Main text */}
                  <span className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                    Hi, I'm BALAMURUGAN
                  </span>
                </span>
              </motion.h1>

              {/* Subtitle with typewriter effect */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-700 tracking-wide min-h-[1.5em]"
              >
                <span className="inline-block">
                  I'm a{' '}
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      {typewriterText}
                    </span>
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                      className="inline-block w-0.5 h-[1em] bg-gradient-to-b from-blue-600 to-purple-600 ml-1"
                    />
                  </span>
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
              >
                Crafting exceptional digital experiences with modern web technologies. 
                Specialized in building scalable, performant applications that users love.
              </motion.p>

              {/* Tech Stack Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-4"
              >
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1.5 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-xs sm:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200"
                  >
                    {tech}
                  </motion.div>
                ))}
              </motion.div>

              {/* Feature badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-6"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                    whileHover={{ scale: 1.08, y: -4 }}
                    className="relative flex items-center space-x-2 px-5 py-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl hover:border-transparent transition-all duration-300 cursor-pointer group overflow-hidden shadow-md hover:shadow-xl"
                  >
                    {/* Animated gradient background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      initial={false}
                    />
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0`}
                      animate={{
                        opacity: [0, 0.1, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear"
                      }}
                    />
                    <feature.icon className="relative z-10 h-5 w-5 text-gray-600 group-hover:text-white transition-colors" />
                    <span className="relative z-10 text-sm font-semibold text-gray-700 group-hover:text-white transition-colors whitespace-nowrap">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="pt-8 sm:pt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={scrollToAbout}
                  className="group inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-4 rounded-2xl text-base sm:text-lg font-semibold hover:from-gray-800 hover:to-gray-700 transition-all duration-300 shadow-xl hover:shadow-2xl w-full sm:w-auto"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  href="/BALAMURUGAN_M_august_2025.pdf"
                  download
                  className="group inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl text-base sm:text-lg font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-2xl w-full sm:w-auto"
                >
                  <Download className="h-5 w-5 group-hover:animate-bounce" />
                  <span>Download Resume</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  href={process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center space-x-2 bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl text-base sm:text-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
                >
                  <span>Book a Call</span>
                  <ExternalLink className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex justify-center gap-4 pt-6"
              >
                {[
                  { icon: Github, href: "https://github.com", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:contact@example.com", label: "Email" }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -3, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl text-gray-600 hover:text-blue-600 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-pointer group relative"
            onClick={scrollToAbout}
          >
            {/* Animated progress ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-blue-300/50"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center space-y-2 relative z-10 p-4 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg hover:shadow-xl transition-all"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <ChevronDown className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600 group-hover:text-purple-600 transition-colors" />
              </motion.div>
              <span className="text-xs font-semibold text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                Scroll
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
