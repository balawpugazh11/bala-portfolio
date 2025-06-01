"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { GraduationCap, Briefcase, Code, ChevronDown, ChevronUp, Award } from 'lucide-react'
import { useState } from "react"
import { Badge } from "@/components/ui/badge"

interface TimelineItemProps {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  technologies: string[];
  icon?: React.ReactNode;
}

const TimelineItem = ({
  title,
  company,
  location,
  startDate,
  endDate,
  description,
  achievements,
  technologies,
  icon
}: TimelineItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 pb-8 border-l-2 border-primary/20 last:border-0 last:pb-0"
    >
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
      <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-col gap-2">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-primary">{title}</h3>
              <p className="text-sm text-muted-foreground">{company}</p>
            </div>
            <div className="text-sm text-muted-foreground">
              {startDate} - {endDate}
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{location}</p>
          <p className="text-sm mt-2">{description}</p>
          
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          )}

          {achievements.length > 0 && (
            <div className="mt-4">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    Hide Achievements
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    Show Achievements
                  </>
                )}
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: isExpanded ? "auto" : 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="text-muted-foreground">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Timeline() {
  const education = [
    {
      title: "Master of Computer Applications",
      company: "Dr.G.R Damodaran College of Science",
      location: "Coimbatore, India",
      startDate: "2023",
      endDate: "2025",
      description: "Specialized in Advanced Computer Applications with focus on modern technologies and software development.",
      achievements: [
        "Specialized in Advanced Computer Applications",
        "Active member of the Computer Science Club",
        "Participated in various technical symposiums",
        "Maintaining a CGPA of 8.1/10"
      ],
      technologies: ["Data Structures", "Algorithms", "Machine Learning", "Cloud Computing"]
    },
    {
      title: "PG Diploma in Robotics",
      company: "Dr.G.R Damodaran College of Science",
      location: "Coimbatore, India",
      startDate: "2023",
      endDate: "2025",
      description: "Comprehensive study of robotics, AI, and IoT systems with hands-on project experience.",
      achievements: [
        "Hands-on experience with robotic systems",
        "Developed autonomous navigation systems",
        "Participated in robotics competitions",
        "Implemented IoT solutions for automation"
      ],
      technologies: ["Robotics", "AI", "IoT", "Python"]
    },
    {
      title: "Bachelor of Computer Applications",
      company: "Sri Krishna Adithya College of Arts and Science",
      location: "Coimbatore, India",
      startDate: "2020",
      endDate: "2023",
      description: "Comprehensive study of computer applications with focus on software development and web technologies.",
      achievements: [
        "Graduated with First Class",
        "Active participant in coding competitions",
        "Member of the Technical Club",
        "Maintained a CGPA of 8.3/10"
      ],
      technologies: ["Web Development", "Database Management", "Programming", "Networking"]
    }
  ];

  const experience = [
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      location: "Chennai, India",
      startDate: "Jan 2024",
      endDate: "Present",
      description: "Building responsive and visually appealing websites using modern web technologies. Delivering high-quality solutions for clients while maintaining best practices in web development.",
      achievements: [
        "Successfully delivered 5+ client projects",
        "Maintained 100% client satisfaction rate",
        "Reduced website load time by 40% through optimization",
        "Implemented responsive designs for all projects"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"]
    },
    {
      title: "Web Development Intern",
      company: "Tech Solutions",
      location: "Chennai, India",
      startDate: "Jun 2023",
      endDate: "Dec 2023",
      description: "Worked on various web development projects, implementing modern features and ensuring optimal performance. Collaborated with team members to deliver high-quality solutions.",
      achievements: [
        "Developed and maintained multiple client websites",
        "Implemented responsive designs and animations",
        "Optimized website performance and SEO",
        "Collaborated with design and backend teams"
      ],
      technologies: ["React", "JavaScript", "CSS", "Git", "REST APIs"]
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Education & Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A chronological overview of my educational background and professional experience, showcasing my growth and achievements in the field of technology.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education
              </h3>
              <div className="space-y-8">
                {education.map((item, index) => (
                  <TimelineItem
                    key={index}
                    title={item.title}
                    company={item.company}
                    location={item.location}
                    startDate={item.startDate}
                    endDate={item.endDate}
                    description={item.description}
                    achievements={item.achievements}
                    technologies={item.technologies}
                    icon={<GraduationCap className="w-4 h-4" />}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Experience
              </h3>
              <div className="space-y-8">
                {experience.map((item, index) => (
                  <TimelineItem
                    key={index}
                    title={item.title}
                    company={item.company}
                    location={item.location}
                    startDate={item.startDate}
                    endDate={item.endDate}
                    description={item.description}
                    achievements={item.achievements}
                    technologies={item.technologies}
                    icon={<Briefcase className="w-4 h-4" />}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

