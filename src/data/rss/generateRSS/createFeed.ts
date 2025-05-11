import { Feed } from 'feed'
import { homepage } from '../../../../package.json'

const followUserId = '73658201673997312'

const followRegionFeedMap: Record<Region, string> = {
  cn: '49753297431966720',
  hk: '67474973430475776',
  mo: '73536165737884672',
  tw: '73536236398899200',
  us: '49753370488353792',
  tr: '99063474310237184',
}

export function createFeed(region: Region) {
  const appstoreIcon = 'https://s3.bmp.ovh/imgs/2024/07/20/491487aec936222a.png'
  const followFeedId = followRegionFeedMap[region]

  const feed = new Feed({
    title: `App Store Discounts（${region.toUpperCase()}）`,
    description: `App Store Discounts - Made with love by appstore-discounts(${homepage})
feedId:${followFeedId}+userId:${followUserId}
`,
    id: `${homepage}/rss/${region}.xml`,
    link: `https://apps.apple.com/${region}/app`,
    image: appstoreIcon,
    favicon: appstoreIcon,
    copyright: 'Copyright (c) 2024-present Eyelly Wu',
    updated: new Date(),
    author: {
      name: 'Eyelly wu',
      email: 'eyelly.wu@gmail.com',
      link: 'https://github.com/eyelly-wu',
    },
  })

  return feed
}
