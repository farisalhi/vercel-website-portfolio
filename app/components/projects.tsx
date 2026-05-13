import Link from 'next/link'
import { formatDate, getProjects } from 'app/projects/utils'

type ProjectsProps = {
  limit?: number
}

export function Projects({ limit }: ProjectsProps) {
  let allProjects = getProjects()
  let projects = allProjects.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1
    }
    return 1
  })

  if (limit) {
    projects = projects.slice(0, limit)
  }

  const rotations = ['-rotate-[0.7deg]', 'rotate-[1.1deg]', '-rotate-[1.4deg]', 'rotate-[0.6deg]']
  const swatches = [
    'bg-white dark:bg-neutral-950',
    'bg-yellow-200 dark:bg-neutral-950',
    'bg-cyan-200 dark:bg-neutral-950',
    'bg-pink-100 dark:bg-neutral-950',
  ]

  return (
    <div className="grid gap-5">
      {projects.map((project, index) => (
          <Link
            key={project.slug}
            className={`anti-card soft-lift group block p-4 transition-transform hover:-translate-y-1 hover:rotate-0 ${
              rotations[index % rotations.length]
            } ${swatches[index % swatches.length]}`}
            href={`/projects/${project.slug}`}
          >
            <article className="grid gap-4 sm:grid-cols-[7.5rem_1fr_auto] sm:items-start">
              <p className="w-fit border-2 border-neutral-950 bg-neutral-950 px-2 py-1 font-mono text-xs font-black uppercase text-yellow-200 dark:border-yellow-200 dark:bg-yellow-200 dark:text-neutral-950">
                {formatDate(project.metadata.publishedAt, false)}
              </p>
              <div>
                <h2 className="text-xl font-black uppercase leading-6 text-neutral-950 transition-colors group-hover:text-pink-700 dark:text-neutral-50 dark:group-hover:text-yellow-200">
                  {project.metadata.title}
                </h2>
                <p className="mt-2 max-w-2xl text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-300">
                  {project.metadata.summary}
                </p>
              </div>
              {project.metadata.languages && (
                <span className="w-fit rotate-2 border-2 border-neutral-950 bg-pink-500 px-2.5 py-1 font-mono text-[11px] font-black uppercase text-white transition-colors group-hover:bg-yellow-300 group-hover:text-neutral-950 dark:border-yellow-200 dark:bg-cyan-300 dark:text-neutral-950">
                  {project.metadata.languages}
                </span>
              )}
            </article>
          </Link>
        ))}
    </div>
  )
}
