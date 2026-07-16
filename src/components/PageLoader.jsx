import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import logoUrl from '../assets/tms-logo.png'

// ── Adjustable timings (ms) ──────────────────────────────────────────────
// Tweak these to tune how long the loader stays up.
const FIRST_LOAD_MS = 1700  // brand moment on the very first visit (all devices)
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
        <div className="pload-logo">
          <img className="pload-logo-img" src={logoUrl} alt="TMS" />
          {/* Shine glint, masked to the logo silhouette, sweeps periodically */}
          <span
            className="pload-logo-shine"
            style={{ WebkitMaskImage: `url(${logoUrl})`, maskImage: `url(${logoUrl})` }}
            aria-hidden="true"
          />
        </div>
        <div className="pload-bar"><div className="pload-bar-fill"></div></div>
        <div className="pload-text">TMS</div>
      </div>
    </div>
  )
}
