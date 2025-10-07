"use client"

import { motion } from 'framer-motion'
import { Lightbulb, Workflow, Rocket, Shield } from 'lucide-react'

export default function HowIWork() {
  const steps = [
    { icon: Lightbulb, title: 'Understand & Define', text: 'Clarify goals, constraints, and success metrics before writing code.' },
    { icon: Workflow, title: 'Design First', text: 'Simple, modular architectures with a focus on DX and testability.' },
    { icon: Rocket, title: 'Iterate Fast', text: 'Ship small increments, measure impact, and refine based on feedback.' },
    { icon: Shield, title: 'Quality & Reliability', text: 'Type-safety, linting, accessibility, and performance budgets by default.' }
  ]

  return (
    <section id="approach" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight">How I Solve Problems</h2>
          <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">A pragmatic, outcome-driven approach that balances speed with long-term maintainability.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-4">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


