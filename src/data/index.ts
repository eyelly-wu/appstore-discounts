import './i18n' // NOTE initial i18n
import { regions, appIdConfig } from '../../appinfo.config'
import getRegionAppInfo from './scrap'
import { getStorageAppInfo, setStorageAppInfo } from './storage'
import calculateLatestRegionStorageAppInfoAndRegionDiscountsInfo from './calculate'
import updateFeeds from './rss'
import { start, end, summarize } from './timer'
import { pushTelegramNotification } from './telegram'
import 'dotenv/config'

async function controller() {
  start('controller')
  const appIds = Object.keys(appIdConfig) /* .slice(0, 2) */
  const timestamp = Date.now()

  console.info(
    `当前收录地区数：${regions.length}
当前收录应用数：${appIds.length}`,
  )

  const regionAppInfo = await getRegionAppInfo(appIds, regions)

  if (Object.keys(regionAppInfo).length === 0) {
    console.info('No data captured, program execution has ended')
    return
  }

  const regionStorageAppInfo = getStorageAppInfo(regions)

  const regionDiscountInfos =
    calculateLatestRegionStorageAppInfoAndRegionDiscountsInfo(
      timestamp,
      regions,
      regionAppInfo,
      regionStorageAppInfo,
    )

  setStorageAppInfo(regions, regionStorageAppInfo)

  updateFeeds(regionDiscountInfos)

  await pushTelegramNotification(regionDiscountInfos)

  end('controller')
  summarize()
}

controller()
