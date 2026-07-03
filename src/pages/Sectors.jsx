import { Link } from 'react-router-dom'
import { Reveal, CTA, Icon } from '../components/ui.jsx'
import Logo from '../components/Logo.jsx'
import { useLang } from '../i18n.jsx'

const TXT = {
  en: {
    heroMono: 'Sectors',
    heroTitle: 'Industries we<br /><em>already serve.</em>',
    heroLead: 'Six sectors, fourteen named accounts, two hundred completed projects. We speak food safety, structural load, chemical compatibility, hotel-grade finish — whatever your industry needs.',
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Sectors',
    idxSix: 'SIX SECTORS',
    sixHeading: 'Where TMS <em>delivers.</em>',
    idxEdge: 'CROSS-SECTOR EDGE',
    edgeHeading: 'Why our breadth <em>is your advantage.</em>',
    card1Title: 'Compliance fluency',
    card1Body: 'Food-safety, fire, hygiene, structural — we build to the standard your regulator expects.',
    card2Title: 'Cross-pollination',
    card2Body: 'European durability from heavy industry brought to F&B. Stainless hygiene from dairy brought to pharma. We bring tested patterns across.',
    card3Title: 'Sector references',
    card3Body: 'Multi-year relationships with Pepsi, Ezz Steel, Henkel and Air Liquide — references your team can call.',
    ctaTitle: 'Work in a <em>different sector?</em>',
    ctaSub: 'Our 200+ completed projects span industries from utilities to pharma. Tell us what you need.',
    ctaButton: 'Talk to Engineering',
  },
  ar: {
    heroMono: 'القطاعات',
    heroTitle: 'قطاعات<br /><em>نخدمها بالفعل.</em>',
    heroLead: 'ستة قطاعات، وأربعة عشر عميلاً مرجعياً، ومئتا مشروع مكتمل. نتحدث لغة سلامة الغذاء، والأحمال الإنشائية، والتوافق الكيميائي، والتشطيبات بمستوى الفنادق — أياً كان ما يحتاجه قطاعك.',
    breadcrumbHome: 'الرئيسية',
    breadcrumbCurrent: 'القطاعات',
    idxSix: 'ستة قطاعات',
    sixHeading: 'أين تُنجز <em>TMS.</em>',
    idxEdge: 'ميزة عبر القطاعات',
    edgeHeading: 'لماذا يمثّل اتساع خبرتنا <em>ميزةً لك.</em>',
    card1Title: 'إتقان الامتثال',
    card1Body: 'سلامة الغذاء، والحريق، والنظافة، والإنشاءات — نبني وفق المعيار الذي تتوقعه جهتك الرقابية.',
    card2Title: 'التلاقح بين القطاعات',
    card2Body: 'متانة أوروبية من الصناعات الثقيلة نأتي بها إلى قطاع الأغذية والمشروبات. نظافة الستانلس من صناعة الألبان ننقلها إلى قطاع الأدوية. ننقل الأنماط المختبَرة عبر القطاعات.',
    card3Title: 'مراجع قطاعية',
    card3Body: 'علاقات ممتدة لسنوات مع Pepsi وEzz Steel وHenkel وAir Liquide — مراجع يمكن لفريقك الاتصال بها.',
    ctaTitle: 'هل تعمل في <em>قطاع مختلف؟</em>',
    ctaSub: 'تمتد مشاريعنا المكتملة التي تتجاوز 200 مشروع عبر صناعات من المرافق إلى الأدوية. أخبرنا بما تحتاجه.',
    ctaButton: 'تحدّث مع الهندسة',
  },
}

export default function Sectors() {
  const { lang, C } = useLang()
  const { sectors } = C
  const t = TXT[lang]
  return (
    <>
      <section className="phero">
        <div className="phero-mark"><Logo color="#fff" height={undefined} /></div>
        <div className="wrap">
          <div className="tag"><span className="rule"></span><span className="mono">{t.heroMono}</span></div>
          <h1 dangerouslySetInnerHTML={{ __html: t.heroTitle }} />
          <p className="lead">{t.heroLead}</p>
          <div className="breadcrumb"><Link to="/">{t.breadcrumbHome}</Link> &nbsp;/&nbsp; {t.breadcrumbCurrent}</div>
        </div>
      </section>

      <section style={{background:'var(--bone)',padding:'110px 0'}}>
        <div className="wrap">
          <Reveal className="sec-head"><span className="idx">{t.idxSix}</span><h2 className="ht" dangerouslySetInnerHTML={{ __html: t.sixHeading }} /></Reveal>
          <Reveal className="sectors-grid">
            {sectors.map(s => {
              const Ic = Icon[s.icon] || Icon.Check
              return (
                <div className="sector-card" key={s.slug}>
                  <div className="ico"><Ic /></div>
                  <h4>{s.h}</h4>
                  <p>{s.p}</p>
                  <div className="cl">{s.clients.join(' · ')}</div>
                </div>
              )
            })}
          </Reveal>
        </div>
      </section>

      {/* Why us — applied to sectors */}
      <section className="content-block">
        <div className="wrap">
          <Reveal className="sec-head"><span className="idx">{t.idxEdge}</span><h2 className="ht" dangerouslySetInnerHTML={{ __html: t.edgeHeading }} /></Reveal>
          <div className="xslider">
            {[
              { h: t.card1Title, p: t.card1Body },
              { h: t.card2Title, p: t.card2Body },
              { h: t.card3Title, p: t.card3Body },
            ].map((c, i) => (
              <Reveal className="xslide" delay={i * 100} key={i}>
                <h4>{c.h}</h4>
                <p>{c.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA title={t.ctaTitle} sub={t.ctaSub} button={t.ctaButton} />
    </>
  )
}
