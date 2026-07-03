import { Link } from 'react-router-dom'
import { Reveal, CTA, Icon, ClientMarquee } from '../components/ui.jsx'
import Logo from '../components/Logo.jsx'
import { clients } from '../data/content.js'
import { galleries } from '../data/galleries.js'
import { useLang, locNum } from '../i18n.jsx'

const TXT = {
  en: {
    home: 'Home',
    heroTag: 'Project Gallery',
    heroTitle: "What we've<br/><em>actually built.</em>",
    heroLead: (total) => `${total} real photographs from installations across food &amp; beverage, hospitality, agriculture and heavy industry — grouped by what we make. Pick a category to see the work.`,
    breadcrumb: 'Projects',
    indexLabel: 'BROWSE THE WORK',
    heading: 'Explore by <em>category.</em>',
    marquee1: 'REAL ESTATE & CONSTRUCTION',
    marquee2: 'INDUSTRIAL · FMCG · MULTINATIONAL',
    photos: 'photos',
    ledgerLabel: 'PROJECT LEDGER',
    ledgerHeading: 'Selected <em>delivered projects.</em>',
    ledgerLead: (n) => `${n} completed contracts across food &amp; beverage, real estate, agriculture and public utilities — with client and delivery time.`,
    colProject: 'Project',
    colClient: 'Client',
    colDuration: 'Duration',
    daysUnit: (d) => `${d} days`,
    ctaTitle: 'Your next project <em>here?</em>',
    ctaSub: "Get our engineering team on a call, walk us through what you need, and we'll come back with a buildable plan.",
    ctaButton: 'Start a Project',
  },
  ar: {
    home: 'الرئيسية',
    heroTag: 'معرض المشروعات',
    heroTitle: 'ما أنجزناه<br/><em>فعليًا.</em>',
    heroLead: (total) => `${total} صورة حقيقية من عمليات تركيب في قطاعات الأغذية والمشروبات والضيافة والزراعة والصناعات الثقيلة — مصنّفة حسب ما نصنعه. اختر فئة لمشاهدة الأعمال.`,
    breadcrumb: 'المشروعات',
    indexLabel: 'تصفّح الأعمال',
    heading: 'تصفّح حسب <em>الفئة.</em>',
    marquee1: 'العقارات والإنشاءات',
    marquee2: 'الصناعة · السلع الاستهلاكية · الشركات متعددة الجنسيات',
    photos: 'صورة',
    ledgerLabel: 'سجل المشروعات',
    ledgerHeading: 'مشروعات <em>منفَّذة مختارة.</em>',
    ledgerLead: (n) => `${n} عقدًا منجزًا في قطاعات الأغذية والمشروبات والعقارات والزراعة والمرافق العامة — مع اسم العميل ومدة التنفيذ.`,
    colProject: 'المشروع',
    colClient: 'العميل',
    colDuration: 'مدة التنفيذ',
    daysUnit: (d) => `${d} يوم`,
    ctaTitle: 'مشروعك القادم <em>هنا؟</em>',
    ctaSub: 'تحدّث مع فريقنا الهندسي، اشرح لنا ما تحتاجه، وسنعود إليك بخطة قابلة للتنفيذ.',
    ctaButton: 'ابدأ مشروعًا',
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

export default function Projects() {
  const { lang, C } = useLang()
  const t = TXT[lang] || TXT.en
  const total = galleries.reduce((n, g) => n + g.count, 0)
  const ledger = C.projectLedger || []

  return (
    <>
      <section className="phero">
        <div className="phero-mark"><Logo color="#fff" height={undefined} /></div>
        <div className="wrap">
          <div className="tag"><span className="rule"></span><span className="mono">{t.heroTag}</span></div>
          <h1 dangerouslySetInnerHTML={{ __html: t.heroTitle }} />
          <p className="lead" dangerouslySetInnerHTML={{ __html: t.heroLead(locNum(total.toLocaleString(), lang)) }} />
          <div className="breadcrumb"><Link to="/">{t.home}</Link> &nbsp;/&nbsp; {t.breadcrumb}</div>
        </div>
      </section>

      <section className="projects-band pad">
        <div className="wrap">
          <Reveal className="sec-head"><span className="idx">{t.indexLabel}</span><h2 className="ht" dangerouslySetInnerHTML={{ __html: t.heading }} /></Reveal>
          <Reveal className="gal-grid">
            {galleries.map((g, i) => {
              const Ic = Icon[g.icon] || Icon.Check
              const title = lang === 'ar' ? g.ar : g.en
              const blurb = lang === 'ar' ? t.blurbs[g.slug] : g.blurb
              return (
                <Link key={g.slug} to={`/projects/${g.slug}`} className="gal-card" style={{ '--d': `${(i % 4) * 60}ms` }}>
                  <div className="gal-card-img">
                    <img
                      src={`/gallery/${g.slug}/${g.images[0]}`}
                      alt={title}
                      loading={i < 4 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                    <span className="gal-card-count">{locNum(g.count, lang)} {t.photos}</span>
                  </div>
                  <div className="gal-card-body">
                    <span className="gal-card-ic"><Ic /></span>
                    <div>
                      <h4>{title}</h4>
                      <p>{blurb}</p>
                    </div>
                    <span className="gal-card-arrow">→</span>
                  </div>
                </Link>
              )
            })}
          </Reveal>
        </div>
      </section>

      {/* Real project ledger — name · client · duration, from company records */}
      <section className="pad-sm ledger-sec">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="idx">{t.ledgerLabel}</span>
            <h2 className="ht" dangerouslySetInnerHTML={{ __html: t.ledgerHeading }} />
          </Reveal>
          <Reveal as="p" className="ledger-lead" dangerouslySetInnerHTML={{ __html: t.ledgerLead(locNum(ledger.length, lang)) }} />
          <Reveal className="ledger">
            <div className="ledger-head">
              <span>#</span>
              <span>{t.colProject}</span>
              <span>{t.colClient}</span>
              <span>{t.colDuration}</span>
            </div>
            {ledger.map((p, i) => (
              <div className="ledger-row" key={i}>
                <span className="ledger-n">{locNum(i + 1, lang)}</span>
                <span className="ledger-name">{p.name}</span>
                <span className="ledger-client">{p.client}</span>
                <span className="ledger-dur">{locNum(t.daysUnit(p.days), lang)}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Client logo marquees — stacked, two labelled categories */}
      <ClientMarquee label={t.marquee1} items={clients.realEstate} duration={28} />
      <ClientMarquee label={t.marquee2} items={clients.industrial} duration={40} />

      <CTA title={t.ctaTitle} sub={t.ctaSub} button={t.ctaButton} />
    </>
  )
}
