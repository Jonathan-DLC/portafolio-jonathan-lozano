import { useEffect, useState } from 'react'
import type { Chapter, TapeMode } from './animations'

// Monograma «JL»: la J baja y se curva hacia la izquierda, la L baja y corre hacia la derecha.
// Es el mismo trazo de public/favicon.svg.
const MONOGRAM = 'M28 14 V38 A9 9 0 0 1 10 38 M38 14 V48 H54'

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
      <svg
        viewBox="0 0 64 64"
        fill="none"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute top-[clamp(10px,2vh,24px)] right-[clamp(12px,3.4vw,40px)] size-[clamp(44px,4vw,60px)] drop-shadow-[2px_2px_0_rgb(0_0_0/0.6)]"
      >
        <path d={MONOGRAM} stroke="var(--color-flare)" opacity={0.8} transform="translate(-2.5 0)" />
        <path d={MONOGRAM} stroke="var(--color-signal)" opacity={0.8} transform="translate(2.5 0)" />
        <path d={MONOGRAM} stroke="var(--color-ink)" />
      </svg>
      <span className="absolute bottom-[clamp(18px,3vh,32px)] left-[clamp(20px,4vw,48px)] text-[clamp(24px,2.2vw,32px)]">
        {date}
      </span>
      <span className="absolute right-[clamp(20px,4vw,48px)] bottom-[clamp(18px,3vh,32px)] text-[clamp(24px,2.2vw,32px)]">
        {formatCounter(seconds)}
      </span>
    </div>
  )
}
