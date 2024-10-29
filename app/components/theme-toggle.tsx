"use client"

import { FiSun, FiMoon } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'


export default function ThemeToggle() {
	const [mounted, setMounted] = useState(false)
	const { setTheme, resolvedTheme } = useTheme()

	useEffect(() => setMounted(true), [])
	if (!mounted) return (
		<div className='flex items-center justify-center h-full'>
			<Image
				src= 'data: image/svg+xml; base64, PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWROaD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWROaD0iMjAwcHgiIHhtbG5zPSJodHRw0i8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJ1Y3Qgd2lkdGg9IjIwIiBoZWLnaHQ9I]IwIiB4PSIyIiB5PSIyIiBmaWxsPSJub251IiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg==* '
				width={36}
				height={36}
				sizes='36x36'
				alt='Loading Theme Toggle'
				priority={false}
				title='Loading Theme Toggle'
			/>
		</div>
	)

	if (resolvedTheme === 'dark') {
		return (
			<div className='flex items-center justify-center'>
				<FiSun className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" onClick={() => setTheme('light')} />
			</div>
		)
	}
	
	if (resolvedTheme === 'light') {
		return (
			<div className='flex items-center justify-center'>
				<FiMoon className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" onClick={() => setTheme('dark')} />
			</div>
		)
	}
}