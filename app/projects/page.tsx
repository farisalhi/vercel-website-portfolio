import { Projects } from 'app/components/projects'

export const metadata = {
  title: 'Projects',
  description: 'My Projects.',
}

export default function Page() {
  return (
    <section>
      <div className="mb-10 max-w-2xl">
        <p className="terminal-line font-mono text-sm text-neutral-500 dark:text-neutral-500">
          ls ./projects
        </p>
        <h1 className="mt-2 text-4xl font-semibold text-neutral-950 dark:text-neutral-50">
          Projects
        </h1>
        <p className="mt-4 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
          A collection of software, systems, and creative technical projects.
        </p>
      </div>
      <Projects />
    </section>
  )
}
