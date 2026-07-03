import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation, Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { Icon } from './ui.jsx'
import { useLang } from '../i18n.jsx'

const NAV = {
  en: { home:'Home', about:'About', products:'Products', services:'Services', projects:'Projects',
        sectors:'Sectors', news:'News', contact:'Contact', quote:'Get a Quote',
        custom:'Every product is custom-built to spec.', viewAll:'View all products →',
        menu:'Menu', close:'Close menu', call:'Call us', lang:'العربية' },
  ar: { home:'الرئيسية', about:'من نحن', products:'المنتجات', services:'الخدمات', projects:'المشروعات',
        sectors:'القطاعات', news:'الأخبار', contact:'اتصل بنا', quote:'اطلب عرض سعر',
        custom:'كل منتج يُصنّع حسب المواصفات المطلوبة.', viewAll:'عرض كل المنتجات ←',
        menu:'القائمة', close:'إغلاق القائمة', call:'اتصل بنا', lang:'English' },
}

export default function Header() {
  const { lang, setLang, C } = useLang()
  const t = NAV[lang]
  const { productCategories, products, company } = C
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const closeTimer = useRef(null)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the drawer on route change
  useEffect(() => { setOpen(false); setMegaOpen(false) }, [pathname])

  // Lock body scroll + close on Escape while the mobile drawer is open
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey) }
  }, [open])

  const openMega = () => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null }
    setMegaOpen(true)
  }
  const closeMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setMegaOpen(false), 220)
  }
  const toggleMega = (e) => {
    e.stopPropagation()
    setMegaOpen(m => !m)
  }
  const closeDrawer = () => { setOpen(false); setMegaOpen(false) }

  const cls = ['', isHome ? 'on-dark' : '', scrolled ? 'scrolled' : '', open ? 'nav-open' : ''].join(' ').trim()

  return (
    <header className={cls}>
      <div className="wrap nav">
        <Link to="/" className="brand" aria-label="TMS home">
          <Logo />
          <span className="wordmark">TMS</span>
        </Link>

        <nav
          id="mobile-nav"
          className={'navlinks' + (open ? ' open' : '')}
          aria-hidden={undefined}
        >
          {/* Drawer header — mobile only */}
          <div className="drawer-head">
            <span className="drawer-brand">TMS</span>
            <button className="drawer-close" onClick={closeDrawer} aria-label={t.close}>
              <span></span><span></span>
            </button>
          </div>

          <NavLink to="/" end onClick={closeDrawer}>{t.home}</NavLink>
          <NavLink to="/about" onClick={closeDrawer}>{t.about}</NavLink>
          <div
            className={'has-mega' + (megaOpen ? ' mega-open' : '')}
            onMouseEnter={openMega}
            onMouseLeave={closeMega}
          >
            <button onClick={toggleMega} aria-expanded={megaOpen}>
              {t.products} <span className="chev">▾</span>
            </button>
            <div
              className="mega"
              onMouseEnter={openMega}
              onMouseLeave={closeMega}
            >
              <div className="mega-grid">
                {productCategories.map(cat => (
                  <div className="mega-col" key={cat.h}>
                    <h6>{cat.h}</h6>
                    {cat.items.map(slug => {
                      const p = products.find(x => x.slug === slug)
                      return p ? (
                        <Link key={slug} to={`/products/${slug}`} onClick={closeDrawer}>
                          {p.h}
                        </Link>
                      ) : null
                    })}
                  </div>
                ))}
              </div>
              <div className="mega-foot">
                <span>{t.custom}</span>
                <Link to="/products" onClick={closeDrawer}>{t.viewAll}</Link>
              </div>
            </div>
          </div>
          <NavLink to="/services" onClick={closeDrawer}>{t.services}</NavLink>
          <NavLink to="/projects" onClick={closeDrawer}>{t.projects}</NavLink>
          <NavLink to="/sectors" onClick={closeDrawer}>{t.sectors}</NavLink>
          <NavLink to="/news" onClick={closeDrawer}>{t.news}</NavLink>
          <NavLink to="/contact" onClick={closeDrawer}>{t.contact}</NavLink>
          <NavLink to="/contact" className="nav-cta" onClick={closeDrawer}>{t.quote}</NavLink>

          {/* Drawer footer — mobile only */}
          <div className="drawer-foot">
            <a className="df-call" href={`tel:${company.phoneIntl}`}>
              <Icon.Phone /> {company.phone}
            </a>
            <button className="df-lang" onClick={() => { setLang(lang === 'ar' ? 'en' : 'ar') }}>
              <Icon.Globe /> {t.lang}
            </button>
          </div>
        </nav>

        <button
          className={'burger' + (open ? ' open' : '')}
          aria-label={open ? t.close : t.menu}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(o => !o)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      {/* Backdrop */}
      <div
        className={'nav-overlay' + (open ? ' show' : '')}
        onClick={closeDrawer}
        aria-hidden="true"
      />
    </header>
  )
}
