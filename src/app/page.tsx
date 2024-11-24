import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/hero'
import About from '@/components/About/About'
import Projects from '@/components/Projects/projects'
import Skills from '@/components/Skills/skills'
import Timeline from '@/components/Timeline/Timeline'
import ContactForm from '@/components/ContactForm/ContactForm'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Timeline />
      <ContactForm />
      <Footer />
    </main>
  )
}