// Isotipo de AUVANCE en vector (mismo trazado que el logo de auvance.com.ar). Toma el color del texto.
const MARK_PATH =
  'M494.6 262Q512 240 529 262L650 462H617L512.5 293L428.7 430H489L470 462H376Z M512 352L580 462H544.5L510 406H480Z'

export default function AuvanceCredit() {
  return (
    <div className="auvance-credit">
      <a
        href="https://auvance.com.ar"
        target="_blank"
        rel="noopener"
        aria-label="Desarrollado por AUVANCE"
        className="auvance-credit__link"
      >
        <span className="auvance-credit__by">Desarrollado por</span>
        <span className="auvance-credit__brand">
          <svg className="auvance-credit__mark" viewBox="374 238 278 226" aria-hidden="true">
            <path fill="currentColor" d={MARK_PATH} />
          </svg>
          <span className="auvance-credit__name">AUVANCE</span>
        </span>
      </a>
    </div>
  )
}
