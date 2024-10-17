"use client"
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'

const navItems = {
  '/': {
    name: 'about',
  },
  '/blog': {
    name: 'projects',
  },
  'https://vercel.com/templates/next.js/portfolio-starter-kit': {
    name: 'resume',
  },
  '': {
    name: 'contact',
  },
}

export function Navbar() {
  const currentPath = usePathname()
  const [clickedPath, setClickedPath] = useState<string | null>(null)

  const handleClick = (path: string) => {
    setClickedPath(path)
    setTimeout(() => setClickedPath(null), 300)
  }

  const handleMouseDown = (path: string) => {
    setClickedPath(path)
  }

  const handleMouseUp = () => {
    setTimeout(() => setClickedPath(null), 100)
  }

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = currentPath === path
              const isClicked = clickedPath === path
              return (
                <Link
                  key={path}
                  href={path}
                  onClick={() => handleClick(path)}
                  onMouseDown={() => handleMouseDown(path)}
                  onMouseUp={handleMouseUp}
                  className={`transition-all flex items-center align-middle relative py-1 px-2 m-1 ${
                    isActive && isClicked ? 'font-semibold text-xl' : isActive ? 'font-black text-xl' : isClicked ? 'font-black text-neutral-100' : 'hover:text-neutral-400'
                  }`}
                  style={{ lineHeight: '1.5', height: '2rem'}}
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
