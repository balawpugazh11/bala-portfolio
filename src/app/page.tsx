import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'
import Projects from '@/components/Projects/Projects'
import Skills from '@/components/Skills/Skills'
import Testimonials from '@/components/Testimonials/Testimonials'
import Blog from '@/components/Blog/Blog'
import Contact from '@/components/Contact/Contact'
import Navbar from '@/components/Navbar/Navbar'
import HowIWork from '@/components/HowIWork/HowIWork'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <HowIWork />
      <Testimonials />
      <Blog />
      <Contact />
    </main>
  )
}