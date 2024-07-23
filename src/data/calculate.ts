import dayjs from 'dayjs'
import { isEqual, isEmpty, pick } from 'lodash'
import { getRegionDate } from './utils'
import { regionInAppPurchasesTextMap } from 'appinfo.config'

const timeStorageAppInfoFields = ['price', 'formattedPrice', 'inAppPurchases']

function getPrice(priceStr: string) {
  const regexp = /[^0-9]*([0-9]+(\.[0-9]+)?)[^0-9]*/
  let [full, numberStr] = priceStr.match(regexp) || [, '-1']
  const price = parseFloat(numberStr)
  return price
}

export function getDiscounts(
  region: Region,
  newAppInfo: TimeStorageAppInfo,
  oldAppInfo?: TimeStorageAppInfo,
) {
  const { price, formattedPrice, inAppPurchases } = newAppInfo

  const discounts: Discount[] = []

  if (isEmpty(oldAppInfo)) {
    return discounts
  }

  const {
    price: oldPrice,
    formattedPrice: oldFormattedPrice,
    inAppPurchases: oldInAppPurchases,
  } = oldAppInfo

  if (oldPrice > price) {
    discounts.push({
      type: 'price',
      // TODO i18n
      typeName: '应用价格',
      name: '价格',
      from: oldFormattedPrice,
      to: formattedPrice,
    })
  }

  Object.entries(inAppPurchases).forEach(([name, formattedPrice]) => {
    const oldFormattedPrice = oldInAppPurchases[name]
    if (oldFormattedPrice) {
      const oldPrice = getPrice(oldFormattedPrice)
      const price = getPrice(formattedPrice)

      if (oldPrice != -1 && price != -1 && oldPrice > price) {
        discounts.push({
          type: 'inAppPurchase',
          typeName: regionInAppPurchasesTextMap[region],
          name,
          from: oldFormattedPrice,
          to: formattedPrice,
        })
      }
    }
  })

  return discounts
}

export default function calculateLatestRegionStorageAppInfoAndRegionDiscountsInfo(
  timestamp: number,
  regions: Region[],
  regionAppInfo: RegionAppInfo,
  regionStorageAppInfo: RegionStorageAppInfo,
) {
  const regionDiscountInfo = {}

  for (let i = 0; i < regions.length; i++) {
    const region = regions[i]
    const appInfos = regionAppInfo[region] || []
    const date = getRegionDate(region, timestamp)
    const discountInfos: DiscountInfo[] = []

    if (appInfos.length > 0) {
      const storageAppInfo = regionStorageAppInfo[region]

      appInfos.forEach((appInfo) => {
        const { trackId } = appInfo
        const dateStorageAppInfo = storageAppInfo[trackId] || []
        const timeStorageAppInfo = dateStorageAppInfo[0] || []
        const oldAppInfo = timeStorageAppInfo[0]
        const newAppInfo: TimeStorageAppInfo = {
          timestamp,
          ...(pick(appInfo, timeStorageAppInfoFields) as Omit<
            TimeStorageAppInfo,
            'timestamp'
          >),
        }
        let discounts: Discount[] = []

        if (!oldAppInfo) {
          timeStorageAppInfo.unshift(newAppInfo)
          dateStorageAppInfo.unshift(timeStorageAppInfo)
        } else {
          const oldDate = getRegionDate(region, oldAppInfo.timestamp)
          if (oldDate === date) {
            if (
              !isEqual(
                pick(oldAppInfo, timeStorageAppInfoFields),
                pick(newAppInfo, timeStorageAppInfoFields),
              )
            ) {
              timeStorageAppInfo.unshift(newAppInfo)
            }
          } else {
            dateStorageAppInfo.unshift([newAppInfo])
          }

          discounts = getDiscounts(region, newAppInfo, oldAppInfo)

          if (discounts.length) {
            discountInfos.push({
              ...appInfo,
              timestamp,
              discounts,
            })
          }
        }

        storageAppInfo[trackId] = dateStorageAppInfo
      })
    }

    regionDiscountInfo[region] = discountInfos
  }

  return regionDiscountInfo as RegionDiscountInfo
}
