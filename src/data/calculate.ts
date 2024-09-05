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

export function updateRangePriceInfo(
  type: 'min' | 'max',
  priceInfo: PriceInfo,
  appInfo: TimeStorageAppInfo,
) {
  const { price: oldPrice } = priceInfo
  const {
    price: newPrice,
    formattedPrice: newFormattedPrice,
    inAppPurchases,
  } = appInfo

  if (
    (type === 'max' && newPrice > oldPrice) ||
    (type === 'min' && newPrice < oldPrice)
  ) {
    priceInfo.price = newPrice
    priceInfo.formattedPrice = newFormattedPrice
  }

  Object.entries(inAppPurchases).forEach(([name, formattedPrice]) => {
    const oldFormattedPrice = priceInfo[name]
    if (!oldFormattedPrice) {
      priceInfo[name] = formattedPrice
      return
    }

    const oldPrice = getPrice(oldFormattedPrice as string)
    const newPrice = getPrice(formattedPrice)

    if (
      (type === 'max' && newPrice > oldPrice) ||
      (type === 'min' && newPrice < oldPrice)
    ) {
      priceInfo[name] = formattedPrice
    }
  })
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
        const currentStorageAppInfo = storageAppInfo[trackId]
        const dateStorageAppInfo = currentStorageAppInfo?.history || []
        const timeStorageAppInfo = dateStorageAppInfo[0] || []
        const oldAppInfo = timeStorageAppInfo[0]
        const newAppInfo: TimeStorageAppInfo = {
          timestamp,
          ...(pick(appInfo, timeStorageAppInfoFields) as Omit<
            TimeStorageAppInfo,
            'timestamp'
          >),
        }
        let maxPriceInfo = currentStorageAppInfo?.maxPriceInfo || {}
        let minPriceInfo = currentStorageAppInfo?.minPriceInfo || {}
        let discounts: Discount[] = []

        if (!oldAppInfo) {
          timeStorageAppInfo.unshift(newAppInfo)
          dateStorageAppInfo.unshift(timeStorageAppInfo)
          minPriceInfo = maxPriceInfo = {
            ...pick(appInfo, ['price,formattedPrice']),
            ...appInfo.inAppPurchases,
          }
        } else {
          const oldDate = getRegionDate(region, oldAppInfo.timestamp)
          const isPriceChange = !isEqual(
            pick(oldAppInfo, timeStorageAppInfoFields),
            pick(newAppInfo, timeStorageAppInfoFields),
          )

          if (oldDate === date) {
            if (isPriceChange) {
              timeStorageAppInfo.unshift(newAppInfo)
            }
          } else if (isPriceChange) {
            dateStorageAppInfo.unshift([newAppInfo])
          }

          if (isPriceChange) {
            updateRangePriceInfo('max', maxPriceInfo as PriceInfo, newAppInfo)
            updateRangePriceInfo('min', minPriceInfo as PriceInfo, newAppInfo)

            discounts = getDiscounts(region, newAppInfo, oldAppInfo)

            if (discounts.length) {
              discountInfos.push({
                ...appInfo,
                timestamp,
                discounts,
              })
            }
          }
        }

        storageAppInfo[trackId] = {
          name: trackName,
          maxPriceInfo: maxPriceInfo as PriceInfo,
          minPriceInfo: minPriceInfo as PriceInfo,
          history: dateStorageAppInfo,
        }
      })
    }

    regionDiscountInfo[region] = discountInfos
  }

  end('calculateLatestRegionStorageAppInfoAndRegionDiscountsInfo')
  return regionDiscountInfo as RegionDiscountInfo
}
