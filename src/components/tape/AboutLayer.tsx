import { profile } from '@/data/profile'

function isHighlighted(word: string) {
  return profile.aboutHighlights.includes(word.replace(/[.,]/g, ''))
}

export function AboutLayer() {
  const words = profile.about.split(' ')
  return (
    <section
      id="sobre-mi"
      data-tape="layer-about"
      aria-labelledby="sobre-mi-titulo"
      className="absolute inset-0 z-[3] flex items-center bg-night"
    >
      <div aria-hidden="true" className="absolute top-[10%] -right-[10%] h-[40vw] w-[50vw] rounded-full bg-signal opacity-7 blur-[140px]" />
      <div className="relative mx-auto w-full max-w-[1180px] px-[clamp(20px,5vw,64px)]">
        <h2 id="sobre-mi-titulo" className="m-0 font-vhs text-[28px] font-normal text-signal">
          Sobre mí
        </h2>
        <p className="mt-[18px] mb-0 max-w-[24em] text-[clamp(26px,3.2vw,48px)] leading-[1.2] font-medium tracking-[-0.02em] text-chroma-soft">
          {words.map((word, i) => (
            <span key={i}>
              <span data-tape="word" className={isHighlighted(word) ? 'text-ember' : undefined}>
                {word}
              </span>
              {i < words.length - 1 ? ' ' : null}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
