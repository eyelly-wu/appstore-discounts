import { writeFileSync, readFileSync, existsSync } from 'fs'
import { resolve } from 'path'
import { regions } from 'appinfo.config'

const rssFilePath = resolve(__dirname, '../storage/rss.json')

// 记录最近多少天的折扣信息
const keepDays = 3

export function readRegionDiscountInfo(): RegionDiscountInfo {
  // 动态生成 defaultRegionDiscountInfo
  const defaultRegionDiscountInfo: RegionDiscountInfo = regions.reduce(
    (acc, region) => {
      acc[region] = []
      return acc
    },
    {} as RegionDiscountInfo,
  )

  if (!existsSync(rssFilePath)) return defaultRegionDiscountInfo

  try {
    const data = JSON.parse(readFileSync(rssFilePath, 'utf-8'))
    const threeDaysAgo = Date.now() - keepDays * 24 * 60 * 60 * 1000

    return Object.entries(defaultRegionDiscountInfo).reduce(
      (filtered, [region, _]) => {
        const discounts = Array.isArray(data[region]) ? data[region] : []
        const validDiscounts = discounts.filter((discount) => {
          return (
            typeof discount === 'object' &&
            discount !== null &&
            typeof discount.timestamp === 'number' &&
            discount.timestamp >= threeDaysAgo &&
            typeof discount.trackName === 'string' &&
            typeof discount.trackViewUrl === 'string' &&
            Array.isArray(discount.discounts)
          )
        })
        filtered[region as Region] = validDiscounts
        return filtered
      },
      { ...defaultRegionDiscountInfo },
    )
  } catch {
    return defaultRegionDiscountInfo
  }
}

function saveRegionDiscountInfo(regionDiscountInfo: RegionDiscountInfo) {
  writeFileSync(
    rssFilePath,
    JSON.stringify(regionDiscountInfo, null, 2),
    'utf-8',
  )
}

export default function getLastKeepDaysRegionDiscountInfo(
  newInfo: RegionDiscountInfo,
): RegionDiscountInfo {
  const existingInfo = readRegionDiscountInfo()

  const merged = Object.entries(newInfo).reduce((res, [region, discounts]) => {
    res[region] = [...(existingInfo[region] || []), ...discounts].sort(
      (a, b) => b.timestamp - a.timestamp,
    )

    return res
  }, {} as RegionDiscountInfo)

  saveRegionDiscountInfo(merged)
  return merged
}
