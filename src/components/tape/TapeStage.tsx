import { useRef, useState } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'
import { AboutLayer } from './AboutLayer'
import {
  buildTapeTimeline,
  chapterAt,
  playIntro,
  startAmbient,
  trackingGlitch,
  type Chapter,
  type TapeMode,
} from './animations'
import { ContactLayer } from './ContactLayer'
import { HeroLayer } from './HeroLayer'
import { Osd } from './Osd'
import { ProjectsLayer } from './ProjectsLayer'
import { TapeDefs } from './TapeDefs'
import { VhsOverlay } from './VhsOverlay'

const SKIP_TARGETS = [
  { label: 'Ir a Sobre mí', timelineLabel: 'about' },
  { label: 'Ir a Proyectos', timelineLabel: 'projects' },
  { label: 'Ir a Contacto', timelineLabel: 'contact' },
]

/**
 * La página entera es una pista alta con un escenario fijo encima: el scroll no mueve el
 * contenido, avanza la línea de tiempo que apaga una sección y enciende la siguiente.
 */
export function TapeStage() {
  const rootRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const tapeRef = useRef<gsap.core.Timeline | null>(null)
  const [mode, setMode] = useState<TapeMode>('PLAY ▶')
  const [chapter, setChapter] = useState<Chapter>('Inicio')

  useGSAP(
    () => {
      const q = gsap.utils.selector(rootRef)
      const mm = gsap.matchMedia()
      mm.add(
        { motion: '(prefers-reduced-motion: no-preference)', calm: '(prefers-reduced-motion: reduce)' },
        (context) => {
          const { motion } = context.conditions as { motion: boolean }
          let nextGlitch: gsap.core.Tween | null = null
          let idleTimer = 0

          if (motion) {
            startAmbient(q)
            const loopGlitch = () => {
              trackingGlitch(q).eventCallback('onComplete', () => {
                nextGlitch = gsap.delayedCall(gsap.utils.random(3, 6), loopGlitch)
              })
            }
            playIntro(q).call(loopGlitch, undefined, '+=1')
          }

          const tape = buildTapeTimeline(q, trackRef.current!, !motion)
          tapeRef.current = tape

          // El OSD imita los botones de la videocasetera: avanza o rebobina mientras hay scroll
          // y vuelve a PLAY (o STOP al final) cuando el scroll se detiene.
          ScrollTrigger.create({
            trigger: trackRef.current,
            start: 'top top',
            end: 'bottom bottom',
            onUpdate: (self) => {
              setChapter(chapterAt(tape, self.progress))
              setMode(self.direction < 0 ? 'REW ◀◀' : 'FF ▶▶')
              window.clearTimeout(idleTimer)
              idleTimer = window.setTimeout(() => {
                setMode(self.progress > 0.97 ? 'STOP ■' : 'PLAY ▶')
              }, 350)
            },
          })

          return () => {
            nextGlitch?.kill()
            window.clearTimeout(idleTimer)
          }
        },
      )

      // Las fuentes cambian la altura de los textos; se recalculan las posiciones al cargarlas.
      document.fonts?.ready.then(() => ScrollTrigger.refresh())
      return () => mm.revert()
    },
    { scope: rootRef },
  )

  const skipTo = (label: string) => {
    const trigger = tapeRef.current?.scrollTrigger
    if (!trigger) return
    window.scrollTo({ top: trigger.labelToScroll(label), behavior: 'smooth' })
  }

  return (
    <div ref={rootRef} className="bg-void text-ink">
      <TapeDefs />
      <nav aria-label="Saltar a una sección" className="fixed top-3 left-1/2 z-50 flex -translate-x-1/2 gap-2">
        {SKIP_TARGETS.map((target) => (
          <button
            key={target.timelineLabel}
            type="button"
            onClick={() => skipTo(target.timelineLabel)}
            className="sr-only bg-ink px-3 py-2 font-vhs text-xl text-night focus:not-sr-only"
          >
            {target.label}
          </button>
        ))}
      </nav>

      <div ref={trackRef} className="relative h-[600svh]">
        <div className="sticky top-0 h-svh min-h-[560px] overflow-hidden bg-void">
          <ContactLayer />
          <ProjectsLayer />
          <AboutLayer />
          <HeroLayer />
          {['intro-line', 'line'].map((name) => (
            <div
              key={name}
              data-tape={name}
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-1/2 z-20 -mt-px h-0.5 bg-ink opacity-0 shadow-[0_0_18px_#f8fafc,0_0_40px_rgb(0_240_255/0.8)]"
            />
          ))}
          <VhsOverlay />
          <Osd mode={mode} chapter={chapter} />
        </div>
      </div>
    </div>
  )
}
