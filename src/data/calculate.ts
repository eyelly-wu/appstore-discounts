import dayjs from 'dayjs'
import { isEqual, omit, isEmpty } from 'lodash'

function getDate(timestampProps) {
  // TODO 这里应该需要根据地区来计算，不同地区计算出的日期应该是不一样的
  return dayjs(timestampProps).format('YYYY-MM-DD')
}

function getPrice(priceStr: string) {
  const regexp = /[^0-9]*([0-9]+(\.[0-9]+)?)[^0-9]*/
  let [full, numberStr] = priceStr.match(regexp) || [, '-1']
  const price = parseFloat(numberStr)
  return price
}

export function getDiscountInfo(newAppInfo: AppInfo, oldAppInfo?: AppInfo) {
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
          name,
          from: oldFormattedPrice,
          to: formattedPrice,
        })
      }
    }
  })

  return discounts
}

export function calculateLatestAppInfo(
  timestamp: number,
  regions: Region[],
  regionAppInfo: RegionAppInfo,
  regionStorageAppInfo: RegionStorageAppInfo,
) {
  for (let i = 0; i < regions.length; i++) {
    const region = regions[i]
    const appInfos = regionAppInfo[region] || []
    const date = getDate(timestamp)

    if (appInfos.length > 0) {
      const storageAppInfo = regionStorageAppInfo[region]

      appInfos.forEach((appInfo) => {
        const { trackId } = appInfo
        const dateStorageAppInfo = storageAppInfo[trackId] || []
        const timeStorageAppInfo = dateStorageAppInfo[0] || []
        const oldAppInfo = timeStorageAppInfo[0]
        const newAppInfo = {
          timestamp,
          ...appInfo,
        }

        if (!oldAppInfo) {
          timeStorageAppInfo.unshift(newAppInfo)
          dateStorageAppInfo.unshift(timeStorageAppInfo)
        } else {
          const oldDate = getDate(oldAppInfo.timestamp)
          if (oldDate === date) {
            if (!isEqual(omit(oldAppInfo, ['timestamp']), appInfo)) {
              timeStorageAppInfo.unshift(newAppInfo)
            }
          } else {
            dateStorageAppInfo.unshift([newAppInfo])
          }
          // TODO 这里可以计算出价格是否有变化
          /**
           * 1. 如果是新的一天，先判断价格，如果是免费，则加入提醒
           * 2. 否则判断今天是否已存在当前app的提醒
           *    如果存在提醒:
           *        判断是否是价格变化
           *        判断是否是内购价格变化
           */
          // TODO 合并重复的信息
        }

        storageAppInfo[trackId] = dateStorageAppInfo
      })
    }
  }
}
