import { Translate } from 'i18n-pro'
import { scrapeless } from './sponsors'

const sponsor: Sponsor = {
  name: 'appstore-discounts',
  url: 'https://github.com/appstore-discounts/appstore-discounts',
  logo: 'https://i.ibb.co/v4rvfCHT/WX20250608-214702-2x.png',
  expireTime: '2024-06-10T00:00:00.000Z',
}

function getSponsors(number = 0) {
  const length = number || Math.ceil(Math.random() * 3)
  return Array(length).fill(sponsor)
}

export const sponsors: Sponsors = [
  {
    type: 'platinum',
    sponsors: getSponsors(1),
  },
  {
    type: 'gold',
    sponsors: getSponsors(2),
  },
  {
    type: 'silver',
    sponsors: [scrapeless, ...getSponsors(2)],
  },
  {
    type: 'bronze',
    sponsors: getSponsors(5),
  },
]

export const getSponsorTypeName = (type: SponsorType, tProp?: Translate) => {
  const $t = tProp || t

  return {
    platinum: $t('铂金赞助商'),
    gold: $t('黄金赞助商'),
    silver: $t('白银赞助商'),
    bronze: $t('青铜赞助商'),
  }[type]
}

export const wrapperWidth = 800
export const sponsorSpace = 10
export const sponsorTypeHeight = 68
export const bottomSpace = sponsorTypeHeight / 2

export const sponsorTypeColorMap: Record<SponsorType, string> = {
  platinum: '#191970',
  gold: '#DAA520',
  silver: '#708090',
  bronze: '#A0522D',
}

export const sponsorTypeRowSpanMap: Record<SponsorType, number> = {
  platinum: 1,
  gold: 2,
  silver: 3,
  bronze: 4,
}

export const sponsorTypeSizeMap: Record<
  SponsorType,
  { width: number; height: number }
> = {
  platinum: {
    width: 380,
    height: 140,
  },
  gold: {
    width: 280,
    height: 140,
  },
  silver: {
    width: 190,
    height: 85,
  },
  bronze: {
    width: 120,
    height: 60,
  },
}
