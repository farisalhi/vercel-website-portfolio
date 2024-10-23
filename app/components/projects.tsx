import Link from 'next/link'
import { formatDate, getProjects } from 'app/blog/utils'

export function Projects() {
  let allProjects = getProjects()

  return (
    <div>
      {allProjects
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((project) => (
          <Link
            key={project.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${project.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 bg-neutral-100 dark:border-neutral-950 dark:bg-neutral-800 rounded-lg p-4 group hover:bg-neutral-200  dark:hover:text-neutral-100 dark:hover:bg-neutral-700">
              <p className="text-neutral-500 dark:text-neutral-400 w-[200px] tabular-nums ">
                {formatDate(project.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 tracking-normal group-hover:text-neutral-900 dark:group-hover:text-neutral-100">
                {project.metadata.title}
              </p>
              {project.metadata.languages && (
                <div className="ml-auto">
                  <p className={"rounded-3xl bg-neutral-200 text-neutral-500  dark:bg-neutral-700 dark:text-neutral-300 p-0.5 pl-2 pr-2 text-right text-sm group-hover:bg-neutral-100 dark:group-hover:bg-neutral-600"}>
                  {project.metadata.languages}
                  </p>
                </div>
              )}
            </div>
          </Link>
        ))}
    </div>
  )
}

