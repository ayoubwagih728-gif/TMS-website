import { createContext, useContext, useState, useEffect } from 'react'
import * as en from './data/content.js'
import * as ar from './data/content_ar.js'

const LangCtx = createContext(null)
const STORAGE_KEY = 'tms_lang'

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try { return localStorage.getItem(STORAGE_KEY) || 'en' } catch { return 'en' }
  })

  const setLang = (l) => {
    setLangState(l)
    try { localStorage.setItem(STORAGE_KEY, l) } catch { /* ignore */ }
  }

  useEffect(() => {
    const el = document.documentElement
    el.lang = lang
    el.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  const dir = lang === 'ar' ? 'rtl' : 'ltr'
  const C = lang === 'ar' ? ar : en

  return (
    <LangCtx.Provider value={{ lang, setLang, dir, C }}>
      {children}
    </LangCtx.Provider>
  )
}

export function useLang() {
  const v = useContext(LangCtx)
  if (!v) throw new Error('useLang must be used within <LangProvider>')
  return v
}

// Convenience: pick a value that may be a plain string (shared) or {en, ar}
export function pick(val, lang) {
  if (val && typeof val === 'object' && ('en' in val || 'ar' in val)) return val[lang] ?? val.en
  return val
}

// Convert Western digits (0-9) to Arabic-Indic digits (٠-٩). Any non-digit
// characters (+, ×, spaces, letters) pass through untouched.
const AR_DIGITS = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
export function arDigits(input) {
  return String(input).replace(/[0-9]/g, d => AR_DIGITS[+d])
}

// Localise a number/string for the active language: Arabic-Indic in RTL,
// unchanged otherwise.
export function locNum(input, lang) {
  return lang === 'ar' ? arDigits(input) : String(input)
}
