export default function Footer() {
  return (
    <footer className="mt-auto border-t-2 border-neutral-950 py-8 text-sm font-bold text-neutral-800 dark:border-yellow-200 dark:text-neutral-200">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>
          Built with{' '}
          <strong className="bg-yellow-300 px-1 font-black text-neutral-950 dark:bg-pink-500 dark:text-white">
            Next.js
          </strong>
          , Tailwind CSS, and Vercel.
        </p>
        <ul className="flex gap-4">
          <li>
            <a
              className="motion-link font-mono uppercase transition-colors hover:text-pink-700 dark:hover:text-yellow-200"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/farisalhi"
            >
              github
            </a>
          </li>
          <li>
            <a
              className="motion-link font-mono uppercase transition-colors hover:text-pink-700 dark:hover:text-yellow-200"
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
