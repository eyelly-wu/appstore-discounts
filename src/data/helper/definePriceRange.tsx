import { isEmpty } from 'lodash'
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
        const { history = [] } = storageApp
        const maxPriceInfo: PriceInfo & any = { price: -1 }
        const minPriceInfo: PriceInfo & any = { price: Infinity }
        history.forEach((day) => {
          day.forEach((time) => {
            updateRangePriceInfo('max', maxPriceInfo, time)
            updateRangePriceInfo('min', minPriceInfo, time)
          })
        })

        storageApp.maxPriceInfo = maxPriceInfo
        storageApp.minPriceInfo = minPriceInfo
      }
    })
  })

  setStorageAppInfo(regions, regionStorageAppInfo)
}

definePriceRange()
