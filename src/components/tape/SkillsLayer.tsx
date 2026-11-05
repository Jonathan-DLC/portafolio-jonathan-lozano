import { skillGroups } from '@/data/skills'

export function SkillsLayer() {
  return (
    <section
      id="habilidades"
      data-tape="layer-skills"
      aria-labelledby="habilidades-titulo"
      className="absolute inset-0 z-[2] flex items-center bg-night"
    >
      <div className="mx-auto w-full max-w-[1180px] px-[clamp(20px,5vw,64px)]">
        <h2
          id="habilidades-titulo"
          className="mt-0 mb-[clamp(18px,3vh,32px)] font-vhs text-[clamp(40px,5vw,64px)] leading-none font-normal text-signal"
        >
          Habilidades
        </h2>
        <ul className="m-0 grid list-none gap-[clamp(12px,2.2vh,20px)] p-0 md:grid-cols-3">
          {skillGroups.map((group) => (
            <li
              key={group.name}
              data-tape="skill-case"
              className="flex flex-col overflow-hidden rounded-md bg-tape shadow-[0_16px_30px_-12px_rgb(0_0_0/0.8)]"
            >
              <span aria-hidden="true" className="h-[10px] flex-none" style={{ background: group.color }} />
              <h3 className="m-0 bg-label px-[18px] py-2 font-marker text-[clamp(22px,2.2vw,30px)] leading-[1.15] font-normal text-[#141414]">
                {group.name}
              </h3>
              <ul className="m-0 flex list-none flex-wrap gap-2 px-[18px] py-3.5 md:py-[18px]">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="border border-ink/35 px-2 font-vhs text-[clamp(20px,1.8vw,24px)] leading-[1.35] text-ink"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
