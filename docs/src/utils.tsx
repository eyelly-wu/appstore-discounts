import './i18n'
import React, { Break, getAnchor, Link } from 'jsx-to-md'
import { readFileSync } from 'fs'
import en from './i18n/en.json'
import packageInfo from '../../package.json'
import { langs } from './constants'

export function getDocHref(
  filename: string,
  anchorProp?: string,
  localeProp?: string,
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { version: originVersion, codeNameMap, homepage } = packageInfo
  const locale = localeProp || global.docLocale
  let name = codeNameMap[locale]
  name = name ? `_${name}` : ''
  const anchor = anchorProp ? getAnchor(anchorProp) : ''
  let version = `main`

  // only in dev branch
  const DEV_FILENAMES = []

  if (DEV_FILENAMES.includes(filename)) {
    version = 'dev'
  }

  if (filename === 'README') {
    return locale === 'en'
      ? `${homepage}/tree/${version}${anchor || '#readme'}`
      : `${homepage}/blob/${version}/${filename}${name}.md${anchor}`
  } else {
    return `${homepage}/blob/${version}/docs/dist/${filename}${name}.md${anchor}`
  }
}

export function getFileContent(filepath: string) {
  const res = readFileSync(filepath, { encoding: 'utf-8' })
  return res
}

export function getIssueText(
  text: string,
  props: {
    issue?: number | number[]
    by?: string
  } = {},
) {
  const { issue, by } = props

  let showIssue: number[] | string = typeof issue === 'number' ? [issue] : issue

  showIssue =
    Array.isArray(showIssue) && showIssue.length
      ? showIssue.reduce((res, item, index) => {
          res += `${index === 0 ? '' : ' '}[#${item}](${
            packageInfo.bugs.url
          }/${item})`
          return res
        }, ' ')
      : ''

  const showBy = by ? ` by @[${by}](https://github.com/${by})` : ''

  return `${text}${showIssue}${showBy}`
}

function getText(text: string, normal = false) {
  if (normal) return text
  return ` \`${text}\` `
}

export function getCountryOrRegionText(normal = false) {
  const text = t('国家或地区')
  return getText(text, normal)
}

export function getAppText(normal = false) {
  const text = t('应用')
  return getText(text, normal)
}

export function getAppStoreText(normal = false) {
  const text = 'App Store'
  return getText(text, normal)
}

export function renderLanguage(filename: string) {
  const separator = ' | '

  const res = langs.reduce((res, item, index) => {
    const { code, name } = item

    if (global.docLocale == code) {
      res.push(name)
    } else {
      res.push(<Link href={getDocHref(filename, undefined, code)}>{name}</Link>)
    }

    if (index != langs.length - 1) {
      res.push(separator)
    }

    return res
  }, [])
  return (
    <>
      <Break />
      <Break />
      {res}
      <Break />
      <Break />
    </>
  )
}
