export interface ContactLink {
  label: string
  /** `null` mientras Jonathan no comparta el dato; se muestra como pendiente. */
  href: string | null
  accent?: boolean
}

const links: ContactLink[] = [
  { label: 'GitHub', href: 'https://github.com/Jonathan-DLC' },
  { label: 'LinkedIn', href: null },
  { label: 'Correo', href: null },
  { label: 'Descargar CV', href: null, accent: true },
]

export const profile = {
  name: 'Jonathan Lozano',
  firstName: 'Jonathan',
  lastName: 'Lozano',
  role: 'Desarrollador web',
  // Texto literal de la sección «Sobre mí» del documento de marca personal.
  about:
    'Inspirado desde siempre por los videojuegos, la música y la estética futurista, descubrí en el desarrollo web la herramienta ideal para darle forma a mis propias ideas. Mi objetivo en cada línea de código es construir aplicaciones funcionales, limpias y envolventes que dejen huella en quien las usa.',
  aboutHighlights: ['dejen', 'huella'],
  links,
}
