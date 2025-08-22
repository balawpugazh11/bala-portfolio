"use client"

import { motion } from 'framer-motion'
import { Progress } from '@/components/ui/progress'
import { useState } from 'react'
import { 
  Code, 
  Database, 
  Cloud, 
  Palette, 
  Zap, 
  TrendingUp,
  Award,
  Terminal,
  Server,
  Globe,
  Smartphone,
  Layers,
  Cpu,
  Sparkles,
  Rocket,
  BookOpen,
  Target,
  Star
} from 'lucide-react'

const skills = [
  { name: "React.js", percentage: 95, icon: Code, color: "bg-blue-500", level: "Expert", projects: 8 },
  { name: "Node.js", percentage: 90, icon: Server, color: "bg-green-500", level: "Advanced", projects: 6 },
  { name: "Express.js", percentage: 88, icon: Server, color: "bg-gray-600", level: "Advanced", projects: 5 },
  { name: "MongoDB", percentage: 85, icon: Database, color: "bg-green-600", level: "Advanced", projects: 4 },
  { name: "MySQL", percentage: 80, icon: Database, color: "bg-blue-700", level: "Intermediate", projects: 3 },
  { name: "HTML5/CSS3", percentage: 95, icon: Palette, color: "bg-orange-500", level: "Expert", projects: 10 },
  { name: "JavaScript (ES6+)", percentage: 92, icon: Code, color: "bg-yellow-500", level: "Expert", projects: 9 },
  { name: "Tailwind CSS", percentage: 90, icon: Palette, color: "bg-cyan-500", level: "Advanced", projects: 7 },
  { name: "Git/GitHub", percentage: 88, icon: Terminal, color: "bg-orange-600", level: "Advanced", projects: 8 },
  { name: "REST APIs", percentage: 85, icon: Server, color: "bg-purple-500", level: "Advanced", projects: 6 }
]

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Palette,
    color: "bg-blue-500",
    skills: ["React.js (Vite)", "HTML5", "CSS3", "JavaScript (ES6+)", "Tailwind CSS", "Redux"],
    description: "Creating responsive and user-friendly interfaces with modern frameworks",
    projects: 8
  },
  {
    title: "Backend Development", 
    icon: Server,
    color: "bg-green-500",
    skills: ["Node.js", "Express.js", "Firebase", "REST APIs", "Authentication & Authorization"],
    description: "Building robust server-side applications and APIs",
    projects: 6
  },
  {
    title: "Database & Cloud",
    icon: Database,
    color: "bg-purple-500",
    skills: ["MongoDB (CRUD, Schema Design)", "MySQL", "Firebase", "Vercel", "Netlify"],
    description: "Managing data and deploying applications in the cloud",
    projects: 5
  },
  {
    title: "Tools & Others",
    icon: Zap,
    color: "bg-orange-500",
    skills: ["Git", "GitHub", "VS Code", "Problem Solving", "Real-time App Development"],
    description: "Essential tools and methodologies for modern development",
    projects: 7
  }
]

const learningGoals = [
  { skill: "TypeScript", progress: 70, target: 90, icon: Code, color: "bg-blue-600" },
  { skill: "Next.js", progress: 65, target: 85, icon: TrendingUp, color: "bg-black" },
  { skill: "Docker", progress: 50, target: 80, icon: Cloud, color: "bg-blue-500" },
  { skill: "AWS", progress: 60, target: 85, icon: Cloud, color: "bg-orange-500" }
]

const achievements = [
  { title: "Live Projects", count: 10, icon: Rocket, color: "bg-green-500" },
  { title: "Technologies", count: 13, icon: Layers, color: "bg-blue-500" },
  { title: "GitHub Stars", count: 15, icon: Star, color: "bg-yellow-500" },
  { title: "Deployments", count: 9, icon: Globe, color: "bg-purple-500" }
]

export default function AppleSkills() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <section id="skills" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-20 left-10 opacity-20"
      >
        <Sparkles className="h-8 w-8 text-blue-400" />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-40 right-20 opacity-20"
      >
        <Sparkles className="h-6 w-6 text-purple-400" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 mb-6"
          >
            <Target className="h-8 w-8 text-blue-500" />
            <span className="text-blue-500 font-semibold">SKILLS & EXPERTISE</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-black tracking-tight mb-6">
            Technical Arsenal
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks that enable me to 
            build exceptional full-stack applications with modern best practices.
          </p>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                <achievement.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-black">{achievement.count}+</div>
              <div className="text-gray-600 text-sm">{achievement.title}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Enhanced Skills Progress */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-black mb-8 flex items-center space-x-3">
              <Code className="h-8 w-8 text-blue-500" />
              <span>Technical Proficiency</span>
            </h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
                  className="space-y-3 cursor-pointer p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${skill.color} shadow-lg`}>
                        <skill.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <span className="text-lg font-semibold text-black">
                          {skill.name}
                        </span>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                            {skill.level}
                          </span>
                          <span className="text-xs text-gray-500">
                            {skill.projects} projects
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xl font-bold text-gray-700">
                      {skill.percentage}%
                    </span>
                  </div>
                  <Progress 
                    value={skill.percentage} 
                    className="h-3 bg-gray-200 rounded-full overflow-hidden"
                  />
                  {selectedSkill === skill.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100"
                    >
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Advanced proficiency in {skill.name} with extensive experience in real-world projects, 
                        live deployments, and continuous learning to stay current with latest features and best practices.
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Skills Categories */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-black mb-8 flex items-center space-x-3">
              <Layers className="h-8 w-8 text-green-500" />
              <span>Areas of Expertise</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  onClick={() => setSelectedCategory(selectedCategory === category.title ? null : category.title)}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-gray-200"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-10 h-10 ${category.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <category.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-black">
                        {category.title}
                      </h4>
                      <span className="text-sm text-gray-500">{category.projects} projects</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium hover:bg-gray-200 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  {selectedCategory === category.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-100"
                    >
                      <p className="text-xs text-gray-600">
                        Specialized in {category.title.toLowerCase()} with hands-on experience in all listed technologies.
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Enhanced Learning Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 mb-4"
            >
              <BookOpen className="h-8 w-8 text-purple-500" />
              <span className="text-purple-500 font-semibold">CONTINUOUS LEARNING</span>
            </motion.div>
            <h3 className="text-3xl font-bold text-black mb-4">
              Currently Learning
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I'm constantly expanding my skill set and staying up-to-date with the latest 
              technologies and best practices in web development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningGoals.map((goal, index) => (
              <motion.div
                key={goal.skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 ${goal.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <goal.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-black">{goal.skill}</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 font-medium">Progress</span>
                    <span className="font-bold text-gray-700">{goal.progress}%</span>
                  </div>
                  <Progress value={goal.progress} className="h-3 bg-gray-200" />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Target: {goal.target}%</span>
                    <span className="font-medium">{goal.target - goal.progress}% to go</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 shadow-lg border border-blue-100">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Award className="h-10 w-10 text-yellow-500" />
              <h3 className="text-3xl font-bold text-black">
                Always Learning
              </h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto text-center">
              I believe in continuous learning and staying ahead of industry trends. 
              Every project is an opportunity to grow and improve my skills. 
              I'm passionate about exploring new technologies and applying them to create better solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
