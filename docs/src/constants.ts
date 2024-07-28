import { Image, Link, ArrayObject } from './types'
import { homepage } from '../../package.json'

export const langs = [
  {
    code: 'en',
    locale: 'en-US',
    name: 'English',
  },
  {
    code: 'zh',
    locale: 'zh-CN',
    name: '简体中文',
  },
]

const links = [
  {
    title: 'github',
    href: homepage,
  },
  {
    title: 'github-stars',
    href: `${homepage}/stargazers`,
  },
  {
    title: 'last-commit',
    href: `${homepage}/commits/main`,
  },
  {
    title: 'github-issues',
    href: `${homepage}/issues`,
  },
  {
    title: 'telegram-channel',
    href: 'https://t.me/appstore_discounts',
  },
] as const

type LinkTitleType = ArrayObject<typeof links, 'title'>

type LinkObject = Record<LinkTitleType, Link>

export const linkObj = links.reduce((res, item) => {
  res[item.title] = item
  return res
}, {} as LinkObject)

const images = [
  {
    title: 'github-stars',
    alt: 'github-stars',
    src: 'https://img.shields.io/github/stars/eyelly-wu/appstore-discounts?style=social',
  },
  {
    title: 'last-commit',
    alt: 'last-commit',
    src: 'https://img.shields.io/github/last-commit/eyelly-wu/appstore-discounts/dev',
  },
  {
    title: 'github-issues',
    alt: 'github-issues',
    src: 'https://img.shields.io/github/issues-raw/eyelly-wu/appstore-discounts',
  },
  {
    title: 'telegram',
    alt: 'github-issues',
    src: 'https://img.shields.io/badge/Telegram-Channel-blue?style=flat&logo=telegram',
  },
] as const

type ImageTitleType = ArrayObject<typeof images, 'title'>

type ImageObject = Record<ImageTitleType, Image>

export const imageObj = images.reduce((res, item) => {
  res[item.title] = item
  return res
}, {} as ImageObject)
