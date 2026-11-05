export interface SkillGroup {
  name: string
  skills: string[]
  /** Color de la franja del casete. */
  color: string
}

// Sale de las fortalezas del documento de marca personal y del stack de sus proyectos.
export const skillGroups: SkillGroup[] = [
  {
    name: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Angular', 'Tailwind CSS', 'Bootstrap'],
    color: 'var(--color-signal)',
  },
  {
    name: 'Backend y datos',
    skills: ['PHP', 'MySQL', 'PostgreSQL', 'Firebase', 'Java', 'API REST', 'Node.js'],
    color: 'var(--color-glow)',
  },
  {
    name: 'Flujo de trabajo',
    skills: ['Git', 'GitHub', 'Pull requests', 'Diseño responsive', 'Vercel'],
    color: 'var(--color-flare)',
  },
]
