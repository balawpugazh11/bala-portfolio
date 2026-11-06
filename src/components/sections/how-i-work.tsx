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
    <section id="approach" className="py-20 bg-zinc-50/50 border-t border-zinc-200/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 space-y-3">
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full border border-zinc-200">
            Work Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">How I Solve Problems</h2>
          <p className="text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto">A pragmatic, outcome-driven approach that balances speed with long-term maintainability.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-xs border border-zinc-200/80 hover:shadow-md hover:border-zinc-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 bg-zinc-900 text-white rounded-xl flex items-center justify-center mb-4">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-zinc-900 mb-2">{s.title}</h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


