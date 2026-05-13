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
    <header className="sticky top-0 z-20 border-b border-neutral-200/70 bg-stone-50/85 py-3 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/80">
      <nav className="flex items-center justify-between gap-4" id="nav">
        <Link
          href="/"
          className="group shrink-0 font-mono text-sm text-neutral-950 dark:text-neutral-50"
          aria-label="Faris Salhi home"
        >
          <span className="text-teal-700 transition-colors group-hover:text-neutral-950 dark:text-teal-300 dark:group-hover:text-neutral-50">
            ~/
          </span>
          faris
        </Link>
        <div className="flex min-w-0 flex-1 flex-wrap justify-end gap-x-4 gap-y-2 font-mono text-[13px] text-neutral-600 dark:text-neutral-400">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = currentPath === path

            return (
              <Link
                key={path}
                href={path}
                className={`motion-link ${
                  isActive
                    ? 'text-neutral-950 before:text-teal-700 dark:text-neutral-50 dark:before:text-teal-300'
                    : 'hover:text-neutral-950 dark:hover:text-neutral-50'
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
