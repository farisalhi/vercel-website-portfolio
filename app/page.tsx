import Image from 'next/image'
import Link from 'next/link'
import { AgeCounter } from 'app/components/age-counter'
import { Projects } from 'app/components/projects'

const birthDate =
  process.env.NEXT_PUBLIC_BIRTH_DATE_ISO ?? '2002-05-26T00:00:00-06:00'

export default function Page() {
  return (
    <div className="space-y-16 sm:space-y-20">
      <section className="grid items-end gap-10 md:grid-cols-[1fr_18rem]">
        <div className="max-w-3xl">
          <p className="terminal-line mb-5 font-mono text-sm text-neutral-600 dark:text-neutral-400">
            whoami
          </p>
          <h1 className="text-5xl font-semibold tracking-normal text-neutral-950 dark:text-neutral-50 sm:text-6xl">
            Faris Salhi
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-neutral-700 dark:text-neutral-300">
            Computer science graduate building practical, reliable software with
            a focus on secure systems, networked applications, and thoughtful
            user experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="soft-lift rounded-md bg-neutral-950 px-5 py-2.5 font-mono text-sm text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-neutral-300"
            >
              ./projects
            </Link>
            <Link
              href="/Resume (Faris Salhi).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="soft-lift rounded-md border border-neutral-300 px-5 py-2.5 font-mono text-sm text-neutral-800 hover:border-teal-700/30 hover:bg-white dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-teal-300/30 dark:hover:bg-neutral-900"
            >
              resume.pdf
            </Link>
            <a
              href="mailto:faris1.salhi@gmail.com"
              className="motion-link px-1 py-2.5 font-mono text-sm text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50"
            >
              contact
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl gap-4">
            <div className="terminal-frame rounded-md p-4 font-mono text-sm text-neutral-700 dark:text-neutral-300">
              <div className="mb-4 flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-teal-400/70" />
              </div>
              <p className="terminal-line">cat focus.txt</p>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                Build carefully. Ship cleanly. Keep the system understandable.
                <span className="terminal-cursor" />
              </p>
            </div>
            <AgeCounter birthDate={birthDate} />
          </div>
        </div>
        <div className="relative w-full max-w-72 justify-self-start md:justify-self-end">
          <div className="soft-lift aspect-[4/5] overflow-hidden rounded-md border border-neutral-200 bg-neutral-100 shadow-[0_24px_80px_-56px_rgba(15,23,42,0.7)] dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-[0_24px_80px_-56px_rgba(20,184,166,0.35)]">
            <Image
              src="/Faris.jpg"
              alt="Faris Salhi"
              width={576}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="grid gap-4 border-y border-neutral-200/70 py-10 dark:border-neutral-800 md:grid-cols-3">
        <div className="soft-lift rounded-md border border-transparent p-3 hover:border-neutral-200 hover:bg-white/70 dark:hover:border-neutral-800 dark:hover:bg-neutral-900/55">
          <p className="font-mono text-xs text-neutral-500 dark:text-neutral-500">
            Current focus
          </p>
          <p className="mt-2 font-medium text-neutral-950 dark:text-neutral-50">
            Secure, scalable applications
          </p>
        </div>
        <div className="soft-lift rounded-md border border-transparent p-3 hover:border-neutral-200 hover:bg-white/70 dark:hover:border-neutral-800 dark:hover:bg-neutral-900/55">
          <p className="font-mono text-xs text-neutral-500 dark:text-neutral-500">
            Background
          </p>
          <p className="mt-2 font-medium text-neutral-950 dark:text-neutral-50">
            BSc Computer Science, University of Calgary
          </p>
        </div>
        <div className="soft-lift rounded-md border border-transparent p-3 hover:border-neutral-200 hover:bg-white/70 dark:hover:border-neutral-800 dark:hover:bg-neutral-900/55">
          <p className="font-mono text-xs text-neutral-500 dark:text-neutral-500">
            Strengths
          </p>
          <p className="mt-2 font-medium text-neutral-950 dark:text-neutral-50">
            Leadership, problem solving, and delivery
          </p>
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="terminal-line font-mono text-sm text-neutral-500 dark:text-neutral-500">
              ls ./selected-work
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-neutral-950 dark:text-neutral-50">
              Recent projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="motion-link hidden font-mono text-sm text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50 sm:block"
          >
            view all
          </Link>
        </div>
        <Projects limit={4} />
      </section>
    </div>
  )
}
