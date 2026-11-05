export interface Project {
  name: string
  stack: string[]
  /** Versión publicada. Todos los proyectos la necesitan para el botón «Visitar». */
  demo: string
  code: string
  /** Color de la franja del casete. */
  color: string
}

export const projects: Project[] = [
  {
    name: 'PequePlan',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    demo: 'https://pequeplan.vercel.app',
    code: 'https://github.com/Jonathan-DLC/pequeplan',
    color: 'var(--color-signal)',
  },
  {
    name: 'Juegosdiarios.gg',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'EmulatorJS'],
    demo: 'https://juegosdiarios-gg.vercel.app',
    code: 'https://github.com/Jonathan-DLC/Juegosdiarios.gg',
    color: 'var(--color-glow)',
  },
  {
    name: 'MiFutbolitoFc',
    stack: ['Next.js', 'JavaScript', 'PostgreSQL'],
    demo: 'https://mi-futbolitofc.vercel.app',
    code: 'https://github.com/Jonathan-DLC/MiFutbolitoFc',
    color: 'var(--color-flare)',
  },
]
