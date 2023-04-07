import Hero from '@/components/Hero'
import MySkills from '@/components/MySkills'
import RecentWork from '@/components/RecentWork'
import AboutMe from '@/components/AboutMe'
import projects from '@/data/projects.json'

export default function Home() {
  return (
    <main className="flex flex-col items-start gap-28">
      <Hero />
      <MySkills />
      <RecentWork projects={projects} />
      <AboutMe />
    </main>
  )
}
