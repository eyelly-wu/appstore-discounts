import './i18n' // NOTE initial i18n
import { regions, appIdConfig } from '../../appinfo.config'
import getRegionAppInfo from './scrap'
import { getStorageAppInfo, setStorageAppInfo } from './storage'
import calculateLatestRegionStorageAppInfoAndRegionDiscountsInfo from './calculate'
import updateFeeds from './rss'

async function controller() {
  console.time('controller')
  const appIds = Object.keys(appIdConfig)
  const timestamp = Date.now()

  const regionAppInfo = await getRegionAppInfo(appIds, regions)

  if (Object.keys(regionAppInfo).length === 0) {
    console.info('No data captured, program execution has ended')
    return
  }

  const regionStorageAppInfo = getStorageAppInfo(regions)

  const discountInfos =
    calculateLatestRegionStorageAppInfoAndRegionDiscountsInfo(
      timestamp,
      regions,
      regionAppInfo,
      regionStorageAppInfo,
    )

  setStorageAppInfo(regions, regionStorageAppInfo)

  updateFeeds(discountInfos)
  console.timeEnd('controller')
}

controller()
