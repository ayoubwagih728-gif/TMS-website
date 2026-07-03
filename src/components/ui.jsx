import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang, locNum } from '../i18n.jsx'

export function Reveal({ children, as: Tag = 'div', delay = 0, className = '', ...rest }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.transitionDelay = delay + 'ms'
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { el.classList.add('in'); io.unobserve(el) } })
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [delay])
  return <Tag ref={ref} className={('reveal ' + className).trim()} {...rest}>{children}</Tag>
}

export function Counter({ to, suffix = '', duration = 1200 }) {
  const ref = useRef(null)
  const [val, setVal] = useState(0)
  const { lang } = useLang()
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        const start = performance.now()
        const tick = (now) => {
          const p = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - p, 3)
          setVal(Math.round(to * eased))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        io.unobserve(el)
      })
    }, { threshold: 0.5 })
    io.observe(el)
    return () => io.disconnect()
  }, [to, duration])
  return <span ref={ref}>{locNum(val, lang)}{locNum(suffix, lang)}</span>
}

export function Marquee({ items }) {
  const content = (
    <span>
      {items.map((it, i) => (
        <span key={i} style={{display:'inline-flex',alignItems:'center',gap:30}}>
          {it}<i className="slash"></i>
        </span>
      ))}
    </span>
  )
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">{content}{content}</div>
    </div>
  )
}

// Same visual language as the Services <Marquee>: dark band, big Anton display
// font, red parallelogram slashes between items. Plus an optional category label
// above and fade masks at the edges. Auto-repeats short lists so the loop is
// always visibly scrolling.
export function ClientMarquee({ label, items, duration = 28 }) {
  const repeats = Math.max(2, Math.ceil(8 / items.length))
  const expanded = Array.from({ length: repeats }, () => items).flat()

  const content = (
    <span className="cm-set">
      {expanded.map((it, i) => (
        <span key={i} className="cm-cell">
          {it}<i className="slash"></i>
        </span>
      ))}
    </span>
  )

  return (
    <div className="cmarquee">
      {label && <div className="cmarquee-lab">{label}</div>}
      <div className="cmarquee-wrap">
        <div className="cmarquee-track" style={{ animationDuration: duration + 's' }}>
          {content}{content}
        </div>
      </div>
    </div>
  )
}

export function CTA({ title, sub, button, to = '/contact' }) {
  return (
    <section className="cta pad">
      <div className="wrap cta-in">
        <Reveal>
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
          <p>{sub}</p>
        </Reveal>
        <Reveal delay={140}>
          <Link className="btn white" to={to}>{button} <span className="btn-arrow">→</span></Link>
        </Reveal>
      </div>
    </section>
  )
}

export function FAQ({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="faq-list">
      {items.map((it, i) => (
        <div key={i} className={'faq-item' + (open === i ? ' open' : '')}>
          <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            <span>{it.q}</span>
            <span className="pm">+</span>
          </button>
          <div className="faq-a"><p>{it.a}</p></div>
        </div>
      ))}
    </div>
  )
}

// Interactive turnkey-process steps. Click any circle to see detailed deliverables
// for that step. Active step glows, other steps dim. Detail panel below shows
// expanded content for the selected step.
export function ProcessStepsInteractive({ steps }) {
  const [active, setActive] = useState(0)
  const cur = steps[active]
  return (
    <>
      <div className="psi-steps">
        {steps.map((s, i) => (
          <button
            key={s.n}
            className={'psi-step' + (active === i ? ' active' : '')}
            onClick={() => setActive(i)}
            aria-pressed={active === i}
          >
            <span className="psi-circle">{s.n}</span>
            <span className="psi-name">{s.h}</span>
            <span className="psi-short">{s.short}</span>
            {i < steps.length - 1 && <span className="psi-line"></span>}
          </button>
        ))}
      </div>
      <div className="psi-detail">
        <div className="psi-detail-key">
          <span className="psi-detail-n">{cur.n}</span>
          <div>
            <h3>{cur.h}</h3>
            <p className="psi-detail-sub">{cur.short}</p>
          </div>
        </div>
        <div className="psi-detail-body">
          <div>
            <div className="psi-lab">DELIVERABLES</div>
            <ul className="psi-list">
              {cur.deliverables.map((d, i) => <li key={i}><span className="psi-tick"></span>{d}</li>)}
            </ul>
          </div>
          <div>
            <div className="psi-lab">DURATION</div>
            <p className="psi-meta">{cur.duration}</p>
            <div className="psi-lab" style={{marginTop:18}}>TEAM</div>
            <p className="psi-meta">{cur.team}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export const Icon = {
  Tank: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 3h6M10 3v5L5 19a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3L14 8V3"/></svg>,
  Conveyor: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="8" width="18" height="8" rx="1"/><circle cx="7" cy="19" r="2"/><circle cx="17" cy="19" r="2"/><path d="M3 12h18"/></svg>,
  Structure: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 21V9l9-6 9 6v12"/><path d="M3 13h18M9 21v-6h6v6"/></svg>,
  Door: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="4" y="3" width="16" height="18"/><path d="M4 7h16M9 12h.01"/></svg>,
  Caravan: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="2" y="7" width="13" height="10"/><path d="M15 10h4l3 3v4h-7"/><circle cx="6" cy="19" r="2"/><circle cx="17" cy="19" r="2"/></svg>,
  Chassis: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></svg>,
  Chute: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M7 4l-4 7 3 2M17 4l4 7-3 2M9 20h6l1-7H8z"/></svg>,
  Fixture: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M14 7l3-3 3 3-3 3M4 20l8-8M4 4l5 5M9 9l2 2"/></svg>,
  Bolt: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M13 2L3 14h7l-1 8 10-12h-7z"/></svg>,
  Shield: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/></svg>,
  Pin: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  Phone: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1.05.36 2.07.7 3a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.93.34 1.95.57 3 .7A2 2 0 0 1 22 16.92z"/></svg>,
  Mail: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 6l10 7 10-7"/></svg>,
  Globe: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/></svg>,
  Building: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="4" y="3" width="16" height="18"/><path d="M8 7h.01M12 7h.01M16 7h.01M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01"/></svg>,
  Food: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M6 3v8a3 3 0 0 0 6 0V3M9 11v10M18 3c-1 0-2 2-2 5s1 4 2 4v9"/></svg>,
  Factory: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 21V8l6 4V8l6 4V5l6 3v13z"/></svg>,
  Tractor: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="7" cy="17" r="3"/><circle cx="17" cy="17" r="2"/><path d="M3 17h1l2-7h6l3 7M10 10V6h4"/></svg>,
  Flame: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2C8 8 6 11 6 14a6 6 0 0 0 12 0c0-3-2-6-6-12z"/></svg>,
  Star: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.4L12 16.8 5.7 21.2 8 13.8 2 9.4h7.6z"/></svg>,
  Sliders: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 12h18M3 6h18M3 18h12"/></svg>,
  Leaf: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 22c5-3 8-7 8-12a8 8 0 0 0-16 0c0 5 3 9 8 12z"/><path d="M12 11a3 3 0 1 0 0-6"/></svg>,
  Check: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>,
  Target: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  Eye: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  Award: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="6"/><path d="M9 13.5L8 22l4-2.5L16 22l-1-8.5"/></svg>,
  LinkedIn: () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8.34 18.34V10.7H5.67v7.64zm-1.34-8.7a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 8.7v-4.4c0-2.32-1.24-3.4-2.9-3.4-1.33 0-1.93.74-2.27 1.26V10.7h-2.67c.04.76 0 7.64 0 7.64h2.67v-4.27c0-.24.02-.48.09-.65.19-.48.62-.98 1.36-.98.96 0 1.34.73 1.34 1.8v4.1z"/></svg>,
  Facebook: () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>,
  Whatsapp: () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.74.46 3.43 1.32 4.93L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.46 14c-.23.65-1.13 1.19-1.86 1.35-.51.11-1.16.2-3.4-.73-2.86-1.18-4.7-4.08-4.84-4.27-.14-.19-1.16-1.55-1.16-2.95s.74-2.09 1-2.38c.27-.29.58-.36.77-.36.19 0 .38 0 .55.01.18.01.41-.07.65.5.23.55.79 1.93.86 2.07.07.14.12.3.02.49-.1.19-.15.3-.29.46-.14.16-.3.36-.43.48-.14.14-.29.29-.13.58.16.29.71 1.17 1.52 1.89 1.04.93 1.92 1.21 2.21 1.36.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.38-.24.64-.14.26.09 1.66.78 1.94.93.29.14.48.21.55.34.07.13.07.74-.16 1.39z"/></svg>,
}
