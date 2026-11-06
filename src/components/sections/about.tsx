"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, GraduationCap, CheckCircle2 } from 'lucide-react'

const education = [
  {
    period: "2023 — 2025",
    degree: "Master of Computer Applications (MCA)",
    institution: "GRD College of Science, Coimbatore",
    score: "CGPA: 8.1 / 10",
    summary: "Advanced software engineering, database systems, and full-stack development."
  },
  {
    period: "2020 — 2023",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Sri Krishna Adithya College of Arts & Science, Coimbatore",
    score: "CGPA: 8.3 / 10",
    summary: "Core computer science fundamentals, data structures, and web technologies."
  }
]

const highlights = [
  "Production-ready MERN & Next.js architectures with clean code",
  "Real-time applications using WebSockets & secure REST APIs",
  "Schema design, indexing, and aggregation pipelines with MongoDB",
  "Performance-conscious frontend styling with Tailwind CSS & Framer Motion"
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full border border-zinc-200">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
            Passionate about building software that matters.
          </h2>
        </div>

        {/* Top Grid: Profile & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Profile Photo Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200/80 shadow-md">
              <Image
                src="/images/profile/about-profile.jpeg"
                alt="Balamurugan - Full Stack Developer"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
              
              {/* Location Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-white/40 shadow-sm text-xs font-medium text-zinc-800">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Cuddalore, India • Open to Remote & Relocation</span>
              </div>
            </div>
          </motion.div>

          {/* Bio & Key Attributes (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
              <p>
                I am a dedicated <strong className="text-zinc-900">Full-Stack MERN Developer</strong> with a strong foundation in building modern, scalable web applications. My work balances elegant user experience on the frontend with resilient, secure logic on the backend.
              </p>
              <p>
                From architecting full-stack e-commerce clones and authentication systems to deploying real-time utility apps, I enjoy solving engineering challenges from initial schema design to final cloud deployment.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/70 text-center">
                <div className="text-2xl font-bold text-zinc-900">10+</div>
                <div className="text-xs text-zinc-500 font-medium">Projects Built</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/70 text-center">
                <div className="text-2xl font-bold text-zinc-900">8.1</div>
                <div className="text-xs text-zinc-500 font-medium">MCA CGPA</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/70 text-center">
                <div className="text-2xl font-bold text-zinc-900">8.3</div>
                <div className="text-xs text-zinc-500 font-medium">BCA CGPA</div>
              </div>
            </div>

            {/* Core Competencies Checklist */}
            <div className="space-y-2.5 pt-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </motion.div>
        </div>

        {/* Education Timeline */}
        <div className="mt-20 pt-16 border-t border-zinc-100">
          <div className="flex items-center gap-2 mb-8 justify-center">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              Education & Academic Background
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((item, idx) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-zinc-50/70 border border-zinc-200/80 space-y-3"
              >
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                    {item.period}
                  </span>
                  <span className="text-zinc-500">{item.score}</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-zinc-900">{item.degree}</h4>
                  <p className="text-xs text-zinc-500">{item.institution}</p>
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {item.summary}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
