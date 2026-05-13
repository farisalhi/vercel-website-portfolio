"use client"

import { useEffect, useMemo, useState } from 'react'

type AgeCounterProps = {
  birthDate: string
}

const microsPerYear = 31_556_952_000_000

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
      <div>
        <p className="eyebrow">Age</p>
        <p className="mt-3 font-medium leading-6 text-amber-700 dark:text-amber-300">
          invalid birth date
        </p>
      </div>
    )
  }

  const decimalYears = elapsedMicros / microsPerYear

  return (
    <div>
      <p className="eyebrow">Age</p>
      <p className="mt-3 break-all font-mono text-base font-medium leading-6 text-orange-600 [font-variant-numeric:tabular-nums] dark:text-orange-300">
        {decimalYears.toFixed(10)}
      </p>
    </div>
  )
}
