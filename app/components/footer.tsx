function ArrowIcon() {
  return (
    <svg
      className="ml-1 transition-transform duration-200 hover:scale-110"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="w-full mt-auto py-8">
      <ul className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4">
        <li>
          <a
            className="text-neutral-900 dark:text-neutral-100 hover:text-neutral-500 hover:underline dark:hover:underline dark:hover:text-neutral-400 transition-colors decoration-from-font hover:decoration-2 after:content-['_↗'] after:inline-block after:transition-transform after:hover:translate-x-1 after:hover:-translate-y-1"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/farisalhi"
          >
            <span className="ml-2">github</span>
          </a>
        </li>
        <li>
          <a
            className="text-neutral-900 dark:text-neutral-100 hover:text-neutral-500 hover:underline dark:hover:underline dark:hover:text-neutral-400 transition-colors decoration-from-font hover:decoration-2 after:content-['_↗'] after:inline-block after:transition-transform after:hover:translate-x-1 after:hover:-translate-y-1"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/farisalhi/"
          >
            <span className="ml-2">linkedin</span>
          </a>
        </li>
      </ul>
      <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300">
        Built with <strong>Next.js</strong> and <strong>Tailwind CSS</strong>. Deployed with <strong>Vercel.</strong>
      </p>
    </footer>
  );
}
