"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './theme-toggle'

const navItems = {
  '/': {
    name: 'home',
  },
  '/about': {
    name: 'about',
  },
  '/projects': {
    name: 'projects',
  },
  '/Resume (Faris Salhi).pdf': {
    name: 'resume',
  },
  'mailto:faris1.salhi@gmail.com': {
    name: 'contact',
  },
}

export function Navbar() {
  const currentPath = usePathname()

  return (
    <header className="sticky top-0 z-20 mb-4 -rotate-[0.6deg] border-2 border-neutral-950 bg-yellow-300 px-3 py-3 shadow-[8px_8px_0_rgba(10,10,10,0.95)] dark:border-yellow-200 dark:bg-neutral-950 dark:shadow-[8px_8px_0_rgba(0,229,255,0.65)]">
      <nav className="flex items-center justify-between gap-4" id="nav">
        <Link
          href="/"
          className="group shrink-0 rotate-1 border-2 border-neutral-950 bg-white px-2 py-1 font-mono text-sm font-black uppercase text-neutral-950 shadow-[4px_4px_0_rgba(255,64,129,0.9)] dark:border-yellow-200 dark:bg-pink-500 dark:text-white dark:shadow-[4px_4px_0_rgba(255,242,0,0.85)]"
          aria-label="Faris Salhi home"
        >
          <span className="text-pink-600 transition-colors group-hover:text-neutral-950 dark:text-yellow-200 dark:group-hover:text-white">
            ~/
          </span>
          faris
        </Link>
        <div className="flex min-w-0 flex-1 flex-wrap justify-end gap-x-4 gap-y-2 font-mono text-[13px] font-bold uppercase text-neutral-950 dark:text-neutral-200">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = currentPath === path

            return (
              <Link
                key={path}
                href={path}
                className={`motion-link ${
                  isActive
                    ? 'text-pink-700 before:text-neutral-950 dark:text-yellow-200 dark:before:text-cyan-200'
                    : 'hover:text-pink-700 dark:hover:text-yellow-200'
                } before:mr-1 before:content-['/']`}
                target={path.startsWith('http') || path.endsWith('.pdf') ? '_blank' : undefined}
                rel={path.startsWith('http') || path.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
              >
                {name}
              </Link>
            )
          })}
        </div>
        <div className="shrink-0">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
