import { isEqual, isEmpty, pick, get } from 'lodash'
import { getRegionDate } from './utils'
import { start, end } from './timer'
import { getTranslate } from './i18n'

const timeStorageAppInfoFields = ['price', 'formattedPrice', 'inAppPurchases']

function getPrice(priceStrProp: string, region: Region) {
  let priceStr = priceStrProp

  if (region === 'tr') {
    priceStr = priceStr
      .replace('.', 'dot')
      .replace(',', '.')
      .replace('dot', ',')
  }

  priceStr = priceStr.replace(',', '')
  const regexp = /[^0-9]*([0-9]+(\.[0-9]+)?)[^0-9]*/
  const [full, numberStr] = priceStr.match(regexp) || ['', '-1']
  const price = parseFloat(numberStr)
  return price
}

function getPriceRange(
  value: number,
  minPriceInfo: PriceInfo,
  maxPriceInfo: PriceInfo,
  region: Region,
  key = 'formattedPrice',
) {
  const min = get(minPriceInfo, key) as string
  const max = get(maxPriceInfo, key) as string

  if (typeof min !== 'undefined' && typeof max !== 'undefined') {
    const minPrice = getPrice(min, region)
    const maxPrice = getPrice(max, region)

    if (value !== minPrice || value !== maxPrice) {
      return `[${min} ~ ${max}]`
    }
  }

  return ''
}

export function getDiscounts(
  region: Region,
  minPriceInfo: PriceInfo,
  maxPriceInfo: PriceInfo,
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
    const priceRange = getPriceRange(price, minPriceInfo, maxPriceInfo, region)

    discounts.push({
      type: 'price',
      name: t('价格'),
      from: oldFormattedPrice,
      to: formattedPrice,
      range: priceRange,
    })
  }

  Object.entries(inAppPurchases).forEach(([name, formattedPrice]) => {
    const oldFormattedPrice = oldInAppPurchases[name]
    if (oldFormattedPrice) {
      const oldPrice = getPrice(oldFormattedPrice, region)
      const price = getPrice(formattedPrice, region)

      if (oldPrice != -1 && price != -1 && oldPrice > price) {
        const priceRange = getPriceRange(
          price,
          minPriceInfo,
          maxPriceInfo,
          region,
          name,
        )

        discounts.push({
          type: 'inAppPurchase',
          name,
          from: oldFormattedPrice,
          to: formattedPrice,
          range: priceRange,
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
  region: Region,
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

    const oldPrice = getPrice(oldFormattedPrice as string, region)
    const newPrice = getPrice(formattedPrice, region)

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
        let maxPriceInfo = (currentStorageAppInfo?.maxPriceInfo ||
          {}) as PriceInfo
        let minPriceInfo = (currentStorageAppInfo?.minPriceInfo ||
          {}) as PriceInfo
        let discounts: Discount[] = []

        if (!oldAppInfo) {
          timeStorageAppInfo.unshift(newAppInfo)
          dateStorageAppInfo.unshift(timeStorageAppInfo)
          minPriceInfo = maxPriceInfo = {
            ...pick(appInfo, ['price', 'formattedPrice']),
            ...appInfo.inAppPurchases,
          } as any
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
            updateRangePriceInfo('max', maxPriceInfo, newAppInfo, region)
            updateRangePriceInfo('min', minPriceInfo, newAppInfo, region)

            discounts = getDiscounts(
              region,
              minPriceInfo,
              maxPriceInfo,
              newAppInfo,
              oldAppInfo,
            )

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
