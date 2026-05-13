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
      <div className="terminal-frame rounded-md p-4 font-mono text-sm">
        <p className="terminal-line text-neutral-700 dark:text-neutral-300">
          run age --realtime
        </p>
        <p className="mt-3 text-amber-700 dark:text-amber-300">
          invalid birth date
        </p>
      </div>
    )
  }

  const { years, days, hours, minutes, seconds, micros } =
    getElapsedParts(elapsedMicros)

  return (
    <div className="terminal-frame rounded-md p-4 font-mono text-sm">
      <p className="terminal-line text-neutral-700 dark:text-neutral-300">
        run age --realtime
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="text-xs uppercase text-neutral-500 dark:text-neutral-500">
            age
          </p>
          <p className="mt-1 text-2xl text-neutral-950 dark:text-neutral-50 sm:text-3xl">
            {years}
            <span className="ml-2 text-base text-neutral-500 dark:text-neutral-500">
              years
            </span>
          </p>
        </div>
        <p className="text-right text-lg text-teal-700 dark:text-teal-300">
          {days}d {pad(hours)}:{pad(minutes)}:{pad(seconds)}.
          {pad(micros, 6)}
        </p>
      </div>
      <p className="mt-4 break-all text-xs text-neutral-600 dark:text-neutral-400">
        {formatNumber(elapsedMicros)} microseconds alive
      </p>
    </div>
  )
}
