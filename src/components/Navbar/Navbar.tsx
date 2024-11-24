"use client"

import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/ThemeToggle"
import Link from "next/link"

export default function Navbar() {
  return (
    <motion.header 
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container flex h-16 items-center px-4">
        <div className="mr-4 flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold text-xl">Balamurugan M</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-6">
            <Link href="#about" className="text-foreground/60 hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-foreground/60 hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-foreground/60 hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#timeline" className="text-foreground/60 hover:text-foreground transition-colors">
              Timeline
            </Link>
            <Link href="#contact" className="text-foreground/60 hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  )
} 