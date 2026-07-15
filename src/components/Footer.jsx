import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { useLang } from '../i18n.jsx'

const FT = {
  en: {
    blurb: "Egypt's industrial steel and stainless-steel manufacturing partner — from engineering drawings through on-site commissioning, all under one roof.",
    emailPlaceholder: 'Your email', subscribe: 'Subscribe', subscribed: 'Subscribed ✓',
    explore: 'EXPLORE', company: 'COMPANY', touch: 'GET IN TOUCH',
    home:'Home', about:'About', products:'Products', services:'Services', projects:'Projects', sectors:'Sectors',
    quality:'Quality & Standards', news:'News', contact:'Contact', langLink:'English',
    tagline:'FROM METAL INTO MASTERPIECES.', copy:'© 2026 TMS — Technology for Manufacturing Solutions',
  },
  ar: {
    blurb: 'شريك مصر الصناعي لتصنيع الحديد والاستانلس ستيل — من الرسومات الهندسية حتى التشغيل في الموقع، كل ذلك تحت سقف واحد.',
    emailPlaceholder: 'بريدك الإلكتروني', subscribe: 'اشترك', subscribed: 'تم الاشتراك ✓',
    explore: 'استكشف', company: 'الشركة', touch: 'تواصل معنا',
    home:'الرئيسية', about:'من نحن', products:'المنتجات', services:'الخدمات', projects:'المشروعات', sectors:'القطاعات',
    quality:'الجودة والمعايير', news:'الأخبار', contact:'اتصل بنا', langLink:'English',
    tagline:'من المعدن نصنع الروائع.', copy:'© 2026 TMS — تكنولوجيا حلول التصنيع',
  },
}

export default function Footer() {
  const { lang, setLang, C } = useLang()
  const t = FT[lang]
  const { company } = C

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link to="/" className="brand">
              <Logo color="#fff" height={24} />
              <span className="wordmark" style={{ fontFamily: "'Archivo Black'", fontSize: 22 }}>TMS</span>
            </Link>
            <p>{t.blurb}</p>
            <form className="foot-news" onSubmit={(e) => { e.preventDefault(); e.target.querySelector('button').textContent = t.subscribed }}>
              <input type="email" placeholder={t.emailPlaceholder} required />
              <button type="submit">{t.subscribe}</button>
            </form>
          </div>
          <div className="foot-col">
            <h5>{t.explore}</h5>
            <Link to="/">{t.home}</Link>
            <Link to="/about">{t.about}</Link>
            <Link to="/products">{t.products}</Link>
            <Link to="/services">{t.services}</Link>
            <Link to="/projects">{t.projects}</Link>
            <Link to="/sectors">{t.sectors}</Link>
          </div>
          <div className="foot-col">
            <h5>{t.company}</h5>
            <Link to="/quality">{t.quality}</Link>
            <Link to="/news">{t.news}</Link>
            <Link to="/contact">{t.contact}</Link>
            <button type="button" className="foot-lang" onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}>
              {lang === 'ar' ? 'English' : 'العربية'}
            </button>
          </div>
          <div className="foot-col">
            <h5>{t.touch}</h5>
            <a href={`tel:${company.phoneIntl}`}><bdi className="tel-ltr">{company.phone}</bdi></a>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <p>{company.web}</p>
            <p>{company.city}</p>
          </div>
        </div>
        <div className="foot-bot">
          <span className="tagline">{t.tagline}</span>
          <span className="copy">{t.copy}</span>
        </div>
      </div>
    </footer>
  )
}
