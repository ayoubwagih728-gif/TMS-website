import { Link, useParams, Navigate } from 'react-router-dom'
import { Reveal, CTA, Icon } from '../components/ui.jsx'
import Logo from '../components/Logo.jsx'
import { useLang } from '../i18n.jsx'

const TXT = {
  en: {
    mono: 'Product',
    home: 'Home',
    crumb: 'Products',
    aboutPrefix: 'About ',
    aboutSuffix: '.',
    desc1: (n) => `Built in-house at our Cairo facility — every ${n} unit goes through our owned-machinery line (laser cutting, CNC forming, precision welding) and is delivered with engineering drawings and operator handover.`,
    specsHead: 'Configurations & specifications',
    specs: [
      'Custom dimensions to your site or factory flow',
      'Stainless or mild steel construction as required',
      'European-standard welding (ARG / CO₂ / aluminium)',
      'QC testing before delivery, on-site commissioning included',
      'Warranty coverage and maintenance documentation',
    ],
    whoHead: 'Who we build these for',
    whoPara: (n) => `TMS ${n} units have been delivered to manufacturers across food & beverage, real estate, heavy industry, pharma and utilities — from multinational FMCG players to Egypt's largest contractors.`,
    asideQuote: 'REQUEST A QUOTE',
    asidePara: 'Tell us scope, location and timeline. Engineering team responds within one business day.',
    getQuote: 'Get a Quote →',
    otherProducts: 'OTHER PRODUCTS',
    caseStudies: 'CASE STUDIES',
    caseHt: 'Real <em>installations.</em>',
    featured: 'Want yours <br/>featured here?',
    startProject: 'Start a Project →',
    ctaTitle: (n) => `Need ${n} <em>for your site?</em>`,
    ctaSub: 'Custom-built to spec, fabricated in-house, installed and commissioned by our team.',
    ctaButton: 'Request a Quote',
  },
  ar: {
    mono: 'منتج',
    home: 'الرئيسية',
    crumb: 'المنتجات',
    aboutPrefix: 'حول ',
    aboutSuffix: '.',
    desc1: (n) => `تُصنّع في مقرنا بالقاهرة — تمر كل وحدة من ${n} عبر خط الماكينات المملوكة لنا (قطع بالليزر، تشكيل CNC، لحام دقيق) وتُسلّم مع الرسومات الهندسية وتسليم تشغيلي للمشغّلين.`,
    specsHead: 'التكوينات والمواصفات',
    specs: [
      'أبعاد مخصّصة حسب موقعك أو مسار مصنعك',
      'تصنيع من الستانلس ستيل أو الصلب الطري حسب الحاجة',
      'لحام وفق المعايير الأوروبية (ARG / CO₂ / ألومنيوم)',
      'اختبارات ضبط جودة قبل التسليم، مع التشغيل في الموقع',
      'تغطية بالضمان ووثائق الصيانة',
    ],
    whoHead: 'لمن نصنع هذه المنتجات',
    whoPara: (n) => `سُلّمت وحدات ${n} من TMS لمصنّعين في قطاعات الأغذية والمشروبات والعقارات والصناعات الثقيلة والأدوية والمرافق — من كبرى شركات السلع الاستهلاكية متعددة الجنسيات إلى أكبر المقاولين في مصر.`,
    asideQuote: 'اطلب عرض سعر',
    asidePara: 'أخبرنا بالنطاق والموقع والجدول الزمني. يرد الفريق الهندسي خلال يوم عمل واحد.',
    getQuote: 'اطلب عرض سعر →',
    otherProducts: 'منتجات أخرى',
    caseStudies: 'دراسات حالة',
    caseHt: 'تركيبات <em>حقيقية.</em>',
    featured: 'تريد إبراز <br/>مشروعك هنا؟',
    startProject: 'ابدأ مشروعًا →',
    ctaTitle: (n) => `هل تحتاج ${n} <em>لموقعك؟</em>`,
    ctaSub: 'مُصنّع حسب الطلب وفق المواصفات، ويُصنّع داخليًا، ويُركّب ويُشغّل بواسطة فريقنا.',
    ctaButton: 'اطلب عرض سعر',
  },
}

export default function ProductDetail() {
  const { lang, C } = useLang()
  const { products, projects } = C
  const t = TXT[lang]
  const { slug } = useParams()
  const p = products.find(x => x.slug === slug)
  if (!p) return <Navigate to="/products" replace />
  const Ic = Icon[p.icon] || Icon.Check
  const name = lang === 'en' ? p.h.toLowerCase() : p.h

  // Show related projects if any sector name matches the product family loosely
  const related = projects.slice(0, 2)
  const otherProducts = products.filter(x => x.slug !== slug).slice(0, 4)

  return (
    <>
      <section className="phero">
        <div className="phero-mark"><Logo color="#fff" height={undefined} /></div>
        <div className="wrap">
          <div className="tag"><span className="rule"></span><span className="mono">{t.mono}</span></div>
          <h1>{p.h}</h1>
          <p className="lead">{p.long}</p>
          <div className="breadcrumb"><Link to="/">{t.home}</Link> &nbsp;/&nbsp; <Link to="/products">{t.crumb}</Link> &nbsp;/&nbsp; {p.h}</div>
        </div>
      </section>

      <section className="content-block">
        <div className="wrap cb-grid">
          <Reveal>
            <div style={{width:60,height:60,color:'var(--red)',marginBottom:24}}><Ic /></div>
            <h2>{t.aboutPrefix}<em>{name}{t.aboutSuffix}</em></h2>
            <p>{p.long}</p>
            <p>{t.desc1(name)}</p>

            <h3>{t.specsHead}</h3>
            <ul>
              {t.specs.map((s, i) => <li key={i}>{s}</li>)}
            </ul>

            <h3>{t.whoHead}</h3>
            <p>{t.whoPara(name)}</p>
          </Reveal>

          <Reveal className="cb-aside" delay={140}>
            <h5>{t.asideQuote}</h5>
            <p>{t.asidePara}</p>
            <Link className="btn" to="/contact" style={{width:'100%',justifyContent:'center'}}>{t.getQuote}</Link>
            <hr style={{border:0,borderTop:'1px solid var(--line)',margin:'24px 0'}} />
            <h5>{t.otherProducts}</h5>
            {otherProducts.map(o => {
              const OIc = Icon[o.icon] || Icon.Check
              return (
                <Link key={o.slug} to={`/products/${o.slug}`} style={{display:'flex',alignItems:'center',gap:12,padding:'12px 0',borderBottom:'1px solid var(--line)',color:'var(--ink)'}}>
                  <span style={{width:20,height:20,color:'var(--red)',flex:'0 0 20px'}}><OIc /></span>
                  <span style={{fontWeight:600,fontSize:14}}>{o.h}</span>
                </Link>
              )
            })}
          </Reveal>
        </div>
      </section>

      {/* Related projects */}
      <section className="projects-band pad">
        <div className="wrap">
          <Reveal className="sec-head"><span className="idx">{t.caseStudies}</span><h2 className="ht" dangerouslySetInnerHTML={{__html: t.caseHt}} /></Reveal>
          <Reveal className="proj-grid">
            {related.map(pr => (
              <Link key={pr.slug} to="/projects" className="proj-card">
                <span className="arrow">→</span>
                <div className="ptag">{pr.sector}</div>
                <div className="pclient">{pr.client}</div>
                <h4>{pr.h}</h4>
                <p>{pr.short}</p>
              </Link>
            ))}
            <div className="proj-card" style={{justifyContent:'center',alignItems:'center',textAlign:'center'}}>
              <h4 style={{position:'relative',zIndex:2}} dangerouslySetInnerHTML={{__html: t.featured}} />
              <Link className="btn white" to="/contact" style={{position:'relative',zIndex:2,marginTop:18}}>{t.startProject}</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA title={t.ctaTitle(name)} sub={t.ctaSub} button={t.ctaButton} />
    </>
  )
}
