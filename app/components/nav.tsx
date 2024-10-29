"use client"
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
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
  '/resume.pdf': {
    name: 'resume',
  },
  'mailto:faris1.salhi@gmail.com': {
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
                  className={`relative py-1 px-2 m-1 transition-all flex items-center align-middle ${
                    isActive
                      ? 'font-black text-xl'
                      : 'hover:font-bold'
                  } group`} // 'group' is used for hover state
                  style={{ lineHeight: '1.5', height: '2rem'}}
                  target={path.startsWith('http') || path.endsWith('.pdf') ? '_blank' : undefined}
                  rel={path.startsWith('http') || path.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
                >
                  {name}
                  <span
                    className={`absolute bottom-[-3px] left-1/2 transform -translate-x-1/2 h-[1px] bg-black dark:bg-white transition-all duration-200 ease-in-out rounded-full
                      ${isActive ? 'w-[50%] h-[2px]' : 'w-0 group-hover:w-[50%]'}`}
                    style={{ transformOrigin: 'center' }} // Origin is set to center for expansion from the middle
                  />
                </Link>
              )
            })}
          </div>
          <div className='ml-auto flex items-center justify-center h-full overflow-hidden'>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </aside>
  )
}
