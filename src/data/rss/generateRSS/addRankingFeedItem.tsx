import React, { render } from 'jsx-to-md'
import { Feed } from 'feed'
import { getTranslate } from '@/data/i18n'
import { homepage } from '../../../../package.json'
import {
  getRegionNameMap,
  regionInAppPurchasesTextMap,
  regions,
} from 'appinfo.config'

function getCount(appConfig: AppConfig[]) {
  const allCount = appConfig.length
  let autoCount = 0
  let disabledCount = 0

  appConfig.forEach((app) => {
    const { addType, allowNotification } = app
    if (allowNotification === false) {
      disabledCount++
    }
    if (addType === 'auto') {
      autoCount++
    }
  })

  return {
    allCount,
    manualCount: allCount - autoCount,
    autoCount,
    disabledCount,
  }
}

export default function addRankingFeedItem(props: {
  feed: Feed
  region: Region
  appConfig: AppConfig[]
  regionStorageAppInfo: RegionStorageAppInfo
  regionMonthlyDiscountStats: RegionMonthlyDiscountStats
}) {
  const {
    feed,
    region,
    appConfig,
    regionStorageAppInfo,
    regionMonthlyDiscountStats,
  } = props

  const t = getTranslate(region)
  const regionNameMap = getRegionNameMap()
  const inAppPurchasesTextMap = regionInAppPurchasesTextMap[region]
  const date = new Date()

  const { allCount, manualCount, autoCount, disabledCount } =
    getCount(appConfig)
  const storageAppInfo = regionStorageAppInfo[region]
  const regionAppIds = Object.keys(storageAppInfo)
  const regionAppConfig = appConfig.filter((item) =>
    regionAppIds.includes(`${item.id}`),
  )
  const {
    allCount: regionAllCount,
    manualCount: regionManualCount,
    autoCount: regionAutoCount,
    disabledCount: regionDisabledCount,
  } = getCount(regionAppConfig)

  const monthlyDiscountStats = regionMonthlyDiscountStats[region]

  const sortMonthlyDiscountStats = Object.entries(monthlyDiscountStats)
    .sort(([, { all: count1 }], [, { all: count2 }]) => {
      return count2 - count1
    })
    .map(([appId, stats]) => {
      const { all, price, inAppPurchase } = stats
      const appInfo = storageAppInfo[appId]
      const inAppPurchasesInfo: Array<{ name: string; count: number }> =
        Object.entries(inAppPurchase)
          .sort(([, value], [, value2]) => value2 - value)
          .map(([name, count]) => ({ name, count }))

      return {
        appId,
        name: appInfo.name || t('获取名称失败'),
        all,
        price,
        inAppPurchasesInfo,
      }
    })

  feed.addItem({
    title: t('统计数据报告'),
    id: 'ranking' + date.toUTCString(),
    link: homepage,
    description: t('最新统计数据报告'),
    content: render(
      <>
        <h2>{t('追踪的国家或地区')}</h2>
        <ol>
          {regions.map((region) => (
            <li>
              {regionNameMap[region]}({region.toUpperCase()})
            </li>
          ))}
        </ol>
        <h2>{t('追踪的应用数量统计')}</h2>
        <table>
          <thead>
            <tr>
              <th>{t('类别')}</th>
              <th>{t('总应用')}</th>
              <th>{t('人为添加')}</th>
              <th>{t('自动添加')}</th>
              <th>{t('禁止推送')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{t('所有')}</td>
              <td>
                <b>{allCount}</b>
              </td>
              <td>
                <b>{manualCount}</b>
              </td>
              <td>
                <b>{autoCount}</b>
              </td>
              <td>
                <b>{disabledCount}</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>{region.toUpperCase()}</b>
              </td>
              <td>
                <b>{regionAllCount}</b>
              </td>
              <td>
                <b>{regionManualCount}</b>
              </td>
              <td>
                <b>{regionAutoCount}</b>
              </td>
              <td>
                <b>{regionDisabledCount}</b>
              </td>
            </tr>
          </tbody>
        </table>
        <h2>
          {t('本月应用优惠次数排行')}({region.toUpperCase()})
        </h2>
        <blockquote>
          {t(
            '由于支持了根据付费应用排行榜自动添加追踪的应用，现目前大部分应用是自动添加的，应用的质量是未知不可控的，当前这个排行榜会作为后续禁用推送的一个参考',
          )}
        </blockquote>
        <table>
          <thead>
            <tr>
              <th>{t('名次')}</th>
              <th>{t('应用ID')}</th>
              <th>{t('应用名称')}</th>
              <th>{t('总次数')}</th>
              <th>{t('价格')}</th>
              <th>{inAppPurchasesTextMap}</th>
            </tr>
          </thead>
          <tbody>
            {sortMonthlyDiscountStats.map((monthlyDiscountStat, index) => {
              const { appId, name, all, price, inAppPurchasesInfo } =
                monthlyDiscountStat
              return (
                <tr>
                  <td>
                    <b>{index + 1}</b>
                  </td>
                  <td>{appId}</td>
                  <td>{name}</td>
                  <td>
                    <b>{all}</b>
                  </td>
                  <td>
                    <b>{price}</b>
                  </td>
                  <td>
                    <ol>
                      {inAppPurchasesInfo.map(({ name, count }) => {
                        return (
                          <li>
                            <i>{name}</i>：<b>{count}</b>
                          </li>
                        )
                      })}
                    </ol>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </>,
    ),
    date,
  })
}
