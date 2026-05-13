export default function About() {
  return (
    <section className="anti-shell relative max-w-4xl overflow-hidden px-4 py-8 sm:px-8">
      <p className="anti-label">
        cat about.md
      </p>
      <h1 className="anti-title mt-5 max-w-3xl text-5xl text-neutral-950 dark:text-neutral-50 sm:text-7xl">
        Practical software, secure systems, and thoughtful execution.
      </h1>
      <p className="mt-7 max-w-3xl rotate-[-0.8deg] border-l-8 border-cyan-400 bg-white/85 p-4 text-lg font-semibold leading-8 text-neutral-900 shadow-[8px_8px_0_rgba(255,64,129,0.8)] dark:border-yellow-300 dark:bg-neutral-950/85 dark:text-neutral-100">
        I am a computer science graduate from the University of Calgary with
        experience in software engineering and team leadership. I like building
        reliable applications, interactive systems, and networked software with
        a strong eye toward security, testing, and maintainability.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {['Secure code', 'Team delivery', 'Networked apps'].map((item) => (
          <div
            key={item}
            className="anti-card soft-lift p-4 font-mono text-sm font-black uppercase text-neutral-950 even:rotate-2 odd:-rotate-1 dark:text-neutral-100"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
