import { Icon } from './ui.jsx'
import { useLang } from '../i18n.jsx'

export default function Utbar() {
  const { lang, setLang, C } = useLang()
  const { company } = C
  const toggle = () => setLang(lang === 'ar' ? 'en' : 'ar')

  return (
    <div className="utbar">
      <div className="wrap">
        <div className="utleft">
          <a className="ut-phone" href={`tel:${company.phoneIntl}`}><Icon.Phone /> {company.phone}</a>
          <a className="ut-email" href={`mailto:${company.email}`}><Icon.Mail /> {company.email}</a>
        </div>
        <div className="utright">
          <a href="https://www.linkedin.com/company/tms-misr/" target="_blank" rel="noopener" aria-label="LinkedIn"><Icon.LinkedIn /></a>
          <a href="https://www.facebook.com/tms.misr/" target="_blank" rel="noopener" aria-label="Facebook"><Icon.Facebook /></a>
          <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener" aria-label="WhatsApp"><Icon.Whatsapp /></a>
          <span className="sep"></span>
          <button type="button" className="lang" onClick={toggle} aria-label="Switch language">
            {lang === 'ar' ? 'EN · English' : 'ع · العربية'}
          </button>
        </div>
      </div>
    </div>
  )
}
