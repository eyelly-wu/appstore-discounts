import { chunk } from 'lodash'
import pLimit from 'p-limit'
import { start, end } from '../../timer'
import { getInAppPurchases, getAppInfo } from './impl'
import getInAppPurchasesByScrapeless, {
  SCRAPELESS_TOKEN,
} from './getInAppPurchasesByScrapeless'

export default async function getRegionAppInfo(
  appIds: Array<string | number>,
  regions: Region[],
  limitCount: number,
) {
  const label = `parallel getRegionAppInfo(${limitCount})`
  start(label)
  const res: RegionAppInfo = {}
  const limit = pLimit(limitCount)
  const chunkAppIds = chunk(appIds, 200)

  for (let i = 0; i < regions.length; i++) {
    const region = regions[i]
    const label = `【${i + 1}/${regions.length}】（${region}）`
    const appInfos = (
      await Promise.all(
        chunkAppIds.map((appIds, i) => {
          const label2 = `${label}【${i + 1}/${chunkAppIds.length}】`
          return getAppInfo(appIds, region, `${label2}getAppInfo`)
        }),
      )
    ).reduce((res, appInfos) => {
      res.push(...appInfos)
      return res
    }, [])

    if (appInfos.length > 0) {
      const inAppPurchasesArr: AppInfo['inAppPurchases'][] = await Promise.all(
        appInfos.map((appInfo, j) =>
          limit(() =>
            (SCRAPELESS_TOKEN
              ? getInAppPurchasesByScrapeless
              : getInAppPurchases)(
              appInfo,
              region,
              `${label}【${j + 1}/${appInfos.length}】${appInfo.trackName}`,
            ),
          ),
        ),
      )
      res[region] = appInfos.reduce((res, appInfo, j) => {
        res.push({
          ...appInfo,
          inAppPurchases: inAppPurchasesArr[j],
        })
        return res
      }, [] as AppInfo[])
    }
  }

  end(label)
  return res
}
