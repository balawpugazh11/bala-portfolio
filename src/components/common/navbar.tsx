"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4 sm:pt-5 pointer-events-none">
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`pointer-events-auto flex items-center justify-between gap-6 px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 w-full max-w-4xl ${
            isScrolled
              ? 'bg-white/85 backdrop-blur-md border border-zinc-200/90 shadow-sm'
              : 'bg-white/60 backdrop-blur-sm border border-zinc-200/50'
          }`}
        >
          {/* Logo / Brand */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-sm font-bold text-zinc-900 tracking-tight hover:opacity-80 transition-opacity"
          >
            Balamurugan<span className="text-blue-600">.</span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 sm:gap-2">
            {[
              { label: 'About', id: 'about' },
              { label: 'Work', id: 'projects' },
              { label: 'Stack', id: 'skills' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Quick Contact Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-zinc-900 text-white text-xs sm:text-sm font-medium hover:bg-zinc-800 transition-all shadow-xs"
            >
              <span>Say Hello</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-1.5 text-zinc-700 hover:text-zinc-950"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-20 inset-x-4 z-40 p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-zinc-200 shadow-xl md:hidden space-y-3"
          >
            {[
              { label: 'About', id: 'about' },
              { label: 'Selected Work', id: 'projects' },
              { label: 'Tech Stack', id: 'skills' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-zinc-800 hover:bg-zinc-100 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 border-t border-zinc-100">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full text-center py-2.5 rounded-xl bg-zinc-900 text-white text-sm font-medium"
              >
                Say Hello
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
