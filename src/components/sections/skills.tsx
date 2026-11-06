"use client"

import { motion } from 'framer-motion'
import { Layout, Server, Database, Wrench } from 'lucide-react'

const skillGroups = [
  {
    category: "Frontend Engineering",
    icon: Layout,
    description: "Responsive, accessible, and high-performance interfaces.",
    skills: ["React.js", "Next.js 15", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3"]
  },
  {
    category: "Backend & Systems",
    icon: Server,
    description: "Robust servers, business logic, and real-time APIs.",
    skills: ["Node.js", "Express.js", "RESTful APIs", "WebSockets", "Authentication & JWT", "Axios"]
  },
  {
    category: "Database & Modeling",
    icon: Database,
    description: "Scalable data schemas, indexing, and persistent storage.",
    skills: ["MongoDB", "Mongoose", "CRUD Operations", "Schema Design", "MySQL"]
  },
  {
    category: "Tools & DevOps",
    icon: Wrench,
    description: "Version control, API testing, and deployment pipelines.",
    skills: ["Git", "GitHub", "Vercel", "Postman", "npm/yarn", "VS Code"]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-zinc-50/70 border-y border-zinc-200/60 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
          <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
            Tools & technologies I use to build.
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            Focused on the modern MERN ecosystem with clean architecture and developer experience.
          </p>
        </div>

        {/* 4 Clean Categorized Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, index) => {
            const Icon = group.icon
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200/80 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all space-y-5"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900 border border-zinc-200/60">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900">{group.category}</h3>
                    <p className="text-xs text-zinc-500">{group.description}</p>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-zinc-50 text-zinc-700 border border-zinc-200/80 hover:bg-zinc-100 hover:text-zinc-900 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
