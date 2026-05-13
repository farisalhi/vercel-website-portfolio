"use client"

import { useEffect, useMemo, useState } from 'react'

type AgeCounterProps = {
  birthDate: string
}

function formatNumber(value: number) {
  return new Intl.NumberFormat('en-US').format(value)
}

function getElapsedParts(totalMicros: number) {
  const microsPerSecond = 1_000_000
  const microsPerMinute = microsPerSecond * 60
  const microsPerHour = microsPerMinute * 60
  const microsPerDay = microsPerHour * 24
  const microsPerYear = 31_556_952_000_000

  const years = Math.floor(totalMicros / microsPerYear)
  let remainder = totalMicros % microsPerYear
  const days = Math.floor(remainder / microsPerDay)
  remainder %= microsPerDay
  const hours = Math.floor(remainder / microsPerHour)
  remainder %= microsPerHour
  const minutes = Math.floor(remainder / microsPerMinute)
  remainder %= microsPerMinute
  const seconds = Math.floor(remainder / microsPerSecond)
  const micros = remainder % microsPerSecond

  return { years, days, hours, minutes, seconds, micros }
}

function pad(value: number, length = 2) {
  return value.toString().padStart(length, '0')
}

export function AgeCounter({ birthDate }: AgeCounterProps) {
  const birthTime = useMemo(() => {
    const parsed = new Date(birthDate).getTime()
    return Number.isNaN(parsed) ? null : parsed
  }, [birthDate])

  const [elapsedMicros, setElapsedMicros] = useState<number | null>(null)

  useEffect(() => {
    if (!birthTime) {
      return
    }

    const baseElapsedMicros = Math.max(0, Date.now() - birthTime) * 1000
    const basePerformance = performance.now()
    let animationFrame = 0

    const tick = () => {
      const performanceDeltaMicros = Math.max(
        0,
        Math.floor((performance.now() - basePerformance) * 1000)
      )
      setElapsedMicros(baseElapsedMicros + performanceDeltaMicros)
      animationFrame = requestAnimationFrame(tick)
    }

    tick()

    return () => cancelAnimationFrame(animationFrame)
  }, [birthTime])

  if (!birthTime || elapsedMicros === null) {
    return (
      <div className="terminal-frame -rotate-1 p-4 font-mono text-sm">
        <p className="terminal-line text-neutral-700 dark:text-neutral-300">
          run age --realtime
        </p>
        <p className="mt-3 font-black uppercase text-pink-600 dark:text-yellow-200">
          invalid birth date
        </p>
      </div>
    )
  }

  const { years, days, hours, minutes, seconds, micros } =
    getElapsedParts(elapsedMicros)

  return (
    <div className="terminal-frame -rotate-1 p-4 font-mono text-sm">
      <p className="terminal-line font-bold uppercase text-neutral-800 dark:text-neutral-200">
        run age --realtime
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="text-xs font-black uppercase text-pink-600 dark:text-yellow-200">
            age
          </p>
          <p className="mt-1 text-3xl font-black text-neutral-950 dark:text-neutral-50 sm:text-4xl">
            {years}
            <span className="ml-2 text-base text-neutral-600 dark:text-neutral-300">
              years
            </span>
          </p>
        </div>
        <p className="bg-cyan-200 px-2 py-1 text-left text-lg font-black text-neutral-950 dark:bg-pink-500 dark:text-white sm:text-right">
          {days}d {pad(hours)}:{pad(minutes)}:{pad(seconds)}.
          {pad(micros, 6)}
        </p>
      </div>
      <p className="mt-4 break-all text-xs font-bold text-neutral-700 dark:text-neutral-300">
        {formatNumber(elapsedMicros)} microseconds alive
      </p>
    </div>
  )
}
