import AppleHero from '@/components/AppleHero/AppleHero'
import AppleAbout from '@/components/AppleAbout/AppleAbout'
import AppleProjects from '@/components/AppleProjects/AppleProjects'
import AppleSkills from '@/components/AppleSkills/AppleSkills'
import AppleContact from '@/components/AppleContact/AppleContact'
import AppleNavbar from '@/components/AppleNavbar/AppleNavbar'
import HowIWork from '@/components/HowIWork/HowIWork'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <AppleNavbar />
      <AppleHero />
      <AppleAbout />
      <AppleProjects />
      <AppleSkills />
      <HowIWork />
      <AppleContact />
    </main>
  )
}