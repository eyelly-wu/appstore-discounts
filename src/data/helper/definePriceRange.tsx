import { isEmpty, isEqual } from 'lodash'
import { regions, appConfig } from 'appinfo.config'
import { getStorageAppInfo, setStorageAppInfo } from '../storage'
import { updateRangePriceInfo } from '../calculate'

function definePriceRange() {
  const regionStorageAppInfo = getStorageAppInfo(regions)
  const appIds = appConfig.map((item) => item.id)

  Object.entries(regionStorageAppInfo).forEach(([region, storageAppInfo]) => {
    appIds.forEach((appId) => {
      const storageApp = storageAppInfo[appId]
      if (!isEmpty(storageApp)) {
        const {
          history = [],
          minPriceInfo: min,
          maxPriceInfo: max,
        } = storageApp

        if (
          typeof min.price === 'undefined' ||
          typeof max.price === 'undefined'
        ) {
          const maxPriceInfo: PriceInfo & any = { price: -1 }
          const minPriceInfo: PriceInfo & any = { price: Infinity }
          history.forEach((day) => {
            day.forEach((time) => {
              updateRangePriceInfo('max', maxPriceInfo, time, region as Region)
              updateRangePriceInfo('min', minPriceInfo, time, region as Region)
            })
          })

          if (!isEqual(maxPriceInfo, max)) {
            storageApp.maxPriceInfo = maxPriceInfo
          }

          if (!isEqual(min, minPriceInfo)) {
            storageApp.minPriceInfo = minPriceInfo
          }
        }
      }
    })
  })

  setStorageAppInfo(regions, regionStorageAppInfo)
}

definePriceRange()
