import { start, end } from '../timer'
import getLastKeepDaysRegionDiscountInfo from './storageDiscountInfo'
import getRegionMonthlyDiscountStats from './storageMonthlyStats'
import { generateRegionFeed } from './generateRSS'

export default function updateFeeds(props: {
  regionDiscountInfo: RegionDiscountInfo
  appConfig: AppConfig[]
  regionStorageAppInfo: RegionStorageAppInfo
}) {
  start('updateFeeds')
  const { regionDiscountInfo, appConfig, regionStorageAppInfo } = props

  const fullRegionDiscountInfo =
    getLastKeepDaysRegionDiscountInfo(regionDiscountInfo)

  const regionMonthlyDiscountStats =
    getRegionMonthlyDiscountStats(regionDiscountInfo)

  generateRegionFeed({
    regionDiscountInfo: fullRegionDiscountInfo,
    appConfig,
    regionStorageAppInfo,
    regionMonthlyDiscountStats,
  })

  end('updateFeeds')
}
