# Portafolio de Jonathan Lozano

Una sola página que se recorre como una cinta VHS. Al hacer scroll, cada sección se apaga como un
televisor viejo y la siguiente se enciende, mientras el OSD marca avance o rebobinado.

Vite, React, TypeScript, Tailwind CSS 4 y GSAP con ScrollTrigger. Las versiones están en
`package.json`.

## Comandos

```bash
npm install
npm run dev       # servidor de desarrollo en http://localhost:5173
npm run lint      # ESLint; no debe imprimir nada
npm run build     # tsc -b && vite build
npm run preview   # sirve la build de producción
```

Un cambio está listo cuando `npm run lint` y `npm run build` pasan.

## Dónde está cada cosa

| Ruta | Contenido |
| --- | --- |
| `src/data/profile.ts` | Nombre, rol, texto de «Sobre mí» con el tono de cada fragmento y enlaces de contacto. |
| `src/data/projects.ts` | Proyectos con su stack, demo y repositorio. Todos necesitan demo para el botón «Visitar». |
| `src/data/skills.ts` | Habilidades agrupadas en Frontend, Backend y datos, y Flujo de trabajo. |
| `src/components/tape/` | Una capa por sección (`HeroLayer`, `AboutLayer`, `ProjectsLayer`, `SkillsLayer`, `ContactLayer`), el OSD con el monograma JL, los efectos VHS y `TapeStage`, que las monta. |
| `src/components/tape/animations.ts` | Toda la animación: la intro, los bucles del hero y la línea de tiempo atada al scroll. |
| `docs/` | Documento de marca personal del que salen la paleta, las secciones y el texto. Es interno y no se sube al repositorio. |

## Cómo funciona el scroll

`TapeStage` es una pista de `700svh` con un escenario fijo encima (`position: sticky`). El scroll
no mueve el contenido. Avanza una línea de tiempo de GSAP que apaga una capa y enciende la
siguiente. Los botones de salto (visibles al navegar con Tab) usan `labelToScroll` para llegar a
cada sección ya encendida.

La intro y la línea de tiempo del scroll animan elementos distintos a propósito: si compartieran
uno, un scroll durante la intro dejaría el hero apagado al volver arriba.

Con «reducir movimiento» activado en el sistema no hay intro ni bucles, y las capas solo se
funden.

## Por hacer

- Imagen para compartir el enlace en redes (`og:image`).

## Créditos

Portafolio de [Jonathan Lozano](https://github.com/Jonathan-DLC).
[dony](https://github.com/dony-aep) ayudó a proponer la idea de la cinta VHS y a llevarla a
código.
