import { Projects } from 'app/components/projects'

export const metadata = {
  title: 'Projects',
  description: 'My Projects.',
}

export default function Page() {
  return (
    <section>
      <div className="reveal-block mb-10 max-w-2xl">
        <p className="eyebrow">Projects</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.02em] text-neutral-950 dark:text-neutral-50 sm:text-5xl">
          Projects
        </h1>
        <p className="mt-5 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
          A collection of software, systems, and creative technical projects.
        </p>
      </div>
      <div className="reveal-block reveal-delay-1">
        <Projects />
      </div>
    </section>
  )
}
