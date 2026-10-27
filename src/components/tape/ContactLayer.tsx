import { profile } from '@/data/profile'

export function ContactLayer() {
  return (
    <footer
      id="contacto"
      data-tape="layer-contact"
      className="absolute inset-0 z-[1] flex items-center bg-night"
    >
      <svg aria-hidden="true" className="absolute inset-0 size-full opacity-12">
        <rect width="100%" height="100%" filter="url(#tape-noise)" />
      </svg>
      <div className="relative mx-auto flex w-full max-w-[1180px] flex-wrap items-end justify-between gap-10 px-[clamp(20px,5vw,64px)]">
        <div>
          <p className="m-0 font-vhs text-2xl text-ember">Fin de la cinta</p>
          <h2 className="mt-2.5 mb-0 text-[clamp(48px,7vw,104px)] leading-[0.9] font-bold tracking-[-0.04em] text-chroma">
            {profile.name}
          </h2>
          <p className="mt-3 mb-0 font-vhs text-[26px] text-dim">{profile.role}</p>
        </div>
        <nav aria-label="Contacto" className="flex flex-col gap-1.5 font-vhs text-[clamp(26px,2.6vw,34px)]">
          {profile.links.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={`no-underline transition-colors hover:text-signal ${link.accent ? 'text-ember' : 'text-ink'}`}
              >
                {link.label} ↗
              </a>
            ) : (
              <span key={link.label} className="text-dim">
                {link.label} <span className="text-[0.7em]">(pendiente)</span>
              </span>
            ),
          )}
        </nav>
      </div>
    </footer>
  )
}
