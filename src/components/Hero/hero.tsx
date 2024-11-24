"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Balamurugan
              </span>
            </h1>
            
            <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  1000,
                  'React Developer',
                  1000,
                  'Backend Developer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl">
              I build exceptional and accessible digital experiences for the web.
            </p>

            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg border border-border hover:bg-accent transition-colors"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 rounded-lg border border-border hover:bg-accent transition-colors flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-download"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Resume
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] lg:h-[600px] order-first lg:order-last"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-full blur-3xl" />
            <Image
              src="/hero-image.jpeg" 
              alt="Hero Image"
              fill
              className="rounded-full object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

