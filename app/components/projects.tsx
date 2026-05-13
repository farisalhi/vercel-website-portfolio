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

  return (
    <div className="grid gap-3">
      {projects.map((project) => (
          <Link
            key={project.slug}
            className="soft-lift group block rounded-md border border-neutral-200/80 bg-white/65 p-4 hover:border-teal-700/30 hover:bg-white hover:shadow-[0_18px_60px_-48px_rgba(15,23,42,0.65)] dark:border-neutral-800 dark:bg-neutral-900/55 dark:hover:border-teal-300/30 dark:hover:bg-neutral-900"
            href={`/projects/${project.slug}`}
          >
            <article className="grid gap-3 sm:grid-cols-[8rem_1fr_auto] sm:items-start">
              <p className="font-mono text-xs text-neutral-500 dark:text-neutral-500">
                {formatDate(project.metadata.publishedAt, false)}
              </p>
              <div>
                <h2 className="font-medium text-neutral-950 transition-colors group-hover:text-teal-700 dark:text-neutral-50 dark:group-hover:text-teal-300">
                  {project.metadata.title}
                </h2>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                  {project.metadata.summary}
                </p>
              </div>
              {project.metadata.languages && (
                <span className="w-fit rounded-md border border-neutral-200 px-2.5 py-1 font-mono text-[11px] text-neutral-600 transition-colors group-hover:border-teal-700/30 group-hover:text-teal-700 dark:border-neutral-700 dark:text-neutral-400 dark:group-hover:border-teal-300/30 dark:group-hover:text-teal-300">
                  {project.metadata.languages}
                </span>
              )}
            </article>
          </Link>
        ))}
    </div>
  )
}

