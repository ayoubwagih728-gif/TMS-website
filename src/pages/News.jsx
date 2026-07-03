import { Link } from 'react-router-dom'
import { Reveal, CTA } from '../components/ui.jsx'
import Logo from '../components/Logo.jsx'
import { useLang } from '../i18n.jsx'

const TXT = {
  en: {
    heroMono: 'News & Updates',
    heroTitle: 'Recent<br /><em>completions.</em>',
    heroLead: "A running record of what's leaving the TMS facility — project handovers, plant commissioning, new installations across food & beverage, hospitality, agriculture and material handling.",
    crumbHome: 'Home',
    crumbHere: 'News',
    feedIdx: 'PROJECT FEED',
    feedHt: "What we've <em>delivered.</em>",
    readMore: 'READ MORE →',
    stayUpdated: 'STAY UPDATED',
    newsletterHeading: 'Get project updates from <em style="font-style:italic;color:var(--red);transform:skewX(-5deg);display:inline-block">TMS.</em>',
    newsletterPara: "Subscribe for project announcements, factory news and behind-the-scenes from Egypt's industrial steel partner.",
    emailPlaceholder: 'Your email',
    subscribe: 'Subscribe →',
    subscribed: 'Subscribed ✓',
    ctaTitle: 'Got a project we should <em>add to this list?</em>',
    ctaSub: 'Tell us what you need built. Our engineering team responds within one business day.',
    ctaButton: 'Start a Project',
  },
  ar: {
    heroMono: 'الأخبار والمستجدات',
    heroTitle: 'إنجازات<br /><em>حديثة.</em>',
    heroLead: 'سجل متجدد لما يخرج من منشأة TMS — تسليم المشاريع، وتشغيل المصانع، والتركيبات الجديدة عبر قطاعات الأغذية والمشروبات والضيافة والزراعة ومناولة المواد.',
    crumbHome: 'الرئيسية',
    crumbHere: 'الأخبار',
    feedIdx: 'سجل المشاريع',
    feedHt: 'ما الذي <em>سلّمناه.</em>',
    readMore: 'اقرأ المزيد →',
    stayUpdated: 'ابقَ على اطلاع',
    newsletterHeading: 'احصل على مستجدات المشاريع من <em style="font-style:italic;color:var(--red);transform:skewX(-5deg);display:inline-block">TMS.</em>',
    newsletterPara: 'اشترك للحصول على إعلانات المشاريع وأخبار المصنع ولمحات من وراء الكواليس لشريك مصر في الصلب الصناعي.',
    emailPlaceholder: 'بريدك الإلكتروني',
    subscribe: 'اشترك →',
    subscribed: 'تم الاشتراك ✓',
    ctaTitle: 'لديك مشروع يستحق <em>الإضافة إلى هذه القائمة؟</em>',
    ctaSub: 'أخبرنا بما تحتاج إلى تنفيذه. يرد فريقنا الهندسي خلال يوم عمل واحد.',
    ctaButton: 'ابدأ مشروعًا',
  },
}

export default function News() {
  const { lang, C } = useLang()
  const { news } = C
  const t = TXT[lang]
  return (
    <>
      <section className="phero">
        <div className="phero-mark"><Logo color="#fff" height={undefined} /></div>
        <div className="wrap">
          <div className="tag"><span className="rule"></span><span className="mono">{t.heroMono}</span></div>
          <h1 dangerouslySetInnerHTML={{__html: t.heroTitle}} />
          <p className="lead">{t.heroLead}</p>
          <div className="breadcrumb"><Link to="/">{t.crumbHome}</Link> &nbsp;/&nbsp; {t.crumbHere}</div>
        </div>
      </section>

      <section className="news-band pad">
        <div className="wrap">
          <Reveal className="sec-head"><span className="idx">{t.feedIdx}</span><h2 className="ht" dangerouslySetInnerHTML={{__html: t.feedHt}} /></Reveal>
          <Reveal className="news-grid">
            {news.map((n, i) => (
              <Link key={i} to="/projects" className="news-card">
                <div className="nhdr"><span className="ntag">{n.tag}</span><span>{n.date}</span></div>
                <div className="nbody">
                  <h4>{n.h}</h4>
                  <p>{n.p}</p>
                  <span className="read">{t.readMore}</span>
                </div>
              </Link>
            ))}
          </Reveal>

          <Reveal style={{marginTop:50,background:'#fff',border:'1px solid var(--line)',padding:'40px',textAlign:'center'}}>
            <p style={{fontFamily:'var(--mono)',fontSize:11,letterSpacing:'.2em',color:'var(--red)',marginBottom:14}}>{t.stayUpdated}</p>
            <h3 style={{fontFamily:'var(--display)',fontSize:'clamp(28px,3.5vw,40px)',color:'var(--ink)',marginBottom:14}} dangerouslySetInnerHTML={{__html: t.newsletterHeading}} />
            <p style={{color:'var(--grey)',fontSize:15,lineHeight:1.6,maxWidth:520,margin:'0 auto 24px'}}>{t.newsletterPara}</p>
            <form onSubmit={(e)=>{e.preventDefault();e.target.querySelector('button').textContent=t.subscribed}} style={{display:'flex',gap:10,maxWidth:420,margin:'0 auto',flexWrap:'wrap'}}>
              <input type="email" placeholder={t.emailPlaceholder} required style={{flex:1,minWidth:200,padding:'12px 14px',border:'1px solid var(--line)',background:'var(--bone)',fontFamily:'inherit',fontSize:14}} />
              <button type="submit" className="btn" style={{padding:'12px 22px'}}>{t.subscribe}</button>
            </form>
          </Reveal>
        </div>
      </section>

      <CTA title={t.ctaTitle} sub={t.ctaSub} button={t.ctaButton} />
    </>
  )
}
