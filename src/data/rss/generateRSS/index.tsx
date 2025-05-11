import { writeFileSync } from 'fs'
import { resolve } from 'path'
import { createFeed } from './createFeed'
import addWelcomeFeedItem from './addWelcomeFeedItem'
import addRankingFeedItem from './addRankingFeedItem'
import addDiscountFeedItems from './addDiscountFeedItems'

export function saveRegionFeed(feeds: RegionFeed) {
  Object.entries(feeds).forEach(([region, feed]) => {
    const filepath = resolve(__dirname, '../../../../rss', `${region}.xml`)
    writeFileSync(filepath, feed, 'utf-8')
  })
}

export function generateRegionFeed(props: {
  regionDiscountInfo: RegionDiscountInfo
  appConfig: AppConfig[]
  regionStorageAppInfo: RegionStorageAppInfo
  regionMonthlyDiscountStats: RegionMonthlyDiscountStats
}) {
  const {
    regionDiscountInfo,
    appConfig,
    regionStorageAppInfo,
    regionMonthlyDiscountStats,
  } = props

  const regionFeed = Object.entries(regionDiscountInfo).reduce(
    (res, [key, discountInfos]) => {
      if (discountInfos.length === 0) return res

      const region = key as Region

      const feed = createFeed(region)

      addWelcomeFeedItem(feed, region)

      addRankingFeedItem({
        feed,
        region,
        appConfig,
        regionStorageAppInfo,
        regionMonthlyDiscountStats,
      })

      addDiscountFeedItems({
        feed,
        discountInfos,
        region,
      })

      res[region] = feed.atom1()

      return res
    },
    {} as RegionFeed,
  )

  saveRegionFeed(regionFeed)
}
