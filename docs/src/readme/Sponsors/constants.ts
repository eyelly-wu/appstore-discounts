import { Translate } from 'i18n-pro'

const sponsor: Sponsor = {
  url: 'https://github.com/appstore-discounts/appstore-discounts',
  logo: 'https://i.ibb.co/v4rvfCHT/WX20250608-214702-2x.png',
  expireTime: '2024-06-10T00:00:00.000Z',
}

function getSponsors() {
  const length = Math.ceil(Math.random() * 5)
  return Array(length).fill(sponsor)
}

export const sponsors: Sponsors = [
  {
    type: 'platinum',
    sponsors: getSponsors(),
  },
  {
    type: 'gold',
    sponsors: getSponsors(),
  },
  {
    type: 'silver',
    sponsors: getSponsors(),
  },
  {
    type: 'bronze',
    sponsors: getSponsors(),
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
export const sponsorWidth = 190
export const sponsorHeight = 80
export const sponsorSpace = 10
export const sponsorTypeHeight = 68
export const sponsorRowSpan = 3
export const sponsorRowGap = Math.floor(sponsorWidth / 4)
export const bottomSpace = sponsorTypeHeight / 2

export const sponsorTypeColorMap: Record<SponsorType, string> = {
  platinum: '#191970',
  gold: '#DAA520',
  silver: '#708090',
  bronze: '#A0522D',
}
