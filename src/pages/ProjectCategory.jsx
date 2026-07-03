import { useState, useEffect, useCallback } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Reveal, CTA, Icon } from '../components/ui.jsx'
import Logo from '../components/Logo.jsx'
import { galleries, galleryBySlug } from '../data/galleries.js'
import { useLang } from '../i18n.jsx'

const TXT = {
  en: {
    home: 'Home',
    heroTag: 'Project Gallery',
    heroLead: (blurb, count) => `${blurb} — ${count} photographs from real TMS installations and fabrication.`,
    breadcrumb: 'Projects',
    photosCaps: 'PHOTOS',
    heading: 'Inside the <em>work.</em>',
    keepBrowsing: 'KEEP BROWSING',
    otherHeading: 'Other <em>categories.</em>',
    photos: 'photos',
    ctaTitle: (g) => `Need ${g.en.toLowerCase()} <em>for your site?</em>`,
    ctaSub: 'Custom-built to spec, fabricated in-house, installed and commissioned by our team.',
    ctaButton: 'Request a Quote',
  },
  ar: {
    home: 'الرئيسية',
    heroTag: 'معرض المشروعات',
    heroLead: (blurb, count) => `${blurb} — ${count} صورة من عمليات تركيب وتصنيع فعلية لدى TMS.`,
    breadcrumb: 'المشروعات',
    photosCaps: 'صورة',
    heading: 'من داخل <em>العمل.</em>',
    keepBrowsing: 'واصل التصفح',
    otherHeading: 'فئات <em>أخرى.</em>',
    photos: 'صورة',
    ctaTitle: (g) => `هل تحتاج ${g.ar} <em>في موقعك؟</em>`,
    ctaSub: 'مصنّع حسب المواصفات، بتصنيع داخلي، وتركيب وتشغيل بواسطة فريقنا.',
    ctaButton: 'اطلب عرض سعر',
    blurbs: {
      'platforms': 'منصات وصول وسلالم وميزانين وممرات وسلالم صعود.',
      'tanks': 'خزانات تخزين وصوامع وأوعية ضغط من الصلب والستانلس.',
      'civil-works': 'أعمال خرسانية وأساسات وحزم مدنية متكاملة في الموقع.',
      'fume-hoods': 'مظلات مطابخ ستانلس ومجاري شفط الأبخرة.',
      'doors': 'أبواب صناعية وستائر دوّارة وبوابات أمنية.',
      'conveyors': 'سيور ناقلة بالحزام والبكرات لمناولة المواد.',
      'hangars': 'هناجر بهيكل معدني وجمالونات أسقف.',
      'garbage-chute': 'أنظمة مجاري نفايات بالجاذبية للمباني متعددة الطوابق.',
      'caravans': 'كرفانات مواقع متنقلة ووحدات متحركة بالحاويات.',
      'cooling-towers': 'هياكل أبراج تبريد وتكسيات عزل حراري.',
      'grating': 'مشبكات معدنية وألواح أرضيات شبكية وأغطية قنوات.',
    },
  },
}

export default function ProjectCategory() {
  const { lang } = useLang()
  const t = TXT[lang] || TXT.en
  const { slug } = useParams()
  const g = galleryBySlug[slug]
  const [active, setActive] = useState(-1) // lightbox image index, -1 = closed

  const close = useCallback(() => setActive(-1), [])
  const next  = useCallback(() => setActive(i => (i + 1) % g.images.length), [g])
  const prev  = useCallback(() => setActive(i => (i - 1 + g.images.length) % g.images.length), [g])

  useEffect(() => {
    if (active < 0) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [active, close, next, prev])

  if (!g) return <Navigate to="/projects" replace />
  const Ic = Icon[g.icon] || Icon.Check
  const others = galleries.filter(x => x.slug !== slug)
  const title = lang === 'ar' ? g.ar : g.en
  const blurb = lang === 'ar' ? t.blurbs[g.slug] : g.blurb

  return (
    <>
      <section className="phero">
        <div className="phero-mark"><Logo color="#fff" height={undefined} /></div>
        <div className="wrap">
          <div className="tag"><span className="rule"></span><span className="mono">{t.heroTag}</span></div>
          <h1>{title}</h1>
          <p className="lead">{t.heroLead(blurb, g.count)}</p>
          <div className="breadcrumb"><Link to="/">{t.home}</Link> &nbsp;/&nbsp; <Link to="/projects">{t.breadcrumb}</Link> &nbsp;/&nbsp; {title}</div>
        </div>
      </section>

      <section className="content-block">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="idx">{String(g.count).padStart(2, '0')} {t.photosCaps}</span>
            <h2 className="ht" dangerouslySetInnerHTML={{ __html: t.heading }} />
          </Reveal>

          <div className="masonry">
            {g.images.map((img, i) => (
              <button
                key={img}
                className="masonry-item"
                onClick={() => setActive(i)}
                aria-label={`Open image ${i + 1} of ${g.count}`}
              >
                <img
                  src={`/gallery/${g.slug}/${img}`}
                  alt={`${title} — ${i + 1}`}
                  loading={i < 6 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <span className="masonry-ov"><span className="masonry-plus">+</span></span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Other categories */}
      <section className="projects-band pad">
        <div className="wrap">
          <Reveal className="sec-head"><span className="idx">{t.keepBrowsing}</span><h2 className="ht" dangerouslySetInnerHTML={{ __html: t.otherHeading }} /></Reveal>
          <Reveal className="gal-grid">
            {others.slice(0, 4).map(o => {
              const OIc = Icon[o.icon] || Icon.Check
              const oTitle = lang === 'ar' ? o.ar : o.en
              const oBlurb = lang === 'ar' ? t.blurbs[o.slug] : o.blurb
              return (
                <Link key={o.slug} to={`/projects/${o.slug}`} className="gal-card">
                  <div className="gal-card-img">
                    <img src={`/gallery/${o.slug}/${o.images[0]}`} alt={oTitle} loading="lazy" decoding="async" />
                    <span className="gal-card-count">{o.count} {t.photos}</span>
                  </div>
                  <div className="gal-card-body">
                    <span className="gal-card-ic"><OIc /></span>
                    <div><h4>{oTitle}</h4><p>{oBlurb}</p></div>
                    <span className="gal-card-arrow">→</span>
                  </div>
                </Link>
              )
            })}
          </Reveal>
        </div>
      </section>

      <CTA title={t.ctaTitle(g)} sub={t.ctaSub} button={t.ctaButton} />

      {/* Lightbox */}
      {active >= 0 && (
        <div className="lightbox" onClick={close}>
          <button className="lb-close" onClick={close} aria-label="Close">×</button>
          <button className="lb-nav lb-prev" onClick={(e) => { e.stopPropagation(); prev() }} aria-label="Previous">‹</button>
          <figure className="lb-figure" onClick={(e) => e.stopPropagation()}>
            <img src={`/gallery/${g.slug}/${g.images[active]}`} alt={`${title} — ${active + 1}`} />
            <figcaption>{title} &nbsp;·&nbsp; {active + 1} / {g.count}</figcaption>
          </figure>
          <button className="lb-nav lb-next" onClick={(e) => { e.stopPropagation(); next() }} aria-label="Next">›</button>
        </div>
      )}
    </>
  )
}
