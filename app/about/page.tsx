export default function About() {
  return (
    <section className="max-w-3xl">
      <p className="terminal-line font-mono text-sm text-neutral-500 dark:text-neutral-500">
        cat about.md
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-normal text-neutral-950 dark:text-neutral-50">
        Practical software, secure systems, and thoughtful execution.
      </h1>
      <p className="mt-6 text-lg leading-8 text-neutral-700 dark:text-neutral-300">
        I am a computer science graduate from the University of Calgary with
        experience in software engineering and team leadership. I like building
        reliable applications, interactive systems, and networked software with
        a strong eye toward security, testing, and maintainability.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {['Secure code', 'Team delivery', 'Networked apps'].map((item) => (
          <div
            key={item}
            className="soft-lift rounded-md border border-neutral-200/80 bg-white/65 p-4 font-mono text-sm text-neutral-800 hover:border-teal-700/30 hover:bg-white dark:border-neutral-800 dark:bg-neutral-900/55 dark:text-neutral-200 dark:hover:border-teal-300/30 dark:hover:bg-neutral-900"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
