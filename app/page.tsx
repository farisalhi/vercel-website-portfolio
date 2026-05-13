import Image from 'next/image'
import Link from 'next/link'
import { AgeCounter } from 'app/components/age-counter'
import { Projects } from 'app/components/projects'

const birthDate =
  process.env.NEXT_PUBLIC_BIRTH_DATE_ISO ?? '2002-05-26T00:00:00-06:00'

export default function Page() {
  return (
    <div className="space-y-14 sm:space-y-16">
      <section className="anti-shell relative grid gap-8 overflow-hidden px-4 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
        <div
          className="absolute right-0 top-8 hidden rotate-12 border-2 border-neutral-950 bg-pink-500 px-6 py-2 font-mono text-sm font-black uppercase text-white shadow-[7px_7px_0_rgba(10,10,10,0.95)] dark:border-yellow-200 dark:bg-cyan-300 dark:text-neutral-950 lg:block"
          aria-hidden="true"
        >
          layout.exe misbehaves
        </div>
        <div className="relative z-10 max-w-3xl">
          <p className="anti-label mb-5">whoami / no template</p>
          <h1 className="anti-title text-6xl text-neutral-950 dark:text-neutral-50 sm:text-8xl lg:text-9xl">
            Faris
            <span className="block translate-x-3 text-pink-600 dark:text-yellow-200 sm:translate-x-8">
              Salhi
            </span>
          </h1>
          <p className="mt-7 max-w-2xl -rotate-1 border-l-8 border-pink-500 bg-white/80 p-4 text-xl font-semibold leading-8 text-neutral-950 shadow-[8px_8px_0_rgba(0,229,255,0.8)] dark:border-yellow-300 dark:bg-neutral-950/85 dark:text-neutral-100 dark:shadow-[8px_8px_0_rgba(255,64,129,0.75)]">
            Computer science graduate building practical, reliable software with
            a focus on secure systems, networked applications, and thoughtful
            user experiences.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/projects" className="anti-button-primary">
              ./projects
            </Link>
            <Link
              href="/Resume (Faris Salhi).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="anti-button-secondary"
            >
              resume.pdf
            </Link>
            <a
              href="mailto:faris1.salhi@gmail.com"
              className="motion-link self-center px-1 py-2.5 font-mono text-sm font-black uppercase text-neutral-950 hover:text-pink-700 dark:text-neutral-100 dark:hover:text-yellow-200"
            >
              contact
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl gap-4">
            <div className="terminal-frame rotate-[0.8deg] p-4 font-mono text-sm text-neutral-800 dark:text-neutral-200">
              <div className="mb-4 flex gap-1.5" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-pink-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-300" />
                <span className="h-3 w-3 rounded-full bg-cyan-300" />
              </div>
              <p className="terminal-line">cat focus.txt</p>
              <p className="mt-2 text-neutral-800 dark:text-neutral-200">
                Build carefully. Ship cleanly. Keep the system understandable.
                <span className="terminal-cursor" />
              </p>
            </div>
            <AgeCounter birthDate={birthDate} />
          </div>
        </div>
        <div className="relative z-10 w-full max-w-sm justify-self-start lg:max-w-md lg:justify-self-end">
          <p className="absolute -left-3 top-6 z-20 rotate-[-8deg] border-2 border-neutral-950 bg-yellow-300 px-3 py-2 font-mono text-xs font-black uppercase text-neutral-950 shadow-[5px_5px_0_rgba(10,10,10,0.95)] dark:border-yellow-200 dark:bg-pink-500 dark:text-white">
            human built
          </p>
          <div className="soft-lift aspect-[4/5] rotate-3 overflow-hidden border-4 border-neutral-950 bg-cyan-300 shadow-[14px_14px_0_rgba(255,64,129,0.82)] dark:border-yellow-200 dark:bg-pink-500 dark:shadow-[14px_14px_0_rgba(0,229,255,0.62)]">
            <Image
              src="/Faris.jpg"
              alt="Faris Salhi"
              width={576}
              height={720}
              priority
              className="h-full w-full scale-105 object-cover grayscale contrast-125"
            />
          </div>
          <p className="absolute -bottom-5 right-0 z-20 max-w-[12rem] rotate-6 border-2 border-neutral-950 bg-white px-3 py-2 font-mono text-xs font-black uppercase leading-5 text-neutral-950 shadow-[5px_5px_0_rgba(10,10,10,0.95)] dark:border-yellow-200 dark:bg-yellow-200">
            polished? mostly. predictable? no.
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="anti-card soft-lift rotate-[-1.5deg] p-4">
          <p className="font-mono text-xs font-black uppercase text-pink-600 dark:text-yellow-200">
            Current focus
          </p>
          <p className="mt-3 text-lg font-black text-neutral-950 dark:text-neutral-50">
            Secure, scalable applications
          </p>
        </div>
        <div className="anti-card soft-lift translate-y-0 p-4 md:translate-y-5 md:rotate-1">
          <p className="font-mono text-xs font-black uppercase text-cyan-700 dark:text-cyan-200">
            Background
          </p>
          <p className="mt-3 text-lg font-black text-neutral-950 dark:text-neutral-50">
            BSc Computer Science, University of Calgary
          </p>
        </div>
        <div className="anti-card soft-lift rotate-[1.5deg] bg-yellow-200 p-4 dark:bg-neutral-950">
          <p className="font-mono text-xs font-black uppercase text-pink-600 dark:text-pink-300">
            Strengths
          </p>
          <p className="mt-3 text-lg font-black text-neutral-950 dark:text-neutral-50">
            Leadership, problem solving, and delivery
          </p>
        </div>
      </section>

      <section className="relative">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="anti-label">ls ./selected-work</p>
            <h2 className="anti-title mt-4 text-4xl text-neutral-950 dark:text-neutral-50 sm:text-5xl">
              Recent projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="motion-link hidden font-mono text-sm font-black uppercase text-neutral-950 hover:text-pink-700 dark:text-neutral-100 dark:hover:text-yellow-200 sm:block"
          >
            view all
          </Link>
        </div>
        <Projects limit={4} />
      </section>
    </div>
  )
}
