import { RandomGlowLink } from 'app/components/random-glow-link'
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
    <div>
      {projects.map((project) => (
          <RandomGlowLink
            key={project.slug}
            className="interactive-glow project-row group -mt-px block border-y border-neutral-200/80 py-5 first:mt-0 hover:bg-white/45 dark:border-neutral-800 dark:hover:bg-neutral-950/35 sm:px-2"
            href={`/projects/${project.slug}`}
          >
            <article className="grid gap-3 sm:grid-cols-[7.5rem_1fr_auto_auto] sm:items-start">
              <p className="font-mono text-xs text-neutral-400 dark:text-neutral-600">
                {formatDate(project.metadata.publishedAt, false)}
              </p>
              <div>
                <h2 className="font-medium text-neutral-950 transition-colors group-hover:text-orange-600 dark:text-neutral-50 dark:group-hover:text-orange-300">
                  {project.metadata.title}
                </h2>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                  {project.metadata.summary}
                </p>
              </div>
              {project.metadata.languages && (
                <span className="w-fit rounded-full bg-neutral-100 px-2.5 py-1 font-mono text-[11px] text-neutral-500 transition-colors group-hover:text-neutral-950 dark:bg-neutral-900 dark:text-neutral-500 dark:group-hover:text-neutral-200">
                  {project.metadata.languages}
                </span>
              )}
              <span
                className="hidden text-neutral-400 transition-[color,transform] duration-300 group-hover:translate-x-1 group-hover:text-orange-500 sm:block"
                aria-hidden="true"
              >
                -&gt;
              </span>
            </article>
          </RandomGlowLink>
        ))}
    </div>
  )
}
