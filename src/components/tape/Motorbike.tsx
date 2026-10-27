/** Moto de perfil con estela, faro y ruedas giratorias. Los centros de las ruedas (72,102) y
 *  (252,102) se repiten en `startAmbient` como `svgOrigin`; si se mueven aquí, se mueven allá. */
export function Motorbike() {
  return (
    <svg viewBox="0 0 320 130" className="block size-full overflow-visible">
      <path
        data-tape="trail"
        d="M30 88 C-60 86 -220 92 -760 88"
        fill="none"
        stroke="#FF3B30"
        strokeOpacity="0.25"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        data-tape="trail"
        d="M30 88 C-60 86 -220 92 -760 88"
        fill="none"
        stroke="#FF3B30"
        strokeOpacity="0.85"
        strokeWidth="3"
        strokeDasharray="60 14"
        strokeLinecap="round"
      />
      <path
        data-tape="trail"
        d="M40 78 C-40 76 -180 80 -560 78"
        fill="none"
        stroke="#FF6B00"
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeDasharray="30 20"
        strokeLinecap="round"
      />
      <polygon points="306,80 520,52 520,116" fill="#FFF3E0" fillOpacity="0.08" />
      <g data-tape="wheel-rear">
        <circle cx="72" cy="102" r="26" fill="#0B0F19" stroke="#2A2F3D" strokeWidth="7" />
        <path d="M72 79 V125 M49 102 H95 M56 86 L88 118 M88 86 L56 118" stroke="#3A4256" strokeWidth="2" />
        <circle cx="72" cy="102" r="7" fill="#FF6B00" />
      </g>
      <g data-tape="wheel-front">
        <circle cx="252" cy="102" r="26" fill="#0B0F19" stroke="#2A2F3D" strokeWidth="7" />
        <path d="M252 79 V125 M229 102 H275 M236 86 L268 118 M268 86 L236 118" stroke="#3A4256" strokeWidth="2" />
        <circle cx="252" cy="102" r="7" fill="#FF6B00" />
      </g>
      <path d="M120 58 C130 34 168 26 196 38 L186 54 Z" fill="#2A3A5A" />
      <path d="M128 60 L150 84 L178 86" fill="none" stroke="#2A3A5A" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M186 44 L232 58" stroke="#2A3A5A" strokeWidth="8" strokeLinecap="round" />
      <circle cx="203" cy="33" r="13" fill="#2A3A5A" />
      <path d="M206 26 C212 27 216 31 216 37 L205 37 Z" fill="#00F0FF" />
      <path
        d="M28 96 C26 78 44 64 78 62 L150 60 C168 60 178 68 194 68 C214 50 244 42 274 48 C296 52 308 70 306 86 C305 94 298 98 290 98 L282 98 C280 84 268 76 252 76 C236 76 224 86 222 98 L104 98 C102 84 90 76 72 76 C56 76 44 86 42 98 Z"
        fill="#FF6B00"
      />
      <path d="M96 62 C110 52 140 50 160 56 L152 62 Z" fill="#161F30" />
      <path d="M228 60 C240 47 262 43 282 49 L264 60 Z" fill="#0B0F19" stroke="#00F0FF" strokeWidth="1.5" />
      <path d="M48 90 C120 82 200 80 298 82" fill="none" stroke="#FFF3E0" strokeWidth="3" />
      <path d="M140 74 H200" stroke="#B84A00" strokeWidth="2" />
      <ellipse cx="304" cy="80" rx="4" ry="5" fill="#FFF3E0" />
      <rect x="24" y="82" width="9" height="8" rx="2" fill="#FF3B30" />
    </svg>
  )
}
