export default function Footer() {
  return (
    <footer className="mt-auto border-t border-neutral-200/70 py-8 text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>
          Built with{' '}
          <strong className="font-medium text-neutral-800 dark:text-neutral-200">
            Next.js
          </strong>
          , Tailwind CSS, and Vercel.
        </p>
        <ul className="flex gap-4">
          <li>
            <a
              className="transition-colors hover:text-neutral-950 dark:hover:text-neutral-50"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/farisalhi"
            >
              github
            </a>
          </li>
          <li>
            <a
              className="transition-colors hover:text-neutral-950 dark:hover:text-neutral-50"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/farisalhi/"
            >
              linkedin
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
