import Navbar from '@/components/common/navbar'
import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Projects from '@/components/sections/projects'
import Skills from '@/components/sections/skills'
import HowIWork from '@/components/sections/how-i-work'
import Contact from '@/components/sections/contact'
import Footer from '@/components/common/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <HowIWork />
      <Contact />
      <Footer />
    </main>
  )
}
