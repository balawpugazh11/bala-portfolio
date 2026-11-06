"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Copy, Check, FileDown } from 'lucide-react'
import { toast } from 'sonner'

export default function Hero() {
  const [copied, setCopied] = useState(false)
  const email = "balawpugazh11@gmail.com"

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    toast.success("Email copied to clipboard!")
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollToProjects = () => {
    const el = document.getElementById('projects')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-[92vh] flex items-center justify-center relative overflow-hidden bg-white text-zinc-900 pt-20 pb-12">
      {/* Subtle modern dot-grid background with radial fade */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #71717a 1px, transparent 0)`,
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 60%, transparent 100%)'
        }}
      />

      {/* Subtle soft ambient glow in the center */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-100/60 via-purple-50/40 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
        
        {/* Creative Live Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-100/80 border border-zinc-200/80 text-xs sm:text-sm font-medium text-zinc-700 shadow-sm backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>Available for Full-Time Roles • India</span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
            Full-Stack Developer crafting clean, production web apps.
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto font-normal leading-relaxed">
            I’m <span className="font-semibold text-zinc-900">Balamurugan</span>. Specializing in the <span className="text-zinc-900 font-medium">MERN stack</span> (React, Node.js, Express, MongoDB) & Next.js to turn complex ideas into seamless user experiences.
          </p>
        </motion.div>

        {/* Actions Group: See Work + Resume + 1-Click Copy Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {/* Primary CTA */}
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-white text-sm sm:text-base font-medium hover:bg-zinc-800 transition-all shadow-sm hover:shadow-md active:scale-95"
          >
            <span>Explore Work</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          {/* Download Resume */}
          <a
            href="/docs/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-zinc-800 border border-zinc-200 text-sm sm:text-base font-medium hover:bg-zinc-50 transition-all shadow-sm active:scale-95"
          >
            <FileDown className="w-4 h-4 text-zinc-500" />
            <span>Resume</span>
          </a>

          {/* One-Click Copy Email */}
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-100 hover:bg-zinc-200/80 text-zinc-800 border border-zinc-200/60 text-sm sm:text-base font-medium transition-all active:scale-95"
            title="Click to copy email address"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-medium">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-zinc-500" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Quick Tech Highlights Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="pt-10 flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs sm:text-sm text-zinc-500"
        >
          <span className="flex items-center gap-1.5 font-medium text-zinc-700">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Next.js & React
          </span>
          <span className="flex items-center gap-1.5 font-medium text-zinc-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Node.js & Express
          </span>
          <span className="flex items-center gap-1.5 font-medium text-zinc-700">
            <span className="w-1.5 h-1.5 rounded-full bg-green-600" /> MongoDB
          </span>
          <span className="flex items-center gap-1.5 font-medium text-zinc-700">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500" /> Tailwind CSS
          </span>
        </motion.div>

      </div>
    </section>
  )
}
