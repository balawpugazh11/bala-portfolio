"use client"

import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 bg-white border-t border-zinc-200/80 text-zinc-600 text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand / Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-bold text-zinc-900">Balamurugan</span>
          <span className="hidden sm:inline text-zinc-300">•</span>
          <span>© {new Date().getFullYear()} All rights reserved.</span>
        </div>

        {/* Links + Back to top */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/balawpugazh11"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 transition-colors flex items-center gap-1.5"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/balawmuruganm/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:balawpugazh11@gmail.com"
            className="hover:text-zinc-900 transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-zinc-100 hover:bg-zinc-200/80 text-zinc-700 hover:text-zinc-900 transition-colors ml-2"
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  )
}

