import { useEffect, useState } from 'react'
import type { Chapter, TapeMode } from './animations'

const MONTHS = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC']

function formatDate(date: Date) {
  return `${MONTHS[date.getMonth()]}. ${date.getDate()} ${date.getFullYear()}`
}

function formatCounter(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor(totalSeconds / 60) % 60
  const seconds = totalSeconds % 60
  return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

interface OsdProps {
  mode: TapeMode
  chapter: Chapter
}

/** Indicadores en pantalla de una videocasetera: modo, capítulo, velocidad, fecha y contador. */
export function Osd({ mode, chapter }: OsdProps) {
  const [date] = useState(() => formatDate(new Date()))
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-40 font-vhs text-ink [text-shadow:2px_2px_0_rgb(0_0_0/0.6)]"
    >
      <div className="absolute top-[clamp(18px,3vh,32px)] left-[clamp(20px,4vw,48px)]">
        <span className="block text-[clamp(28px,2.8vw,40px)] leading-none">{mode}</span>
        <span className="mt-1 block text-[22px] text-dim">{chapter}</span>
      </div>
      <span className="absolute top-[clamp(18px,3vh,32px)] right-[clamp(20px,4vw,48px)] text-[clamp(28px,2.8vw,40px)] leading-none">
        SP
      </span>
      <span className="absolute bottom-[clamp(18px,3vh,32px)] left-[clamp(20px,4vw,48px)] text-[clamp(24px,2.2vw,32px)]">
        {date}
      </span>
      <span className="absolute right-[clamp(20px,4vw,48px)] bottom-[clamp(18px,3vh,32px)] text-[clamp(24px,2.2vw,32px)]">
        {formatCounter(seconds)}
      </span>
    </div>
  )
}
