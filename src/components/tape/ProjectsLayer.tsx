import { projects } from '@/data/projects'

const buttonClass =
  'inline-flex min-h-11 items-center border border-ink px-3 py-1 font-vhs text-2xl text-ink no-underline transition-colors hover:bg-ink hover:text-night'

export function ProjectsLayer() {
  return (
    <section
      id="proyectos"
      data-tape="layer-projects"
      aria-labelledby="proyectos-titulo"
      className="absolute inset-0 z-[2] flex items-center bg-night"
    >
      <div className="mx-auto w-full max-w-[1180px] px-[clamp(20px,5vw,64px)]">
        <h2
          id="proyectos-titulo"
          className="mt-0 mb-[clamp(18px,3vh,32px)] font-vhs text-[clamp(40px,5vw,64px)] leading-none font-normal text-signal"
        >
          Proyectos
        </h2>
        <ul className="m-0 flex list-none flex-col gap-[clamp(12px,2.2vh,20px)] p-0">
          {projects.map((project) => (
            <li
              key={project.name}
              data-tape="cassette"
              className="flex flex-wrap items-stretch overflow-hidden rounded-md bg-tape shadow-[0_16px_30px_-12px_rgb(0_0_0/0.8)]"
            >
              <span aria-hidden="true" className="w-[18px] flex-none" style={{ background: project.color }} />
              <div className="flex min-w-0 flex-[1_1_380px] flex-wrap items-baseline gap-x-6 gap-y-1 bg-label px-[22px] py-3 text-[#141414]">
                <h3 className="m-0 font-marker text-[clamp(28px,3.2vw,44px)] leading-[1.1] font-normal">
                  {project.name}
                </h3>
                <p className="m-0 font-mono text-[13px]">{project.stack.join(' · ')}</p>
              </div>
              <div className="flex flex-none items-center gap-2.5 px-[18px] py-3">
                {project.demo && (
                  <a className={buttonClass} href={project.demo} target="_blank" rel="noreferrer">
                    ▶ Visitar
                  </a>
                )}
                <a className={buttonClass} href={project.code} target="_blank" rel="noreferrer">
                  Código
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
