import dayjs from 'dayjs'
import { isEqual, isEmpty, pick } from 'lodash'
import { getRegionDate } from './utils'
import { start, end } from './timer'
import { getTranslate } from './i18n'

const timeStorageAppInfoFields = ['price', 'formattedPrice', 'inAppPurchases']

function getPrice(priceStr: string) {
  const regexp = /[^0-9]*([0-9]+(\.[0-9]+)?)[^0-9]*/
  const [full, numberStr] = priceStr.match(regexp) || ['', '-1']
  const price = parseFloat(numberStr)
  return price
}

export function getDiscounts(
  region: Region,
  newAppInfo: TimeStorageAppInfo,
  oldAppInfo?: TimeStorageAppInfo,
) {
  const t = getTranslate(region)
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
      name: t('价格'),
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
  start('calculateLatestRegionStorageAppInfoAndRegionDiscountsInfo')
  const regionDiscountInfo = {}

  for (let i = 0; i < regions.length; i++) {
    const region = regions[i]
    const appInfos = regionAppInfo[region] || []
    const date = getRegionDate(region, timestamp)
    const discountInfos: DiscountInfo[] = []

    console.info(`【${i + 1}/${regions.length}】（${region}）`)

    if (appInfos.length > 0) {
      const storageAppInfo = regionStorageAppInfo[region]

      appInfos.forEach((appInfo) => {
        const { trackId, trackName } = appInfo
        const dateStorageAppInfo = storageAppInfo[trackId]?.history || []
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

        storageAppInfo[trackId] = {
          name: trackName,
          history: dateStorageAppInfo,
        }
      })
    }

    regionDiscountInfo[region] = discountInfos
  }

  end('calculateLatestRegionStorageAppInfoAndRegionDiscountsInfo')
  return regionDiscountInfo as RegionDiscountInfo
}
