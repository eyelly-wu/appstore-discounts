import { start, end } from '../timer'
import getLastKeepDaysRegionDiscountInfo from './storageDiscountInfo'
import getRegionMonthlyDiscountStats from './storageMonthlyStats'
import { generateRegionFeed } from './generateRSS'

export default function updateFeeds(props: {
  timestamp: number
  regionDiscountInfo: RegionDiscountInfo
  appConfig: AppConfig[]
  regionStorageAppInfo: RegionStorageAppInfo
}) {
  start('updateFeeds')
  const { timestamp, regionDiscountInfo, appConfig, regionStorageAppInfo } =
    props

  const fullRegionDiscountInfo =
    getLastKeepDaysRegionDiscountInfo(regionDiscountInfo)

  const regionMonthlyDiscountStats =
    getRegionMonthlyDiscountStats(regionDiscountInfo)

  generateRegionFeed({
    timestamp,
    regionDiscountInfo: fullRegionDiscountInfo,
    appConfig,
    regionStorageAppInfo,
    regionMonthlyDiscountStats,
  })

  end('updateFeeds')
}
