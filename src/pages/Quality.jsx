import { Link } from 'react-router-dom'
import { Reveal, CTA, Icon } from '../components/ui.jsx'
import Logo from '../components/Logo.jsx'
import { useLang } from '../i18n.jsx'

const stdIcons = [Icon.Bolt, Icon.Award, Icon.Food, Icon.Flame, Icon.Structure, Icon.Shield]

const TXT = {
  en: {
    heroMono: 'Quality &amp; Standards',
    heroTitle: 'Compliance-grade<br /><em>by default.</em>',
    heroLead: "Food-safety. Fire-rated. Structural. European durability. The standards Egypt's largest industrial buyers expect — engineered in at the drawing stage, verified before delivery.",
    crumbHome: 'Home',
    crumbHere: 'Quality',
    standardsIdx: 'STANDARDS WE BUILD TO',
    standardsHt: 'Six pillars of <em>quality.</em>',
    certsHeading: 'CERTIFICATIONS &amp; COMPLIANCE',
    certsPara: 'TMS work is fabricated to international welding, food-safety, fire and structural standards. Specific certification documentation is available on request for tendered projects.',
    certBadges: [
      { h: 'Welding QMS', p: 'Process control & welder qualifications' },
      { h: 'Food-Safety', p: '316 stainless · TIG · CIP' },
      { h: 'Fire Code', p: 'Chutes, tanks, doors' },
      { h: 'Structural', p: 'Hangars & warehouses' },
    ],
    certNote: 'Cert badges to be replaced with verified logos once provided by the TMS engineering team.',
    qcIdx: 'QC PROCESS',
    qcHt: 'How we keep <em>quality consistent.</em>',
    qcSteps: [
      ['01', 'Engineering review', 'Drawings checked against spec before fabrication starts.'],
      ['02', 'In-process QC', 'Welds, dimensions and finishes verified at each fabrication stage.'],
      ['03', 'Pre-delivery test', 'Functional testing before anything leaves our facility.'],
      ['04', 'Commissioning', 'On-site verification, as-built drawings, operator handover.'],
    ],
    ctaTitle: 'Need full compliance <em>documentation?</em>',
    ctaSub: 'Send us your spec or tender. Our engineering team can package certifications, welder qualifications and as-built drawings for your project.',
    ctaButton: 'Request Documentation',
  },
  ar: {
    heroMono: 'الجودة والمعايير',
    heroTitle: 'مطابقة للمعايير<br /><em>بشكل افتراضي.</em>',
    heroLead: 'سلامة غذائية. مقاومة للحريق. إنشائية. متانة أوروبية. المعايير التي يتوقعها أكبر المشترين الصناعيين في مصر — مصمَّمة منذ مرحلة الرسم، ومتحقَّق منها قبل التسليم.',
    crumbHome: 'الرئيسية',
    crumbHere: 'الجودة',
    standardsIdx: 'المعايير التي نعمل وفقها',
    standardsHt: 'ست ركائز <em>للجودة.</em>',
    certsHeading: 'الشهادات والمطابقة',
    certsPara: 'تُصنَّع أعمال TMS وفق المعايير الدولية للحام وسلامة الغذاء والحريق والإنشاءات. تتوفر مستندات الشهادات المحددة عند الطلب للمشاريع المطروحة في المناقصات.',
    certBadges: [
      { h: 'نظام إدارة جودة اللحام', p: 'ضبط العمليات ومؤهلات اللحّامين' },
      { h: 'السلامة الغذائية', p: 'ستانلس 316 · TIG · CIP' },
      { h: 'كود الحريق', p: 'مزالق وخزانات وأبواب' },
      { h: 'إنشائي', p: 'حظائر ومستودعات' },
    ],
    certNote: 'سيتم استبدال شارات الشهادات بشعارات موثَّقة فور توفيرها من فريق هندسة TMS.',
    qcIdx: 'عملية ضبط الجودة',
    qcHt: 'كيف نحافظ على <em>جودة ثابتة.</em>',
    qcSteps: [
      ['01', 'المراجعة الهندسية', 'يتم فحص الرسومات مقابل المواصفات قبل بدء التصنيع.'],
      ['02', 'ضبط الجودة أثناء التصنيع', 'يتم التحقق من اللحامات والأبعاد والتشطيبات في كل مرحلة تصنيع.'],
      ['03', 'اختبار ما قبل التسليم', 'اختبار وظيفي قبل خروج أي منتج من منشأتنا.'],
      ['04', 'التشغيل والتسليم', 'تحقق ميداني، ورسومات كما نُفِّذت، وتسليم للمشغِّل.'],
    ],
    ctaTitle: 'تحتاج إلى <em>مستندات مطابقة كاملة؟</em>',
    ctaSub: 'أرسل لنا مواصفاتك أو مناقصتك. يستطيع فريقنا الهندسي تجهيز الشهادات ومؤهلات اللحّامين والرسومات كما نُفِّذت لمشروعك.',
    ctaButton: 'اطلب المستندات',
  },
}

export default function Quality() {
  const { lang, C } = useLang()
  const { standards } = C
  const t = TXT[lang]
  return (
    <>
      <section className="phero">
        <div className="phero-mark"><Logo color="#fff" height={undefined} /></div>
        <div className="wrap">
          <div className="tag"><span className="rule"></span><span className="mono" dangerouslySetInnerHTML={{__html: t.heroMono}} /></div>
          <h1 dangerouslySetInnerHTML={{__html: t.heroTitle}} />
          <p className="lead">{t.heroLead}</p>
          <div className="breadcrumb"><Link to="/">{t.crumbHome}</Link> &nbsp;/&nbsp; {t.crumbHere}</div>
        </div>
      </section>

      <section className="content-block">
        <div className="wrap">
          <Reveal className="sec-head"><span className="idx">{t.standardsIdx}</span><h2 className="ht" dangerouslySetInnerHTML={{__html: t.standardsHt}} /></Reveal>
          <Reveal style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:0,border:'1px solid var(--line)',background:'#fff'}}>
            {standards.map((s, i) => {
              const Ic = stdIcons[i] || Icon.Check
              const isRight = i % 2 === 1
              const isLastRow = i >= standards.length - 2
              return (
                <div key={s.h} style={{
                  padding:'38px 40px',
                  borderRight: isRight ? 'none' : '1px solid var(--line)',
                  borderBottom: isLastRow ? 'none' : '1px solid var(--line)',
                  display:'flex',gap:20
                }}>
                  <span style={{flex:'0 0 40px',width:40,height:40,color:'var(--red)'}}><Ic /></span>
                  <div>
                    <h4 style={{fontFamily:'var(--black)',fontSize:19,color:'var(--ink)',marginBottom:8}}>{s.h}</h4>
                    <p style={{color:'var(--grey)',fontSize:14,lineHeight:1.6}}>{s.p}</p>
                  </div>
                </div>
              )
            })}
          </Reveal>
        </div>
      </section>

      {/* Certifications placeholder strip */}
      <section className="certs" style={{padding:'80px 0'}}>
        <div className="wrap">
          <Reveal as="h5" dangerouslySetInnerHTML={{__html: t.certsHeading}} />
          <Reveal as="p" style={{textAlign:'center',color:'var(--grey)',fontSize:15,lineHeight:1.7,maxWidth:680,margin:'0 auto 36px'}}>
            {t.certsPara}
          </Reveal>
          <Reveal style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:20,maxWidth:900,margin:'0 auto'}}>
            {t.certBadges.map(b => (
              <div key={b.h} style={{background:'#fff',border:'1.5px dashed var(--line)',padding:'28px 20px',textAlign:'center'}}>
                <div style={{width:36,height:36,color:'var(--red)',margin:'0 auto 12px'}}><Icon.Award /></div>
                <h6 style={{fontFamily:'var(--black)',fontSize:13,color:'var(--ink)',marginBottom:6}}>{b.h}</h6>
                <p style={{fontSize:11,color:'var(--grey-2)',lineHeight:1.4}}>{b.p}</p>
              </div>
            ))}
          </Reveal>
          <Reveal style={{textAlign:'center',marginTop:30,fontSize:12,color:'var(--grey-2)',fontStyle:'italic'}}>
            {t.certNote}
          </Reveal>
        </div>
      </section>

      {/* QC process */}
      <section style={{background:'var(--bone)',padding:'110px 0'}}>
        <div className="wrap">
          <Reveal className="sec-head"><span className="idx">{t.qcIdx}</span><h2 className="ht" dangerouslySetInnerHTML={{__html: t.qcHt}} /></Reveal>
          <Reveal style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:20}}>
            {t.qcSteps.map(([n,h,p]) => (
              <div key={n} style={{background:'#fff',padding:32,borderTop:'3px solid var(--red)'}}>
                <div style={{fontFamily:'var(--display)',fontSize:42,color:'var(--red)',lineHeight:1,marginBottom:14}}>{n}</div>
                <h4 style={{fontFamily:'var(--black)',fontSize:17,color:'var(--ink)',marginBottom:10}}>{h}</h4>
                <p style={{color:'var(--grey)',fontSize:13,lineHeight:1.6}}>{p}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CTA title={t.ctaTitle} sub={t.ctaSub} button={t.ctaButton} />
    </>
  )
}
