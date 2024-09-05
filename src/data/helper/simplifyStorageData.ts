import { isEqual, omit } from 'lodash'
import { getStorageAppInfo, setStorageAppInfo } from '../storage'
import { regions } from 'appinfo.config'

function simplifyStorageData() {
  const regionStorageAppInfo = getStorageAppInfo(regions)
  const newRegionStorageAppInfo = Object.entries(regionStorageAppInfo).reduce(
    (res, [region, storageAppInfo]) => {
      const newStoreAppInfo = Object.entries(storageAppInfo).reduce(
        (res2, [appId, appInfo]) => {
          const { history, ...restInfo } = appInfo

          let compareTimeHistory: any = null

          res2[appId] = {
            ...restInfo,
            history: (history as any[]).reduceRight(
              (historyRes, dayHistory) => {
                const newDayHistory = (dayHistory as any[]).reduceRight(
                  (dayHistoryRes, timeHistory) => {
                    if (
                      !isEqual(
                        omit(compareTimeHistory, ['timestamp']),
                        omit(timeHistory, ['timestamp']),
                      )
                    ) {
                      dayHistoryRes.unshift(timeHistory)
                      compareTimeHistory = timeHistory
                    }
                    return dayHistoryRes
                  },
                  [],
                )

                if (newDayHistory.length > 0) {
                  historyRes.unshift(newDayHistory)
                }

                return historyRes
              },
              [],
            ),
          }

          return res2
        },
        {},
      )

      res[region] = newStoreAppInfo

      return res
    },
    {},
  )
  setStorageAppInfo(regions, newRegionStorageAppInfo)
}

simplifyStorageData()
