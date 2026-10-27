/** Patrones y filtros SVG compartidos por las capas; se declaran una sola vez en la página. */
export function TapeDefs() {
  return (
    <svg aria-hidden="true" width="0" height="0" className="absolute">
      <defs>
        <pattern id="tape-city-lights" width="960" height="420" patternUnits="userSpaceOnUse">
          <g strokeLinecap="round">
            <path d="M20 40 H180" stroke="#00F0FF" strokeOpacity="0.55" strokeWidth="3" />
            <path d="M260 90 H520" stroke="#F59E0B" strokeOpacity="0.5" strokeWidth="2" />
            <path d="M600 30 H700" stroke="#FF2E88" strokeOpacity="0.6" strokeWidth="3" />
            <path d="M90 150 H240" stroke="#F8FAFC" strokeOpacity="0.25" strokeWidth="2" />
            <path d="M420 190 H640" stroke="#00F0FF" strokeOpacity="0.35" strokeWidth="4" />
            <path d="M740 130 H930" stroke="#F59E0B" strokeOpacity="0.45" strokeWidth="2" />
            <path d="M160 250 H360" stroke="#FF2E88" strokeOpacity="0.35" strokeWidth="2" />
            <path d="M560 290 H880" stroke="#F8FAFC" strokeOpacity="0.2" strokeWidth="3" />
            <path d="M30 330 H120" stroke="#F59E0B" strokeOpacity="0.5" strokeWidth="3" />
            <path d="M300 380 H560" stroke="#00F0FF" strokeOpacity="0.3" strokeWidth="2" />
            <path d="M700 360 H780" stroke="#FF2E88" strokeOpacity="0.55" strokeWidth="3" />
          </g>
        </pattern>
        <pattern id="tape-lane" width="160" height="10" patternUnits="userSpaceOnUse">
          <rect x="0" y="3" width="90" height="4" fill="#F8FAFC" fillOpacity="0.5" />
        </pattern>
        <pattern id="tape-scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
          <rect width="4" height="1.6" fill="#000" fillOpacity="0.38" />
        </pattern>
        <filter id="tape-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.55 0" />
        </filter>
      </defs>
    </svg>
  )
}
