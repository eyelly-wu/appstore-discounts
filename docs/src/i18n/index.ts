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
          case 'Country or Region':
            if ((payload as number) > 1) {
              res = `\`${payload}\` \`Countries or Regions\``
            } else {
              res = `\`${payload}\` \`${keyword}\``
            }
            break
          case 'app':
            res = ` \`${payload}\` \`App${
              (payload as number) > 1 ? 's' : ''
            }\` `
            break
        }
        break
      case 'zh':
        switch (keyword) {
          case '个应用':
            res = ` \`${payload}\` 个 \`应用\` `
            break
          case '个国家或地区':
            res = ` \`${payload}\` 个 \`国家或地区\` `
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
