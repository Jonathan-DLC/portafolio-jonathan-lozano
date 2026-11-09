export interface ContactLink {
  label: string
  href: string
  accent?: boolean
  download?: boolean
}

/**
 * Tres niveles de énfasis para la jerarquía visual: lo que lo inspira (`interest`), cómo
 * quiere que sea su trabajo (`value`) y la promesa final (`accent`). El resto va atenuado.
 */
export type AboutTone = 'interest' | 'value' | 'accent'

export interface AboutSegment {
  text: string
  tone?: AboutTone
}

const links: ContactLink[] = [
  { label: 'GitHub', href: 'https://github.com/Jonathan-DLC' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jonathan-david-lozano-calderon-developer-full-stack/' },
  { label: 'Correo', href: 'mailto:jonathandavidlozano583@gmail.com' },
  { label: 'Descargar CV', href: `${import.meta.env.BASE_URL}CV_Jonathan_Lozano.pdf`, accent: true, download: true },
]

// Versión corta del «Sobre mí» del documento de marca personal: la profesora pidió menos texto.
const about: AboutSegment[] = [
  { text: 'Los' },
  { text: 'videojuegos', tone: 'interest' },
  { text: ', la' },
  { text: 'música', tone: 'interest' },
  { text: 'y la' },
  { text: 'estética futurista', tone: 'interest' },
  { text: 'me trajeron al desarrollo web. Construyo aplicaciones' },
  { text: 'funcionales', tone: 'value' },
  { text: ',' },
  { text: 'limpias', tone: 'value' },
  { text: 'y' },
  { text: 'envolventes', tone: 'value' },
  { text: 'que' },
  { text: 'dejen huella', tone: 'accent' },
  { text: 'en quien las usa.' },
]

export const profile = {
  name: 'Jonathan Lozano',
  firstName: 'Jonathan',
  lastName: 'Lozano',
  role: 'Desarrollador web',
  about,
  links,
}
