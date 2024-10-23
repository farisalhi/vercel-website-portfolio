import { Projects } from 'app/components/projects'

export const metadata = {
  title: 'Projects',
  description: 'My Projects.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8">my projects</h1>
      <Projects />
    </section>
  )
}
