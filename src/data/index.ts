import { regions, appIdConfig } from '../../appinfo.config'
import getRegionAppInfo from './scrap'
import { getStorageAppInfo, setStorageAppInfo } from './storage'
import calculateLatestAppInfo from './calculate'
import updateFeeds from './rss'

async function controller() {
  console.time('controller')
  const appIds = Object.keys(appIdConfig)
  const timestamp = Date.now()

  // scape data
  const regionAppInfo = await getRegionAppInfo(appIds, regions)

  if (Object.keys(regionAppInfo).length === 0) {
    console.info('未抓取到数据，程序已结束')
    return
  }

  // get storage data
  const regionStorageAppInfo = getStorageAppInfo(regions)

  // calculate discounts and merge appinfo
  const discountInfos = calculateLatestAppInfo(
    timestamp,
    regions,
    regionAppInfo,
    regionStorageAppInfo,
  )

  // console.info({ regionStorageAppInfo, regionAppInfo })

  // update storage data
  setStorageAppInfo(regions, regionStorageAppInfo)

  // update rss
  updateFeeds(discountInfos)
  console.timeEnd('controller')
}

controller()

// console.info('date', getDate(timestamp))
