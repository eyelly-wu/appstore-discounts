import { initI18n } from 'i18n-pro'
import { regionLanguageCodeMap } from 'appinfo.config'
import en from './en.json'

const { t, withI18n } = initI18n({
  namespace: 'data',
  langs: {
    en,
  },
})

Object.defineProperty(global, 't', {
  get() {
    return t
  },
})

export function getTranslate(region: Region) {
  const { t } = withI18n({
    locale: regionLanguageCodeMap[region],
  })

  return t
}
