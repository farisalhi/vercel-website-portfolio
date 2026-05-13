import Image from 'next/image'
import Link from 'next/link'
import { AgeCounter } from 'app/components/age-counter'
import { Projects } from 'app/components/projects'

const birthDate =
  process.env.NEXT_PUBLIC_BIRTH_DATE_ISO ?? '2002-05-26T00:00:00-06:00'

export default function Page() {
  return (
    <div className="space-y-20 sm:space-y-24">
      <section className="grid items-end gap-12 md:grid-cols-[1fr_16rem]">
        <div className="reveal-block">
          <p className="eyebrow mb-6">BSc. Computer Science</p>
          <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.02em] text-neutral-950 dark:text-neutral-50 sm:text-7xl">
            Faris Salhi
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-neutral-700 dark:text-neutral-300">
            BSc. Computer Science graduate building practical, reliable software with
            a focus on secure systems, networked applications, and thoughtful
            user experiences.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link
              href="/projects"
              className="minimal-action project-row"
            >
              View projects
            </Link>
            <span className="h-4 w-px bg-neutral-200 dark:bg-neutral-800" aria-hidden="true" />
            <Link
              href="/Resume (Faris Salhi).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="minimal-action project-row"
            >
              Resume
            </Link>
            <span className="h-4 w-px bg-neutral-200 dark:bg-neutral-800" aria-hidden="true" />
            <a
              href="mailto:faris1.salhi@gmail.com"
              className="minimal-action project-row"
            >
              Contact
            </a>
          </div>
          <div className="mt-12 max-w-2xl">
            <div>
              <p className="eyebrow">Focus</p>
              <p className="mt-3 font-medium leading-6 text-neutral-950 dark:text-neutral-50">
                Build carefully. Ship cleanly. Keep the system understandable.
              </p>
            </div>
          </div>
        </div>
        <div className="reveal-block reveal-delay-1 relative grid w-full max-w-64 gap-4 justify-self-start md:justify-self-end">
          <div className="image-frame aspect-[4/5] overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 shadow-[0_24px_80px_-60px_rgba(15,23,42,0.55)] dark:border-neutral-800 dark:bg-neutral-900">
            <Image
              src="/Faris.jpg"
              alt="Faris Salhi"
              width={576}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <AgeCounter birthDate={birthDate} />
        </div>
      </section>

      <section className="reveal-block reveal-delay-1 grid gap-8 border-y border-neutral-200/70 py-10 dark:border-neutral-800 md:grid-cols-3">
        <div>
          <p className="eyebrow">
            Current focus
          </p>
          <p className="mt-3 font-medium leading-6 text-neutral-950 dark:text-neutral-50">
            Secure, scalable applications
          </p>
        </div>
        <div>
          <p className="eyebrow">
            Background
          </p>
          <p className="mt-3 font-medium leading-6 text-neutral-950 dark:text-neutral-50">
            BSc Computer Science, University of Calgary
          </p>
        </div>
        <div>
          <p className="eyebrow">
            Strengths
          </p>
          <p className="mt-3 font-medium leading-6 text-neutral-950 dark:text-neutral-50">
            Leadership, problem solving, and delivery
          </p>
        </div>
      </section>

      <section className="reveal-block reveal-delay-2">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.01em] text-neutral-950 dark:text-neutral-50">
              Projects with purpose
            </h2>
          </div>
          <Link
            href="/projects"
            className="motion-link hidden font-mono text-sm text-neutral-500 hover:text-neutral-950 dark:text-neutral-500 dark:hover:text-neutral-50 sm:block"
          >
            view all
          </Link>
        </div>
        <Projects limit={4} />
      </section>
    </div>
  )
}
