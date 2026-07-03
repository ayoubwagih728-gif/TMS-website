import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

// ── Adjustable timings (ms) ──────────────────────────────────────────────
// Tweak these to tune how long the loader stays up.
const FIRST_LOAD_MS = 900   // brand moment on the very first visit (all devices)
const NAV_MS        = 650    // quick transition on in-app navigation (desktop)
const SHOW_ON_MOBILE_NAV = false // show the full-screen loader on mobile navigations too?

export default function PageLoader() {
  const { pathname } = useLocation()
  const [loading, setLoading] = useState(true)
  const [firstLoad, setFirstLoad] = useState(true)

  useEffect(() => {
    // First page load: show the brand moment on every device.
    if (firstLoad) {
      setLoading(true)
      const t = setTimeout(() => { setLoading(false); setFirstLoad(false) }, FIRST_LOAD_MS)
      return () => clearTimeout(t)
    }
    // Subsequent in-app navigations: skip the full-screen loader on mobile by
    // default (it felt janky re-appearing on every drawer tap). Desktop keeps
    // the quick transition for the brand feel.
    const isDesktop = typeof window !== 'undefined'
      && window.matchMedia('(min-width: 681px)').matches
    if (!isDesktop && !SHOW_ON_MOBILE_NAV) {
      setLoading(false)
      return
    }
    setLoading(true)
    const t = setTimeout(() => setLoading(false), NAV_MS)
    return () => clearTimeout(t)
  }, [pathname])

  return (
    <div className={'pload' + (loading ? ' on' : '')} aria-hidden={!loading}>
      <div className="pload-bg"></div>
      <div className="pload-inner">
        <svg className="pload-logo" viewBox="0 0 120 70" aria-label="TMS">
          {/* Self-drawing: strokes draw in, then fill solid */}
          <g>
            <polygon points="6,46 44,46 30,62 6,62" className="pl-shape pl-1" />
            <polygon points="20,30 58,30 70,30 56,46 18,46" className="pl-shape pl-2" />
            <polygon points="44,14 82,14 68,30 30,30" className="pl-shape pl-3" />
          </g>
        </svg>
        <div className="pload-bar"><div className="pload-bar-fill"></div></div>
        <div className="pload-text">TMS</div>
      </div>
    </div>
  )
}
