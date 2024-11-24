"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      href: "https://github.com/yourusername",
      label: "GitHub Profile",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn Profile",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      href: "mailto:your.email@example.com",
      label: "Email Contact",
    },
  ]

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Brand */}
          <motion.div 
            className="text-center md:text-left"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Balamurugan M
            </h3>
            <p className="text-muted-foreground">Full Stack Developer</p>
          </motion.div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  href={link.href}
                  target="_blank"
                  className="group relative p-2 hover:text-primary transition-colors duration-300"
                  aria-label={link.label}
                >
                  <span className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.icon}
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Copyright */}
          <motion.div 
            className="text-center md:text-right text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>&copy; {currentYear} All rights reserved.</p>
          </motion.div>
        </motion.div>

        {/* Bottom Text */}
        <motion.div 
          className="mt-8 text-center flex items-center justify-center gap-2 text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>Crafted with</p>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Heart className="h-4 w-4 text-primary" />
          </motion.div>
          <p>using Next.js</p>
        </motion.div>
      </div>
    </footer>
  )
}

