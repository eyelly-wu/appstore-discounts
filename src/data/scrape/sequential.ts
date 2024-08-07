import { start, end } from '../timer'
import { getInAppPurchases, getAppInfo } from './impl'

export default async function getRegionAppInfo(
  appIds: Array<string | number>,
  regions: Region[],
) {
  start('sequential getRegionAppInfo')
  const res: RegionAppInfo = {}

  for (let i = 0; i < regions.length; i++) {
    const region = regions[i]
    const label = `【${i + 1}/${regions.length}】（${region}）`
    const appInfos = await getAppInfo(appIds, region, `${label}getAppInfo`)

    if (appInfos.length > 0) {
      const newAppInfos: AppInfo[] = []
      for (let j = 0; j < appInfos.length; j++) {
        const appInfo = appInfos[j]
        const inAppPurchases = await getInAppPurchases(
          appInfo,
          region,
          `${label}【${j + 1}/${appInfos.length}】${appInfo.trackName}`,
        )

        newAppInfos.push({
          ...appInfo,
          inAppPurchases,
        })
      }
      res[region] = newAppInfos
    }
  }
  end('sequential getRegionAppInfo')
  return res
}
