import { useLang } from '../i18n.jsx'

export default function FloatingActions() {
  const { lang, C } = useLang()
  const { company } = C
  const txt = lang === 'ar'
    ? { wa: 'الدردشة على واتساب', call: 'اتصل الآن' }
    : { wa: 'Chat on WhatsApp', call: 'Call now' }
  return (
    <div className="fwa">
      <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener" aria-label="WhatsApp chat" title={txt.wa}>
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.74.46 3.43 1.32 4.93L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.46 14c-.23.65-1.13 1.19-1.86 1.35-.51.11-1.16.2-3.4-.73-2.86-1.18-4.7-4.08-4.84-4.27-.14-.19-1.16-1.55-1.16-2.95s.74-2.09 1-2.38c.27-.29.58-.36.77-.36.19 0 .38 0 .55.01.18.01.41-.07.65.5.23.55.79 1.93.86 2.07.07.14.12.3.02.49-.1.19-.15.3-.29.46-.14.16-.3.36-.43.48-.14.14-.29.29-.13.58.16.29.71 1.17 1.52 1.89 1.04.93 1.92 1.21 2.21 1.36.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.38-.24.64-.14.26.09 1.66.78 1.94.93.29.14.48.21.55.34.07.13.07.74-.16 1.39z"/></svg>
      </a>
      <a className="tel" href={`tel:${company.phoneIntl}`} aria-label="Call TMS" title={txt.call}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1.05.36 2.07.7 3a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.93.34 1.95.57 3 .7A2 2 0 0 1 22 16.92z"/></svg>
      </a>
    </div>
  )
}
