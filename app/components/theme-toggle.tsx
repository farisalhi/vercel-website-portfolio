"use client"

import { FiSun, FiMoon } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'


export default function ThemeToggle() {
	const [mounted, setMounted] = useState(false)
	const [mouseDown, setMouseDown] = useState(false) 
	const { setTheme, resolvedTheme } = useTheme()

	useEffect(() => setMounted(true), [])
	
	if (!mounted) return (
		<div className='flex items-center justify-center h-full'>
			<div className="h-9 w-9" aria-hidden="true" />
		</div>
	)

	const handleThemeToggle = () => {
		setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
	}


	return (
		<button
			onMouseDown={() => setMouseDown(true)}
			onMouseUp={() => setMouseDown(false)}
			onClick={handleThemeToggle}
			className="soft-lift rotate-3 border-2 border-neutral-950 bg-cyan-300 p-2 text-neutral-950 shadow-[4px_4px_0_rgba(10,10,10,0.95)] hover:-translate-y-1 hover:bg-pink-400 dark:border-yellow-200 dark:bg-yellow-200 dark:text-neutral-950 dark:shadow-[4px_4px_0_rgba(255,64,129,0.85)]"
			aria-label="Toggle theme"
		>
			{resolvedTheme === 'dark' ? (
				<FiSun className={`w-5 h-5 cursor-pointer transition-transform ${mouseDown ? 'scale-110' : ''}`} />
			) : (
				<FiMoon className={`w-5 h-5 cursor-pointer transition-transform ${mouseDown ? 'scale-110' : ''}`} />
			)}
		</button>
	)
}
