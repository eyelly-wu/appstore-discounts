import dayjs from 'dayjs'
import { writeFileSync, readFileSync, existsSync } from 'fs'
import { resolve } from 'path'
import { regions } from 'appinfo.config'

const statsFilePath = resolve(
  __dirname,
  '../storage/monthly-discount-stats.json',
)

/**
 * 获取当前月份的格式化字符串（YYYY-MM）
 */
function getCurrentMonth(): string {
  return dayjs().format('YYYY-MM')
}

/**
 * 获取默认的 RegionMonthlyDiscountStats 对象
 */
function getDefaultMonthlyDiscountStats(): RegionMonthlyDiscountStats {
  return {
    month: getCurrentMonth(),
    ...regions.reduce((acc, region) => {
      acc[region] = {}
      return acc
    }, {} as Record<Region, DiscountStats>),
  }
}

function readMonthlyDiscountStats(): RegionMonthlyDiscountStats {
  if (!existsSync(statsFilePath)) {
    return getDefaultMonthlyDiscountStats()
  }
  try {
    return JSON.parse(readFileSync(statsFilePath, 'utf-8'))
  } catch {
    return getDefaultMonthlyDiscountStats()
  }
}

function saveMonthlyDiscountStats(stats: RegionMonthlyDiscountStats) {
  writeFileSync(statsFilePath, JSON.stringify(stats, null, 2), 'utf-8')
}

export default function getRegionMonthlyDiscountStats(
  regionDiscountInfo: RegionDiscountInfo,
): RegionMonthlyDiscountStats {
  const currentMonth = getCurrentMonth()
  let stats = readMonthlyDiscountStats()

  // 新月份则重置
  if (stats.month !== currentMonth) {
    stats = getDefaultMonthlyDiscountStats()
  }

  regions.forEach((region) => {
    if (!stats[region]) {
      stats[region] = {}
    }
  })

  Object.entries(regionDiscountInfo).forEach(([region, discounts]) => {
    if (!stats[region]) {
      stats[region] = {}
    }
    discounts.forEach((discount) => {
      const { trackId, discounts: discountDetails } = discount
      if (!stats[region][trackId]) {
        stats[region][trackId] = {
          all: 0,
          price: 0,
          inAppPurchase: {},
        }
      }
      stats[region][trackId].all += 1
      discountDetails.forEach((detail) => {
        if (detail.type === 'price') {
          stats[region][trackId].price += 1
        } else {
          const purchaseName = detail.name
          if (!stats[region][trackId].inAppPurchase[purchaseName]) {
            stats[region][trackId].inAppPurchase[purchaseName] = 0
          }
          stats[region][trackId].inAppPurchase[purchaseName] += 1
        }
      })
    })
  })

  stats.month = currentMonth
  saveMonthlyDiscountStats(stats)

  return stats
}
