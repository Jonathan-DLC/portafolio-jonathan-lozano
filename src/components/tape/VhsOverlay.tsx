/** Capa de imagen VHS encima de todo: líneas de barrido, ruido, barra de tracking y viñeta. */
export function VhsOverlay() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-30">
      <svg className="absolute inset-0 size-full">
        <rect width="100%" height="100%" fill="url(#tape-scanlines)" />
      </svg>
      <svg
        data-tape="noise"
        className="absolute -inset-[60px] h-[calc(100%+120px)] w-[calc(100%+120px)] opacity-[0.07]"
      >
        <rect width="100%" height="100%" filter="url(#tape-noise)" />
      </svg>
      <div
        data-tape="tracking"
        className="absolute inset-x-0 -top-[120px] h-[70px] bg-ink/5 shadow-[0_1px_0_rgb(248_250_252/0.12),0_-1px_0_rgb(248_250_252/0.12)] motion-reduce:hidden"
      />
      <div className="absolute inset-0 shadow-[inset_0_0_200px_rgb(0_0_0/0.85)]" />
    </div>
  )
}
