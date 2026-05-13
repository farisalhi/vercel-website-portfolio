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
			className="soft-lift rounded-md border border-white/60 bg-white/35 p-2 text-neutral-600 shadow-[0_12px_32px_-30px_rgba(249,115,22,0.65)] backdrop-blur-xl hover:border-orange-200 hover:bg-white/65 hover:text-orange-600 dark:border-white/10 dark:bg-neutral-950/35 dark:text-neutral-400 dark:hover:border-orange-500/30 dark:hover:bg-neutral-900/70 dark:hover:text-orange-300"
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
