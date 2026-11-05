import { profile, type AboutTone } from '@/data/profile'

const TONE_CLASS: Record<AboutTone, string> = {
  interest: 'text-signal',
  value: 'font-bold text-ink',
  accent: 'font-bold text-ember',
}

// Cada palabra se enciende por separado al entrar en la sección, así que el texto se parte
// en palabras sin perder el tono de su segmento.
const words = profile.about.flatMap((segment) =>
  segment.text.split(' ').map((text) => ({ text, tone: segment.tone })),
)

export function AboutLayer() {
  return (
    <section
      id="sobre-mi"
      data-tape="layer-about"
      aria-labelledby="sobre-mi-titulo"
      className="absolute inset-0 z-[4] flex items-center bg-night"
    >
      <div aria-hidden="true" className="absolute top-[10%] -right-[10%] h-[40vw] w-[50vw] rounded-full bg-signal opacity-7 blur-[140px]" />
      <div className="relative mx-auto w-full max-w-[1180px] px-[clamp(20px,5vw,64px)]">
        <h2 id="sobre-mi-titulo" className="m-0 font-vhs text-[28px] font-normal text-signal">
          Sobre mí
        </h2>
        <p className="mt-[18px] mb-0 max-w-[22em] text-[clamp(24px,2.7vw,40px)] leading-[1.25] font-medium tracking-[-0.02em] text-dim text-chroma-soft">
          {words.map((word, i) => (
            <span key={i}>
              {i > 0 && !/^[,.]/.test(word.text) ? ' ' : null}
              <span data-tape="word" className={word.tone ? TONE_CLASS[word.tone] : undefined}>
                {word.text}
              </span>
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
