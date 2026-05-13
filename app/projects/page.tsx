import { Projects } from 'app/components/projects'

export const metadata = {
  title: 'Projects',
  description: 'My Projects.',
}

export default function Page() {
  return (
    <section>
      <div className="mb-10 max-w-2xl">
        <p className="anti-label">
          ls ./projects
        </p>
        <h1 className="anti-title mt-5 text-6xl text-neutral-950 dark:text-neutral-50 sm:text-8xl">
          Projects
        </h1>
        <p className="mt-5 rotate-[-0.7deg] border-l-8 border-pink-500 bg-white/85 p-4 text-lg font-semibold leading-8 text-neutral-900 shadow-[8px_8px_0_rgba(0,229,255,0.8)] dark:border-yellow-300 dark:bg-neutral-950/85 dark:text-neutral-100">
          A collection of software, systems, and creative technical projects.
        </p>
      </div>
      <Projects />
    </section>
  )
}
