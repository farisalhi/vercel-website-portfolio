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
			className="minimal-action project-row px-2 py-2 text-neutral-600 dark:text-neutral-400"
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
