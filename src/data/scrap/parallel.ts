import { start, end } from '../timer'
import { getInAppPurchases, getAppInfo } from './impl'

export default async function getRegionAppInfo(
  appIds: Array<string | number>,
  regions: Region[],
) {
  start('parallel getRegionAppInfo')
  const res: RegionAppInfo = {}

  await Promise.all(
    regions.map((region, i) => {
      const label = `【${i + 1}/${regions.length}】（${region}）`
      return getAppInfo(appIds, region, `${label}getAppInfo`).then(
        async (appInfos) => {
          if (appInfos.length > 0) {
            const inAppPurchasesArr: AppInfo['inAppPurchases'][] =
              await Promise.all(
                appInfos.map((appInfo, j) =>
                  getInAppPurchases(
                    appInfo,
                    region,
                    `${label}【${j + 1}/${appInfos.length}】${
                      appInfo.trackName
                    }`,
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
        },
      )
    }),
  )
  end('parallel getRegionAppInfo')
  return res
}
