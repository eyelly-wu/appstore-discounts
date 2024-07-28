import { initI18n } from 'i18n-pro'
import en from './en.json'

const { t, withI18n } = initI18n({
  namespace: 'data',
  langs: {
    en,
  },
  formatPlural({ keyword, text, payload, locale }) {
    let res = text
    switch (locale) {
      case 'en':
        switch (keyword) {
          case 'country or region':
            if ((payload as number) > 1) {
              res = `${payload} countries and regions`
            } else {
              res = `${payload} ${keyword}`
            }
            break
          case 'app':
            res = ` \`${payload} ${keyword}${
              (payload as number) > 1 ? 's' : ''
            }\` `
            break
        }
        break
    }

    return res
  },
})

export default function init(locale?: string) {
  const { t } = withI18n({
    locale,
  })

  Object.defineProperty(global, 't', {
    get() {
      return t
    },
    configurable: true,
  })

  Object.defineProperty(global, 'docLocale', {
    get() {
      return locale
    },
    configurable: true,
  })
}

init()
