import { useEffect, useState } from 'react'
// import { ja_text, en_text } from './locales'

import ja_text from './locales/ja.json'
import en_text from './locales/en.json'
import { useNavigate } from 'react-router-dom'

export const useI18n = (): {
  lang: string
  selectJa: () => void
  selectEn: () => void
  getI18nText: (key: string) => string
} => {
  const [lang, setLang] = useState(localStorage.getItem('lang') || '')
  const navi = useNavigate()

  const ja = Object.entries(ja_text).map(([k, v]) => {
    return { k, v }
  })
  const en = Object.entries(en_text).map(([k, v]) => {
    return { k, v }
  })

  const selectJa = () => {
    setLang('ja')
    navi(0)
  }
  const selectEn = () => {
    setLang('en')
    navi(0)
  }

  useEffect(() => {
    const s = localStorage.getItem('lang')
    if (!s) {
      localStorage.setItem(
        'lang',
        window.navigator.language === 'ja' ? 'ja' : 'en'
      )
    } else {
      if (lang === 'ja') {
        localStorage.setItem('lang', 'ja')
      } else {
        localStorage.setItem('lang', 'en')
      }
    }
  }, [lang])

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
