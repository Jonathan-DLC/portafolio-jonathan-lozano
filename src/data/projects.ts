export interface Project {
  name: string
  stack: string[]
  /** Versión publicada; `null` si el proyecto solo corre en local. */
  demo: string | null
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
    name: 'Sistema Académico',
    stack: ['Angular', 'PHP', 'MySQL'],
    demo: null,
    // El repositorio no está público en la cuenta de Jonathan; mientras tanto apunta al perfil.
    code: 'https://github.com/Jonathan-DLC',
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
