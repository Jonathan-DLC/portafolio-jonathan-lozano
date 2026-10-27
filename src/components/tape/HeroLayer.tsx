import { profile } from '@/data/profile'
import { Motorbike } from './Motorbike'

// Tres copias del título recortadas en franjas horizontales; al desplazarlas por separado
// imitan una cinta con el tracking desajustado.
const SLICES = ['inset(0 0 66% 0)', 'inset(34% 0 33% 0)', 'inset(67% 0 0 0)']

const titleClass =
  'font-display text-[clamp(52px,min(10vw,17vh),156px)] leading-[0.88] font-bold tracking-[-0.045em] text-chroma'

export function HeroLayer() {
  return (
    <section
      id="inicio"
      data-tape="layer-hero"
      aria-label="Inicio"
      className="absolute inset-0 z-[4] overflow-hidden bg-night"
    >
      {/* La intro enciende este contenedor y el scroll apaga la sección: si animaran el mismo
          elemento, un scroll durante la intro dejaría guardado un estado a medio encender. */}
      <div data-tape="hero-power" className="absolute inset-0">
        <div aria-hidden="true" className="absolute top-[6%] left-[10%] h-[40vw] w-[70vw] rounded-full bg-flare opacity-12 blur-[150px]" />
        <div aria-hidden="true" className="absolute right-0 bottom-[20%] h-[30vw] w-[50vw] rounded-full bg-ember opacity-12 blur-[150px]" />

        <svg
          data-tape="lights"
          aria-hidden="true"
          height="420"
          className="absolute bottom-[calc(24%+30px)] left-0 block w-[calc(100%+960px)]"
        >
          <rect width="100%" height="100%" fill="url(#tape-city-lights)" />
        </svg>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[24%] border-t-2 border-signal bg-[#0d111c] shadow-[0_-10px_40px_rgb(0_240_255/0.25)]"
        >
          <svg data-tape="lane" height="10" className="absolute top-[34%] left-0 block w-[calc(100%+160px)]">
            <rect width="100%" height="100%" fill="url(#tape-lane)" />
          </svg>
        </div>

        <div
          data-tape="bike"
          aria-hidden="true"
          className="absolute bottom-[calc(24%-18px)] left-[14%] aspect-[320/130] w-[min(50vw,620px,62vh)]"
        >
          <Motorbike />
        </div>

        <div className="absolute inset-x-0 top-[clamp(90px,15vh,160px)] z-[2]">
          <div className="mx-auto max-w-[1180px] px-[clamp(20px,5vw,64px)]">
            <div className="relative inline-block">
              <h1 data-tape="title" className={`m-0 ${titleClass}`}>
                {profile.firstName}
                <br />
                {profile.lastName}
              </h1>
              {SLICES.map((clip) => (
                <div
                  key={clip}
                  data-tape="slice"
                  aria-hidden="true"
                  className={`absolute inset-0 opacity-0 ${titleClass}`}
                  style={{ clipPath: clip }}
                >
                  {profile.firstName}
                  <br />
                  {profile.lastName}
                </div>
              ))}
            </div>
            <p
              aria-label={profile.role}
              className="mt-[18px] mb-0 font-vhs text-[clamp(26px,2.6vw,36px)] text-signal"
            >
              <span aria-hidden="true">
                {Array.from(profile.role).map((char, i) => (
                  <span key={i} data-tape="key">
                    {char}
                  </span>
                ))}
                <span className="animate-blink motion-reduce:animate-none">█</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
