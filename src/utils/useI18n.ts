import { useState } from 'react'
// import { ja_text, en_text } from './locales'

import ja_text from './locales/ja.json'
import en_text from './locales/en.json'

export const useI18n = (): {
  lang: string
  selectJa: () => void
  selectEn: () => void
  getI18nText: (key: string) => string
} => {
  const [lang, setLang] = useState(
    window.navigator.language === 'ja' ? 'ja' : 'en'
  )

  const ja = Object.entries(ja_text).map(([k, v]) => {
    return { k, v }
  })
  const en = Object.entries(en_text).map(([k, v]) => {
    return { k, v }
  })

  const selectJa = () => {
    setLang('ja')
  }
  const selectEn = () => {
    setLang('en')
  }

  const getI18nText = (key: string) => {
    if (lang === 'ja') {
      const kv = ja.filter((m) => m.k === key)[0]
      if (kv === undefined) return ja.filter((m) => m.k === '404')[0].v
      return kv.v
    } else {
      const kv = en.filter((m) => m.k === key)[0]
      if (kv === undefined) return en.filter((m) => m.k === '404')[0].v
      return kv.v
    }
  }
  return { lang, selectJa, selectEn, getI18nText }
}
