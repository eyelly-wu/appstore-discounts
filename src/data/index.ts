import './i18n' // NOTE initial i18n
import 'dotenv/config'
import { regions } from 'appinfo.config'
import { getRegionAppTopInfo, getRegionAppInfo } from './scrape'
import { getStorageAppInfo, setStorageAppInfo } from './storage'
import calculateLatestRegionStorageAppInfoAndRegionDiscountsInfo from './calculate'
import updateFeeds from './rss'
import { start, end, summarize } from './timer'
import pushTelegramNotification from './telegram'
// import updateIpCounter from './ip'
import pushDingTalkNotification from './dingtalk'
import updateAppInfoConfig from './config'

async function controller() {
  start('controller')
  const regionAppTopInfo = await getRegionAppTopInfo(regions)
  const appConfig = updateAppInfoConfig(regionAppTopInfo)
  const appIds = appConfig
    .filter((item) => item.allowNotification !== false)
    .map((item) => item.id) /* .slice(0, 2) */
  const timestamp = Date.now()

  console.info(
    `当前收录地区数：${regions.length}
当前收录应用数：${appIds.length}`,
  )

  // await updateIpCounter()

  const regionAppInfo = await getRegionAppInfo(appIds, regions)

  if (Object.keys(regionAppInfo).length === 0) {
    console.info('No data captured, program execution has ended')
    return
  }

  const regionStorageAppInfo = getStorageAppInfo(regions)

  const regionDiscountInfo =
    calculateLatestRegionStorageAppInfoAndRegionDiscountsInfo(
      timestamp,
      regions,
      regionAppInfo,
      regionStorageAppInfo,
    )

  setStorageAppInfo(regions, regionStorageAppInfo)

  updateFeeds({
    timestamp,
    regionDiscountInfo,
    appConfig,
    regionStorageAppInfo,
  })

  await pushTelegramNotification(regionDiscountInfo)

  await pushDingTalkNotification(regionDiscountInfo)

  end('controller')
  summarize()
}

controller()
