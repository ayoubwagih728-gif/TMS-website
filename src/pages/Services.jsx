import { Link } from 'react-router-dom'
import { Reveal, CTA, Icon, ProcessStepsInteractive } from '../components/ui.jsx'
import Logo from '../components/Logo.jsx'
import { useLang } from '../i18n.jsx'

const TXT = {
  en: {
    heroMono: 'Services',
    heroTitle: 'Capabilities,<br /><em>under one roof.</em>',
    heroLead: 'Five fabrication and engineering capabilities, plus full turnkey project delivery. Owned machinery, in-house engineering, 24/7 emergency response.',
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Services',
    idx01: '01 / FABRICATION',
    fabHeading: 'Five core <em>capabilities.</em>',
    big247: '24/7',
    sm247: 'Emergency response & factory maintenance',
    idx02: '02 / TURNKEY DELIVERY',
    turnkeyHeading: 'One contract. One team. <em>One result.</em>',
    turnkeyIntro: "From the first site visit to the day your line goes live — TMS handles every step. You deal with one project manager, sign one contract, and get a finished, tested system. <strong style=\"color:#fff;font-weight:600\">Click any step below for the details.</strong>",
    includedLabel: 'INCLUDED',
    includedItems: 'As-built drawings · Maintenance documentation · Operator handover · Warranty coverage',
    ctaTitle: 'Have a project <em>in mind?</em>',
    ctaSub: "Tell us the scope. We'll measure, engineer, fabricate and install — on one contract.",
    ctaButton: 'Request a Quote',
  },
  ar: {
    heroMono: 'الخدمات',
    heroTitle: 'إمكانات متكاملة<br /><em>تحت سقف واحد.</em>',
    heroLead: 'خمس إمكانات في التصنيع المعدني والهندسة، إضافة إلى التسليم المتكامل للمشاريع (مفتاح باليد). آلات مملوكة، وهندسة داخلية، واستجابة طارئة على مدار الساعة طوال أيام الأسبوع.',
    breadcrumbHome: 'الرئيسية',
    breadcrumbCurrent: 'الخدمات',
    idx01: '01 / التصنيع المعدني',
    fabHeading: 'خمس <em>إمكانات أساسية.</em>',
    big247: '24/7',
    sm247: 'الاستجابة الطارئة وصيانة المصانع',
    idx02: '02 / التسليم المتكامل (مفتاح باليد)',
    turnkeyHeading: 'عقد واحد. فريق واحد. <em>نتيجة واحدة.</em>',
    turnkeyIntro: 'من أول زيارة للموقع حتى يوم تشغيل خط الإنتاج — تتولى TMS كل خطوة. تتعامل مع مدير مشروع واحد، وتوقّع عقداً واحداً، وتحصل على نظام مكتمل ومختبَر. <strong style="color:#fff;font-weight:600">اضغط على أي خطوة بالأسفل لعرض التفاصيل.</strong>',
    includedLabel: 'يشمل',
    includedItems: 'رسومات تنفيذية (كما نُفّذت) · وثائق الصيانة · تسليم للمشغّلين · تغطية الضمان',
    ctaTitle: 'هل لديك <em>مشروع في ذهنك؟</em>',
    ctaSub: 'أخبرنا بنطاق العمل. سنقوم بالقياس والهندسة والتصنيع والتركيب — بعقد واحد.',
    ctaButton: 'اطلب عرض سعر',
  },
}

export default function Services() {
  const { lang, C } = useLang()
  const { services, processDetailed } = C
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

      <section className="svc pad">
        <div className="wrap">
          <div className="svc-top">
            <Reveal className="sec-head" style={{marginBottom:0}}><span className="idx">{t.idx01}</span><h2 className="ht" dangerouslySetInnerHTML={{ __html: t.fabHeading }} /></Reveal>
            <Reveal className="svc-247"><span className="big">{t.big247}</span><span className="sm">{t.sm247}</span></Reveal>
          </div>
          <Reveal>
            {services.map(s => (
              <div className="svc-row" key={s.n}>
                <span className="sn">{s.n}</span>
                <h4>{s.h}</h4>
                <p>{s.p}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="process-red pad">
        <div className="wrap">
          <Reveal className="sec-head"><span className="idx">{t.idx02}</span><h2 className="ht" dangerouslySetInnerHTML={{ __html: t.turnkeyHeading }} /></Reveal>
          <Reveal as="p" style={{maxWidth:760,color:'rgba(255,255,255,.85)',fontSize:17,lineHeight:1.7,marginBottom:40}} dangerouslySetInnerHTML={{ __html: t.turnkeyIntro }} />
          <Reveal>
            <ProcessStepsInteractive steps={processDetailed} />
          </Reveal>
          <Reveal className="included">
            <span className="lab">{t.includedLabel}</span>
            <span className="items">{t.includedItems}</span>
          </Reveal>
        </div>
      </section>

      <CTA title={t.ctaTitle} sub={t.ctaSub} button={t.ctaButton} />
    </>
  )
}
