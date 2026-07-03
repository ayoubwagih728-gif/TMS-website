import { Link } from 'react-router-dom'
import { Reveal, Counter, CTA, Icon } from '../components/ui.jsx'
import Logo from '../components/Logo.jsx'
import { useLang } from '../i18n.jsx'

const edgeIcons = [Icon.Chassis, Icon.Bolt, Icon.Shield, Icon.Pin]
const valueIcons = [Icon.Star, Icon.Sliders, Icon.Leaf]

const TXT = {
  en: {
    heroTag: 'About TMS',
    heroTitle: "We shape Egypt's<br /><em>steel future.</em>",
    heroLead: "A seven-year track record, a portfolio of Egypt's most demanding industrial names, and a single commitment — precision, delivered end-to-end.",
    breadcrumbHome: 'Home',
    breadcrumbAbout: 'About',
    whoWeAre: 'WHO WE ARE',
    whoLead: 'Technology for <em>Manufacturing Solutions.</em>',
    whoBody1: "Founded in 2018, TMS specialises in metal forming, fabrication, industrial maintenance and turnkey project delivery. We serve production lines, material handling, food processing and public utilities across Egypt — with full in-house capability from engineering drawings through on-site commissioning.",
    whoBody2: "We're one of Egypt's leading industrial steel and stainless-steel manufacturers, with owned machinery, an 80-strong engineering team, and recurring relationships with the country's largest industrial names.",
    atAGlance: 'AT A GLANCE',
    mvIdx: 'MISSION & VISION',
    mvHeading: 'What drives <em>TMS.</em>',
    missionLab: 'MISSION',
    missionHeading: 'Replace expensive imports <em>with local precision.</em>',
    missionP: "We deliver European-standard fabrication at Egyptian economics — engineering, building and installing the industrial steel and stainless systems Egypt's largest manufacturers, developers and operators rely on, all under one roof.",
    visionLab: 'VISION',
    visionHeading: "Shape Egypt's <em>steel future.</em>",
    visionP: "To be the partner Egyptian industry calls first — not because we're the cheapest, but because we're the one operations teams stop calling about after install. Compliance-grade quality, long-term partnerships, no shortcuts.",
    edgeIdx: 'OUR EDGE',
    edgeHeading: "We don't outsource. <em>We own the line.</em>",
    edgeIntro: 'Most competitors send your job through three subcontractors. We keep design, fabrication and installation under one roof — faster lead times, tighter quality control, and a single point of accountability.',
    valuesIdx: 'VALUES',
    valuesHeading: 'What we stand <em>behind.</em>',
    quote: "We're not the cheapest steel vendor in Egypt. <em style=\"font-style:italic;transform:skewX(-5deg);display:inline-block\">We're the one your operations team stops calling about after install.</em>",
    cite: '— TMS ENGINEERING TEAM',
    partnershipIdx: 'THE PARTNERSHIP',
    partnershipHeading: 'Why decision-makers <em>choose TMS.</em>',
    banner: "Let's build what your business actually needs — not just what's available off the shelf.",
    ctaTitle: 'Work with <em>TMS.</em>',
    ctaSub: 'Request a site visit, a quote, or a conversation with our engineering team.',
    ctaButton: 'Get in Touch',
  },
  ar: {
    heroTag: 'عن TMS',
    heroTitle: 'نصنع مستقبل الحديد<br /><em>في مصر.</em>',
    heroLead: 'سجل حافل يمتد سبع سنوات، ومحفظة تضم أكثر الأسماء الصناعية تطلبًا في مصر، والتزام واحد — دقة تُنفَّذ من البداية إلى النهاية.',
    breadcrumbHome: 'الرئيسية',
    breadcrumbAbout: 'عن الشركة',
    whoWeAre: 'من نحن',
    whoLead: 'تكنولوجيا <em>حلول التصنيع.</em>',
    whoBody1: 'تأسست TMS عام 2018 وتتخصص في تشكيل المعادن والتصنيع والصيانة الصناعية وتسليم المشاريع المتكاملة. نخدم خطوط الإنتاج ومناولة المواد وتصنيع الأغذية والمرافق العامة في جميع أنحاء مصر — بقدرة داخلية كاملة من الرسومات الهندسية حتى التشغيل في الموقع.',
    whoBody2: 'نحن من أبرز مصنّعي الحديد والفولاذ المقاوم للصدأ الصناعي في مصر، بماكينات مملوكة لنا، وفريق هندسي قوامه 80 مهندسًا، وعلاقات متكررة مع أكبر الأسماء الصناعية في البلاد.',
    atAGlance: 'نظرة سريعة',
    mvIdx: 'المهمة والرؤية',
    mvHeading: 'ما يقود <em>TMS.</em>',
    missionLab: 'المهمة',
    missionHeading: 'استبدال الواردات المكلفة <em>بدقة محلية.</em>',
    missionP: 'نقدّم تصنيعًا بمعايير أوروبية وباقتصاديات مصرية — نهندس ونبني ونركّب أنظمة الحديد والفولاذ المقاوم للصدأ الصناعية التي يعتمد عليها كبار المصنّعين والمطوّرين والمشغّلين في مصر، كل ذلك تحت سقف واحد.',
    visionLab: 'الرؤية',
    visionHeading: 'نصنع مستقبل الحديد <em>في مصر.</em>',
    visionP: 'أن نكون الشريك الذي تتصل به الصناعة المصرية أولًا — ليس لأننا الأرخص، بل لأننا الشريك الذي تتوقف فرق التشغيل عن الاتصال بشأنه بعد التركيب. جودة تلبي معايير الامتثال، وشراكات طويلة الأمد، دون أي حلول التفافية.',
    edgeIdx: 'ما يميّزنا',
    edgeHeading: 'لا نلجأ للتعهيد. <em>نمتلك خط الإنتاج بأكمله.</em>',
    edgeIntro: 'معظم المنافسين يمررون مشروعك عبر ثلاثة مقاولين من الباطن. أما نحن فنُبقي التصميم والتصنيع والتركيب تحت سقف واحد — مواعيد تسليم أسرع، ورقابة أشد على الجودة، ونقطة مساءلة واحدة.',
    valuesIdx: 'قيمنا',
    valuesHeading: 'ما نؤمن <em>به.</em>',
    quote: 'لسنا أرخص مورّد للحديد في مصر. <em style="font-style:italic;transform:skewX(-5deg);display:inline-block">بل نحن المورّد الذي يتوقف فريق التشغيل لديك عن الاتصال بشأنه بعد التركيب.</em>',
    cite: '— فريق TMS الهندسي',
    partnershipIdx: 'الشراكة',
    partnershipHeading: 'لماذا يختار صنّاع القرار <em>TMS.</em>',
    banner: 'لنبنِ ما يحتاجه عملك فعلًا — لا مجرد ما هو متاح جاهزًا على الرفوف.',
    ctaTitle: 'اعمل مع <em>TMS.</em>',
    ctaSub: 'اطلب زيارة ميدانية، أو عرض سعر، أو محادثة مع فريقنا الهندسي.',
    ctaButton: 'تواصل معنا',
  },
}

export default function About() {
  const { lang, C } = useLang()
  const { stats, edge, values, reasons } = C
  const t = TXT[lang]
  return (
    <>
      <section className="phero">
        <div className="phero-mark"><Logo color="#fff" height={undefined} /></div>
        <div className="wrap">
          <div className="tag"><span className="rule"></span><span className="mono">{t.heroTag}</span></div>
          <h1 dangerouslySetInnerHTML={{ __html: t.heroTitle }} />
          <p className="lead">{t.heroLead}</p>
          <div className="breadcrumb"><Link to="/">{t.breadcrumbHome}</Link> &nbsp;/&nbsp; {t.breadcrumbAbout}</div>
        </div>
      </section>

      <section className="about-teaser pad">
        <div className="wrap about-teaser-grid">
          <Reveal>
            <p className="mono" style={{color:'var(--red)',marginBottom:14}}>{t.whoWeAre}</p>
            <p className="lead" dangerouslySetInnerHTML={{ __html: t.whoLead }} />
            <p className="body">{t.whoBody1}</p>
            <p className="body">{t.whoBody2}</p>
          </Reveal>
          <Reveal className="about-stats" delay={140}>
            <h5>{t.atAGlance}</h5>
            <div className="stat-grid">
              {stats.map(s => (
                <div className="s" key={s.label}>
                  <div className="n"><Counter to={s.n} suffix={s.suffix} /></div>
                  <div className="l">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mv pad">
        <div className="wrap">
          <Reveal className="sec-head"><span className="idx">{t.mvIdx}</span><h2 className="ht" dangerouslySetInnerHTML={{ __html: t.mvHeading }} /></Reveal>
          <div className="mv-grid">
            <Reveal className="mv-card">
              <div className="ico"><Icon.Target /></div>
              <div className="lab">{t.missionLab}</div>
              <h3 dangerouslySetInnerHTML={{ __html: t.missionHeading }} />
              <p>{t.missionP}</p>
            </Reveal>
            <Reveal className="mv-card" delay={140}>
              <div className="ico"><Icon.Eye /></div>
              <div className="lab">{t.visionLab}</div>
              <h3 dangerouslySetInnerHTML={{ __html: t.visionHeading }} />
              <p>{t.visionP}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Edge */}
      <section className="content-block">
        <div className="wrap">
          <Reveal className="sec-head"><span className="idx">{t.edgeIdx}</span><h2 className="ht" dangerouslySetInnerHTML={{ __html: t.edgeHeading }} /></Reveal>
          <Reveal as="p" style={{maxWidth:760,color:'var(--grey)',fontSize:17,lineHeight:1.7,marginBottom:40}}>{t.edgeIntro}</Reveal>
          <Reveal className="edge-grid">
            {edge.map((e, i) => {
              const Ic = edgeIcons[i] || Icon.Check
              return (
                <div key={e.h} className="edge-cell">
                  <span style={{flex:'0 0 40px',width:40,height:40,color:'var(--red)'}}><Ic /></span>
                  <div>
                    <h4 style={{fontFamily:'var(--black)',fontSize:19,color:'var(--ink)',marginBottom:8}}>{e.h}</h4>
                    <p style={{color:'var(--grey)',fontSize:14,lineHeight:1.6}}>{e.p}</p>
                  </div>
                </div>
              )
            })}
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="vpills">
        <div className="wrap">
          <Reveal className="sec-head"><span className="idx">{t.valuesIdx}</span><h2 className="ht" dangerouslySetInnerHTML={{ __html: t.valuesHeading }} /></Reveal>
          <Reveal className="values-grid">
            {values.map((v, i) => {
              const Ic = valueIcons[i] || Icon.Check
              return (
                <div key={v.h} style={{background:'#fff',border:'1px solid var(--line)',padding:'40px 32px'}}>
                  <div style={{width:42,height:42,color:'var(--red)',marginBottom:18}}><Ic /></div>
                  <h4 style={{fontFamily:'var(--black)',fontSize:22,color:'var(--ink)',marginBottom:12}}>{v.h}</h4>
                  <p style={{color:'var(--grey)',fontSize:15,lineHeight:1.6}}>{v.p}</p>
                </div>
              )
            })}
          </Reveal>
        </div>
      </section>

      {/* Pull-quote */}
      <section style={{background:'linear-gradient(135deg,var(--red-dark),var(--red-deep))',color:'#fff',position:'relative',overflow:'hidden',padding:'110px 0'}}>
        <div className="wrap" style={{position:'relative',zIndex:2,maxWidth:900}}>
          <Reveal>
            <div style={{fontFamily:'var(--display)',fontSize:110,lineHeight:.5,color:'rgba(255,255,255,.4)'}}>“</div>
            <blockquote style={{fontFamily:'var(--display)',fontSize:'clamp(30px,4.6vw,60px)',lineHeight:1.02,margin:'10px 0 24px'}} dangerouslySetInnerHTML={{ __html: t.quote }} />
            <cite style={{fontStyle:'normal',fontFamily:'var(--mono)',fontSize:12,letterSpacing:'.18em',opacity:.85}}>{t.cite}</cite>
          </Reveal>
        </div>
      </section>

      {/* Reasons / partnership */}
      <section style={{background:'var(--bone)',padding:'110px 0'}}>
        <div className="wrap">
          <Reveal className="sec-head"><span className="idx">{t.partnershipIdx}</span><h2 className="ht" dangerouslySetInnerHTML={{ __html: t.partnershipHeading }} /></Reveal>
          <Reveal style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}} className="reasons-grid">
            {reasons.map(([h,p]) => (
              <div key={h} style={{background:'#fff',padding:34,borderLeft:'4px solid var(--red)'}}>
                <h4 style={{fontFamily:'var(--black)',fontSize:18,color:'var(--ink)',marginBottom:10,display:'flex',alignItems:'center',gap:12}}>
                  <span style={{width:24,height:24,flex:'0 0 24px',color:'var(--red)'}}><Icon.Check /></span>
                  {h}
                </h4>
                <p style={{color:'var(--grey)',fontSize:14,lineHeight:1.6}}>{p}</p>
              </div>
            ))}
          </Reveal>
          <Reveal style={{marginTop:34,background:'var(--red)',color:'#fff',textAlign:'center',padding:26,fontFamily:'var(--black)',fontSize:'clamp(16px,2vw,22px)'}}>{t.banner}</Reveal>
        </div>
      </section>

      <CTA title={t.ctaTitle} sub={t.ctaSub} button={t.ctaButton} />
    </>
  )
}
