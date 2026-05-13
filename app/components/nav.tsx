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
}

export function Navbar() {
  const currentPath = usePathname()

  return (
    <header className="sticky top-0 z-20 -mx-5 border-y border-neutral-200/90 bg-stone-50/82 px-5 py-3 shadow-[0_18px_56px_-44px_rgba(249,115,22,0.6)] backdrop-blur-xl transition-[border-color,box-shadow,background-color] duration-300 dark:border-white/10 dark:bg-neutral-950/82 dark:shadow-[0_18px_56px_-42px_rgba(249,115,22,0.55)] sm:-mx-8 sm:px-8">
      <nav className="flex items-center justify-between gap-5" id="nav">
        <Link
          href="/"
          className="group shrink-0 font-mono text-sm text-neutral-950 transition-colors hover:text-orange-600 dark:text-neutral-50 dark:hover:text-orange-300"
          aria-label="Faris Salhi home"
        >
          <span className="text-neutral-500 transition-colors group-hover:text-orange-600 dark:text-neutral-500 dark:group-hover:text-orange-300">
            ~/
          </span>
          faris
        </Link>
        <div className="flex min-w-0 flex-1 flex-wrap justify-end gap-x-4 gap-y-2 font-mono text-[13px] text-neutral-700 dark:text-neutral-300">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = currentPath === path

            return (
              <Link
                key={path}
                href={path}
                className={`motion-link ${
                  isActive
                    ? 'text-neutral-950 dark:text-neutral-50'
                    : 'hover:text-orange-600 dark:hover:text-orange-300'
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
