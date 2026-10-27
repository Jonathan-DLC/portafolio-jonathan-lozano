import { gsap } from '@/lib/gsap'

export type TapeMode = 'PLAY ▶' | 'FF ▶▶' | 'REW ◀◀' | 'STOP ■'
export type Chapter = 'Inicio' | 'Sobre mí' | 'Proyectos' | 'Contacto'

type Select = (selector: string) => Element[]

/** Bucles de fondo del hero: luces de la ciudad, carril, ruedas, estela, ruido y barra de tracking. */
export function startAmbient(q: Select) {
  gsap.to(q('[data-tape="lights"]'), { x: -960, duration: 1.1, repeat: -1, ease: 'none' })
  gsap.to(q('[data-tape="lane"]'), { x: -160, duration: 0.22, repeat: -1, ease: 'none' })
  gsap.to(q('[data-tape="wheel-rear"]'), { rotation: 360, svgOrigin: '72 102', duration: 0.28, repeat: -1, ease: 'none' })
  gsap.to(q('[data-tape="wheel-front"]'), { rotation: 360, svgOrigin: '252 102', duration: 0.28, repeat: -1, ease: 'none' })
  // 148 = 60 + 14 + 60 + 14: dos periodos del trazo discontinuo, para que el bucle no salte.
  gsap.to(q('[data-tape="trail"]'), { strokeDashoffset: 148, duration: 0.3, repeat: -1, ease: 'none' })
  gsap.to(q('[data-tape="bike"]'), { y: -3, duration: 0.18, yoyo: true, repeat: -1, ease: 'sine.inOut' })
  gsap.to(q('[data-tape="noise"]'), {
    x: 'random(-50, 50)',
    y: 'random(-50, 50)',
    duration: 0.07,
    repeat: -1,
    repeatRefresh: true,
    ease: 'steps(1)',
  })
  gsap.fromTo(
    q('[data-tape="tracking"]'),
    { y: 0 },
    { y: () => window.innerHeight + 200, duration: 1.6, ease: 'none', repeat: -1, repeatDelay: 5 },
  )
}

/** Entrada al cargar: la pantalla se enciende, el nombre llega desalineado y el rol se teclea. */
export function playIntro(q: Select) {
  const [screen] = q('[data-tape="hero-power"]')
  const [line] = q('[data-tape="intro-line"]')
  const [title] = q('[data-tape="title"]')
  const slices = q('[data-tape="slice"]')
  const keys = q('[data-tape="key"]')
  const offsets = [-90, 70, -40]

  gsap.set(keys, { opacity: 0 })
  const intro = gsap.timeline({ delay: 0.2 })
  intro
    .fromTo(line, { opacity: 1, scaleX: 0 }, { scaleX: 1, duration: 0.25, ease: 'power2.out' })
    .fromTo(screen, { scaleY: 0.006 }, { scaleY: 1, duration: 0.45, ease: 'power3.out' }, '>-0.02')
    .to(line, { opacity: 0, duration: 0.15 }, '<')
    .set(title, { opacity: 0 }, 0)
    .set(slices, { opacity: 1, x: (i: number) => offsets[i] }, 0.5)
  for (let k = 0; k < 6; k++) {
    intro.to(slices, { x: () => gsap.utils.random(-30, 30), duration: 0.06, ease: 'steps(1)' }, 0.6 + k * 0.07)
  }
  intro
    .to(slices, { x: 0, duration: 0.08 }, '>')
    .set(title, { opacity: 1 }, '>')
    .set(slices, { opacity: 0 }, '<')
    .to(keys, { opacity: 1, duration: 0.01, stagger: 0.045 }, '>+0.1')
  return intro
}

/** Un tirón de tracking: el título se parte en franjas que se desplazan y vuelven. */
export function trackingGlitch(q: Select) {
  const [title] = q('[data-tape="title"]')
  const slices = q('[data-tape="slice"]')
  const glitch = gsap.timeline()
  glitch.set(title, { opacity: 0 }).set(slices, { opacity: 1 })
  for (let k = 0; k < 4; k++) {
    glitch.set(slices, { x: () => gsap.utils.random(-26, 26) }, k * 0.06)
  }
  glitch.set(slices, { opacity: 0, x: 0 }, 0.26).set(title, { opacity: 1 }, 0.26)
  return glitch
}

/**
 * Línea de tiempo atada al scroll: cada sección se apaga como un televisor (a una línea y luego
 * a nada) y la siguiente se enciende. Con movimiento reducido las capas solo se funden.
 * Las etiquetas `to*` marcan dónde empieza cada cambio y las demás dónde la sección ya terminó
 * de entrar (palabras encendidas, casetes en su sitio); esas son el destino de los enlaces de salto.
 */
export function buildTapeTimeline(q: Select, track: Element, calm: boolean) {
  const [hero] = q('[data-tape="layer-hero"]')
  const [about] = q('[data-tape="layer-about"]')
  const [work] = q('[data-tape="layer-projects"]')
  const [contact] = q('[data-tape="layer-contact"]')
  const [line] = q('[data-tape="line"]')
  gsap.set([about, work, contact], { autoAlpha: 0 })

  const tape = gsap.timeline({
    scrollTrigger: { trigger: track, start: 'top top', end: 'bottom bottom', scrub: 0.6 },
  })

  const switchOff = (layer: Element) => {
    if (calm) {
      tape.to(layer, { autoAlpha: 0, duration: 0.5 })
      return
    }
    tape
      .to(layer, { scaleY: 0.006, duration: 0.45, ease: 'power3.in' })
      .set(line, { opacity: 1, scaleX: 1 })
      .to(line, { scaleX: 0, duration: 0.25, ease: 'power2.in' })
      .set(layer, { autoAlpha: 0 })
  }
  const switchOn = (layer: Element) => {
    if (calm) {
      tape.to(layer, { autoAlpha: 1, duration: 0.5 })
      return
    }
    tape
      .set(layer, { autoAlpha: 1, scaleY: 0.006 })
      .set(line, { opacity: 1, scaleX: 0 })
      .to(line, { scaleX: 1, duration: 0.2, ease: 'power2.out' })
      .to(layer, { scaleY: 1, duration: 0.45, ease: 'power3.out' })
      .to(line, { opacity: 0, duration: 0.15 }, '<')
  }
  const hold = (duration: number) => tape.to({}, { duration })

  hold(0.5)
  tape.addLabel('toAbout')
  switchOff(hero)
  switchOn(about)
  tape.fromTo(q('[data-tape="word"]'), { opacity: 0.12 }, { opacity: 1, stagger: 0.06, duration: 0.3, ease: 'none' })
  tape.addLabel('about')
  hold(0.6)
  tape.addLabel('toProjects')
  switchOff(about)
  switchOn(work)
  tape.from(q('[data-tape="cassette"]'), { xPercent: 110, duration: 0.6, stagger: 0.35, ease: 'power2.out' })
  tape.addLabel('projects')
  hold(0.8)
  tape.addLabel('toContact')
  switchOff(work)
  switchOn(contact)
  tape.addLabel('contact')
  hold(0.6)
  return tape
}

export function chapterAt(tape: gsap.core.Timeline, progress: number): Chapter {
  const time = progress * tape.duration()
  if (time < tape.labels.toAbout) return 'Inicio'
  if (time < tape.labels.toProjects) return 'Sobre mí'
  if (time < tape.labels.toContact) return 'Proyectos'
  return 'Contacto'
}
