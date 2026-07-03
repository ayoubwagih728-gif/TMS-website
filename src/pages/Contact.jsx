import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Reveal, Icon } from '../components/ui.jsx'
import Logo from '../components/Logo.jsx'
import { useLang } from '../i18n.jsx'

const TXT = {
  en: {
    heroTag: 'Contact',
    heroTitle: "Let's build<br/><em>something.</em>",
    heroLead: 'Tell us what you need — site visit, quote, technical question, or just a conversation. Our engineering team responds within one business day.',
    crumbHome: 'Home',
    crumbContact: 'Contact',
    formHeading: 'Request a quote',
    formSub: "Share the scope, your timeline and project location — we'll come back with a buildable plan and a price.",
    successMsg: "Thanks — your request has reached our engineering team. We'll be in touch within one business day.",
    labelName: 'Your name',
    labelCompany: 'Company',
    labelEmail: 'Email',
    labelPhone: 'Phone',
    labelService: 'What do you need?',
    serviceOptions: [
      'Select a service…',
      'Tanks / Stainless fabrication',
      'Conveyors / Material handling',
      'Steel structures / Hangars',
      'Industrial doors',
      'Garbage chutes',
      'Machine chassis / Custom frames',
      'Stainless fixtures / Foodservice',
      'Caravans / Site units',
      'Turnkey project (design + fabricate + install)',
      'Maintenance / Emergency response',
      'Something else',
    ],
    labelMessage: 'Project details',
    messagePlaceholder: 'Scope, timeline, site location, and any specs we should know about…',
    sendBtn: 'Send Request →',
    formNote: 'Or reach us directly at',
    getInTouch: 'GET IN TOUCH',
    talkHeading: 'Talk to <em style="font-style:italic;color:var(--red);transform:skewX(-5deg);display:inline-block">engineering.</em>',
    blurb: "We're a working factory and an engineering practice. If you'd rather talk than type, call us — you'll reach a real engineer, not a switchboard.",
    labelCall: 'CALL',
    labelEmailRow: 'EMAIL',
    labelWhatsapp: 'WHATSAPP',
    labelLocation: 'LOCATION',
    labelWeb: 'WEB',
    workingHours: 'WORKING HOURS',
    daySunThu: 'Sunday – Thursday',
    daySat: 'Saturday',
    dayFri: 'Friday',
    dayEmergency: 'Emergency response',
    hoursSunThu: '9:00 – 18:00',
    hoursSat: '9:00 – 14:00',
    hoursFri: 'Closed',
    hoursEmergency: '24/7',
  },
  ar: {
    heroTag: 'تواصل معنا',
    heroTitle: 'لنبنِ<br/><em>شيئًا معًا.</em>',
    heroLead: 'أخبرنا بما تحتاجه — زيارة موقع، عرض سعر، سؤال فني، أو مجرد محادثة. يردّ فريقنا الهندسي خلال يوم عمل واحد.',
    crumbHome: 'الرئيسية',
    crumbContact: 'تواصل معنا',
    formHeading: 'اطلب عرض سعر',
    formSub: 'شاركنا نطاق العمل والجدول الزمني وموقع المشروع — وسنعود إليك بخطة قابلة للتنفيذ وسعر.',
    successMsg: 'شكرًا — وصل طلبك إلى فريقنا الهندسي. سنتواصل معك خلال يوم عمل واحد.',
    labelName: 'الاسم',
    labelCompany: 'الشركة',
    labelEmail: 'البريد الإلكتروني',
    labelPhone: 'الهاتف',
    labelService: 'ماذا تحتاج؟',
    serviceOptions: [
      'اختر خدمة…',
      'خزانات / تصنيع الستانلس ستيل',
      'سيور نقل / مناولة المواد',
      'منشآت حديدية / هناجر',
      'أبواب صناعية',
      'مجاري القمامة',
      'هياكل ماكينات / إطارات مخصصة',
      'تجهيزات ستانلس / خدمات الأغذية',
      'كرافانات / وحدات مواقع',
      'مشروع متكامل (تصميم + تصنيع + تركيب)',
      'صيانة / استجابة طارئة',
      'شيء آخر',
    ],
    labelMessage: 'تفاصيل المشروع',
    messagePlaceholder: 'نطاق العمل، الجدول الزمني، موقع الموقع، وأي مواصفات ينبغي أن نعرفها…',
    sendBtn: 'إرسال الطلب →',
    formNote: 'أو تواصل معنا مباشرة على',
    getInTouch: 'تواصل معنا',
    talkHeading: 'تحدّث مع <em style="font-style:italic;color:var(--red);transform:skewX(-5deg);display:inline-block">فريق الهندسة.</em>',
    blurb: 'نحن مصنع عامل وممارسة هندسية. إن كنت تفضّل التحدث بدلًا من الكتابة، اتصل بنا — ستصل إلى مهندس حقيقي، لا إلى مقسّم هاتفي.',
    labelCall: 'اتصال',
    labelEmailRow: 'البريد الإلكتروني',
    labelWhatsapp: 'واتساب',
    labelLocation: 'الموقع',
    labelWeb: 'الموقع الإلكتروني',
    workingHours: 'مواعيد العمل',
    daySunThu: 'الأحد – الخميس',
    daySat: 'السبت',
    dayFri: 'الجمعة',
    dayEmergency: 'الاستجابة الطارئة',
    hoursSunThu: '9:00 – 18:00',
    hoursSat: '9:00 – 14:00',
    hoursFri: 'مغلق',
    hoursEmergency: '24/7',
  },
}

export default function Contact() {
  const { lang, C } = useLang()
  const { company } = C
  const t = TXT[lang]

  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name:'', company:'', email:'', phone:'', service:'', message:'' })

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = (e) => {
    e.preventDefault()
    // wire to Formspree / EmailJS / your backend endpoint here
    console.log('TMS quote request:', form)
    setSent(true)
  }

  return (
    <>
      <section className="phero">
        <div className="phero-mark"><Logo color="#fff" height={undefined} /></div>
        <div className="wrap">
          <div className="tag"><span className="rule"></span><span className="mono">{t.heroTag}</span></div>
          <h1 dangerouslySetInnerHTML={{ __html: t.heroTitle }} />
          <p className="lead">{t.heroLead}</p>
          <div className="breadcrumb"><Link to="/">{t.crumbHome}</Link> &nbsp;/&nbsp; {t.crumbContact}</div>
        </div>
      </section>

      <section className="ct pad">
        <div className="wrap ct-grid">
          {/* Form */}
          <Reveal className="ct-form">
            <h3>{t.formHeading}</h3>
            <p className="sub">{t.formSub}</p>
            {sent ? (
              <div className="form-ok">{t.successMsg}</div>
            ) : (
              <form onSubmit={onSubmit}>
                <div className="frow">
                  <div className="field">
                    <label htmlFor="name">{t.labelName}</label>
                    <input id="name" name="name" value={form.name} onChange={onChange} required />
                  </div>
                  <div className="field">
                    <label htmlFor="company">{t.labelCompany}</label>
                    <input id="company" name="company" value={form.company} onChange={onChange} />
                  </div>
                </div>
                <div className="frow">
                  <div className="field">
                    <label htmlFor="email">{t.labelEmail}</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={onChange} required />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">{t.labelPhone}</label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={onChange} />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="service">{t.labelService}</label>
                  <select id="service" name="service" value={form.service} onChange={onChange}>
                    {t.serviceOptions.map((opt, i) => (
                      <option key={i} value={i === 0 ? '' : opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="message">{t.labelMessage}</label>
                  <textarea id="message" name="message" value={form.message} onChange={onChange} placeholder={t.messagePlaceholder} required></textarea>
                </div>
                <button type="submit" className="btn">{t.sendBtn}</button>
                <p className="form-note">{t.formNote} {company.email} · {company.phone}</p>
              </form>
            )}
          </Reveal>

          {/* Info */}
          <Reveal delay={140} className="ct-info">
            <p className="mono" style={{color:'var(--red)',marginBottom:14}}>{t.getInTouch}</p>
            <h3 style={{fontFamily:'var(--display)',fontSize:'clamp(30px,4vw,46px)',color:'var(--ink)',marginBottom:16,lineHeight:1}} dangerouslySetInnerHTML={{ __html: t.talkHeading }} />
            <p className="blurb">{t.blurb}</p>

            <div className="ct-rows">
              <a className="ct-row" href={`tel:${company.phoneIntl}`}>
                <span className="ico"><Icon.Phone /></span>
                <div><div className="lab">{t.labelCall}</div><div className="val">{company.phone}</div></div>
              </a>
              <a className="ct-row" href={`mailto:${company.email}`}>
                <span className="ico"><Icon.Mail /></span>
                <div><div className="lab">{t.labelEmailRow}</div><div className="val">{company.email}</div></div>
              </a>
              <a className="ct-row" href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener">
                <span className="ico"><Icon.Whatsapp /></span>
                <div><div className="lab">{t.labelWhatsapp}</div><div className="val">{company.phone}</div></div>
              </a>
              <div className="ct-row">
                <span className="ico"><Icon.Pin /></span>
                <div><div className="lab">{t.labelLocation}</div><div className="val">{company.city}</div></div>
              </div>
              <a className="ct-row" href={`https://${company.web}`} target="_blank" rel="noopener">
                <span className="ico"><Icon.Globe /></span>
                <div><div className="lab">{t.labelWeb}</div><div className="val">{company.web}</div></div>
              </a>
            </div>

            <div className="ct-hours">
              <div className="lab">{t.workingHours}</div>
              <div className="row"><span>{t.daySunThu}</span><b>{t.hoursSunThu}</b></div>
              <div className="row"><span>{t.daySat}</span><b>{t.hoursSat}</b></div>
              <div className="row"><span>{t.dayFri}</span><b>{t.hoursFri}</b></div>
              <div className="row"><span>{t.dayEmergency}</span><b style={{color:'var(--red)'}}>{t.hoursEmergency}</b></div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
