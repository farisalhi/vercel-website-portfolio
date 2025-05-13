import Link from 'next/link'
import { formatDate, getProjects } from 'app/projects/utils'

export function Projects() {
  let allProjects = getProjects()

  return (
    <div className="flex flex-col gap-4">
      {allProjects
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1
          }
          return 1
        })
        .map((project) => (
          <Link
            key={project.slug}
            className="block"
            href={`/projects/${project.slug}`}
          >
            <div className="w-full flex flex-col bg-neutral-200 dark:bg-neutral-800 rounded-md p-4 
              group hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-transform">
              <div className="flex flex-col sm:flex-row gap-2">
                <p className="text-sm text-neutral-500 dark:text-neutral-400 min-w-[120px]">
                  {formatDate(project.metadata.publishedAt, false)}
                </p>
                <p className="ml-10 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 
                  dark:group-hover:text-neutral-100 flex-grow">
                  {project.metadata.title}
                </p>
                {project.metadata.languages && (
                  <div className="sm:self-end mt-2 sm:mt-0">
                    <span className="inline-block rounded-3xl bg-neutral-300 dark:bg-neutral-700 
                      text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 px-3 py-1 text-sm group-hover:bg-neutral-200 dark:group-hover:bg-neutral-600">
                      {project.metadata.languages}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}

