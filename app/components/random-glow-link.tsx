"use client"

import Link from 'next/link'
import type { CSSProperties, ReactNode } from 'react'

type GlowStyle = CSSProperties & Record<`--glow-${string}`, string>

type RandomGlowLinkProps = {
  children: ReactNode
  className?: string
  href: string
  rel?: string
  target?: string
}

function setGlowVariables(element: HTMLAnchorElement) {
  const duration = 280 + Math.round(Math.random() * 180)
  const low = 0.22 + Math.random() * 0.18
  const dip = 0.34 + Math.random() * 0.24
  const peak = 0.88 + Math.random() * 0.12
  const warm = 0.7 + Math.random() * 0.2
  const scale = 0.9 + Math.random() * 0.08

  element.style.setProperty('--glow-duration', `${duration}ms`)
  element.style.setProperty('--glow-low', low.toFixed(2))
  element.style.setProperty('--glow-dip', dip.toFixed(2))
  element.style.setProperty('--glow-peak', peak.toFixed(2))
  element.style.setProperty('--glow-warm', warm.toFixed(2))
  element.style.setProperty('--glow-scale', scale.toFixed(2))
}

export function RandomGlowLink({
  children,
  className,
  href,
  rel,
  target,
}: RandomGlowLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      target={target}
      rel={rel}
      onFocus={(event) => setGlowVariables(event.currentTarget)}
      onPointerEnter={(event) => setGlowVariables(event.currentTarget)}
      style={
        {
          '--glow-duration': '340ms',
          '--glow-low': '0.28',
          '--glow-dip': '0.42',
          '--glow-peak': '1',
          '--glow-warm': '0.68',
          '--glow-scale': '0.96',
        } as GlowStyle
      }
    >
      {children}
    </Link>
  )
}
