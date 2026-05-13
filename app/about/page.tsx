export default function About() {
  return (
    <section className="reveal-block max-w-3xl">
      <p className="eyebrow">About</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.02em] text-neutral-950 dark:text-neutral-50 sm:text-5xl">
        Practical software, secure systems, and thoughtful execution.
      </h1>
      <p className="mt-6 text-lg leading-8 text-neutral-700 dark:text-neutral-300">
        I am a computer science graduate from the University of Calgary with
        experience building software and leading teams. I like building
        reliable applications, interactive systems, and networked software with
        a strong eye toward security, testing, and maintainability.
      </p>
      <div className="reveal-block reveal-delay-1 mt-12 grid gap-6 border-y border-neutral-200/80 py-8 dark:border-neutral-800 sm:grid-cols-3">
        {['Secure code', 'Team delivery', 'Networked apps'].map((item) => (
          <div
            key={item}
            className="font-mono text-sm text-neutral-700 dark:text-neutral-300"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
