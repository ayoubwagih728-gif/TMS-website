import { Link } from 'react-router-dom'
import { Reveal, CTA, Icon } from '../components/ui.jsx'
import Logo from '../components/Logo.jsx'
import { useLang, locNum } from '../i18n.jsx'

const TXT = {
  en: {
    mono: 'Products',
    heroTitle: 'Durable metalwork —<br /><em>engineered locally.</em>',
    lead: 'Eight product families, all custom-built to spec. Tanks, conveyors, structures, doors, caravans, chassis, chutes and stainless fixtures — no catalogue constraints.',
    home: 'Home',
    crumb: 'Products',
    idx: 'BROWSE BY USE',
    ht: 'Pick a <em>category.</em>',
    products: 'PRODUCTS',
    view: 'VIEW',
    capLabel: 'FULL CAPABILITIES',
    capHeading: 'Everything we <em>manufacture.</em>',
    capLead: (n) => `${n} in-house fabrication and maintenance capabilities — from welding, laser cutting and stainless tanks to trusses, conveyors, chutes and custom steelwork.`,
    ctaTitle: "Don't see <em>what you need?</em>",
    ctaSub: "Every product is custom-built to spec. Send us your requirement and we'll engineer it.",
    ctaButton: 'Request a Quote',
  },
  ar: {
    mono: 'المنتجات',
    heroTitle: 'أعمال معدنية متينة —<br /><em>مصنّعة محليًا.</em>',
    lead: 'ثماني عائلات من المنتجات، جميعها مُصنّعة حسب الطلب وفق المواصفات. خزانات وسيور نقل وهياكل وأبواب وكرافانات وشاسيهات ومزالق وتجهيزات ستانلس ستيل — بلا قيود الكتالوجات.',
    home: 'الرئيسية',
    crumb: 'المنتجات',
    idx: 'تصفّح حسب الاستخدام',
    ht: 'اختر <em>فئة.</em>',
    products: 'منتجات',
    view: 'عرض',
    capLabel: 'قائمة القدرات الكاملة',
    capHeading: 'كل ما <em>نصنعه.</em>',
    capLead: (n) => `${n} قدرة تصنيع وصيانة داخلية — من اللحام والقطع بالليزر وخزانات الاستانلس إلى الجمالونات والسيور ومزالق المخلفات والأعمال المعدنية الخاصة.`,
    ctaTitle: 'لا تجد <em>ما تحتاجه؟</em>',
    ctaSub: 'كل منتج مُصنّع حسب الطلب وفق المواصفات. أرسل لنا متطلباتك وسنهندسها لك.',
    ctaButton: 'اطلب عرض سعر',
  },
}

export default function Products() {
  const { lang, C } = useLang()
  const { products, productCategories } = C
  const capabilities = C.capabilities || []
  const t = TXT[lang]
  return (
    <>
      <section className="phero">
        <div className="phero-mark"><Logo color="#fff" height={undefined} /></div>
        <div className="wrap">
          <div className="tag"><span className="rule"></span><span className="mono">{t.mono}</span></div>
          <h1 dangerouslySetInnerHTML={{__html: t.heroTitle}} />
          <p className="lead">{t.lead}</p>
          <div className="breadcrumb"><Link to="/">{t.home}</Link> &nbsp;/&nbsp; {t.crumb}</div>
        </div>
      </section>

      {/* Category browser */}
      <section className="content-block">
        <div className="wrap">
          <Reveal className="sec-head"><span className="idx">{t.idx}</span><h2 className="ht" dangerouslySetInnerHTML={{__html: t.ht}} /></Reveal>
          {productCategories.map(cat => (
            <div key={cat.h} style={{marginBottom:40}}>
              <Reveal>
                <div style={{display:'flex',alignItems:'baseline',gap:14,marginBottom:18,paddingBottom:14,borderBottom:'2px solid var(--red)'}}>
                  <h3 style={{fontFamily:'var(--display)',fontSize:'clamp(28px,3.5vw,42px)',color:'var(--ink)',lineHeight:1}}>{cat.h}</h3>
                  <span style={{fontFamily:'var(--mono)',fontSize:11,letterSpacing:'.18em',color:'var(--grey-2)'}}>{locNum(cat.items.length, lang)} {t.products}</span>
                </div>
              </Reveal>
              <Reveal className="pgrid">
                {cat.items.map(slug => {
                  const p = products.find(x => x.slug === slug)
                  if (!p) return null
                  const Ic = Icon[p.icon] || Icon.Check
                  return (
                    <Link to={`/products/${p.slug}`} className="pitem" key={p.slug}>
                      <div className="ico"><Ic /></div>
                      <h4>{p.h}</h4>
                      <p>{p.short}</p>
                      <div className="more">{t.view} <span>→</span></div>
                    </Link>
                  )
                })}
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* Full manufacturing capabilities — real list from company records */}
      <section className="pad-sm cap-sec">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="idx">{t.capLabel}</span>
            <h2 className="ht" dangerouslySetInnerHTML={{__html: t.capHeading}} />
          </Reveal>
          <Reveal as="p" className="cap-lead">{t.capLead(locNum(capabilities.length, lang))}</Reveal>
          <Reveal className="cap-grid">
            {capabilities.map((cap, i) => (
              <div className="cap-item" key={i}>
                <span className="cap-n">{locNum(String(i + 1).padStart(2, '0'), lang)}</span>
                <span className="cap-text">{cap}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CTA title={t.ctaTitle} sub={t.ctaSub} button={t.ctaButton} />
    </>
  )
}
