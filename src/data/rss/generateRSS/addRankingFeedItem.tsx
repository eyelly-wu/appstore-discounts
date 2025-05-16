import React, { render } from 'jsx-to-md'
import { Feed } from 'feed'
import { getTranslate } from '@/data/i18n'
import { homepage } from '../../../../package.json'
import {
  getRegionNameMap,
  regionInAppPurchasesTextMap,
  regions,
} from 'appinfo.config'
import { getAppStoreUrl } from '@/data/utils'
import { isEmpty } from 'lodash'

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
  const regionNameMap = getRegionNameMap(t)
  const inAppPurchasesTextMap = regionInAppPurchasesTextMap[region]
  const date = new Date()

  const { allCount, manualCount, autoCount, disabledCount } =
    getCount(appConfig)
  const storageAppInfo = regionStorageAppInfo[region]
  const regionAppIds = Object.keys(storageAppInfo)
  const { regionAppConfig, disableApps } = appConfig.reduce(
    (res, item) => {
      const { id, allowNotification, addType } = item
      const isInclude = regionAppIds.includes(`${id}`)

      if (isInclude) {
        res.regionAppConfig.push(item)
        if (allowNotification === false) {
          const appInfo = storageAppInfo[id]
          res.disableApps.push({ id, name: appInfo.name, addType })
        }
      }

      return res
    },
    {
      regionAppConfig: [] as AppConfig[],
      disableApps: [] as Array<{
        id: number
        name: string
        addType: AppConfig['addType']
      }>,
    },
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
    id: 'ranking' + region + date.toUTCString(),
    link: homepage,
    description: t('最新统计数据报告'),
    content: render(
      <>
        <h2>{t('追踪的国家或地区')}</h2>
        <ol>
          {regions.map((regionItem) => {
            const content = `${
              regionNameMap[regionItem]
            }(${regionItem.toUpperCase()})`
            const isCurrent = regionItem === region

            return <li>{isCurrent ? <b>{content}</b> : content}</li>
          })}
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
              <th>{t('应用')}</th>
              <th>{t('优惠次数')}</th>
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
                  <td>
                    <a href={getAppStoreUrl(region, appId)}>{name}</a>
                  </td>
                  <td>
                    <ul>
                      <li>
                        <span>{t('总次数')}</span>：<b>{all}</b>
                      </li>
                      <li>
                        <span>{t('价格')}</span>：<b>{`${price}`}</b>
                      </li>
                      {!isEmpty(inAppPurchasesInfo) && (
                        <li>
                          <span>{inAppPurchasesTextMap}</span>
                          <ol>
                            {inAppPurchasesInfo.map(({ name, count }) => {
                              return (
                                <li>
                                  <i>{name}</i>：<b>{count}</b>
                                </li>
                              )
                            })}
                          </ol>
                        </li>
                      )}
                    </ul>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <h2>{t('禁用推送应用列表')}</h2>
        <table>
          <thead>
            <tr>
              <th>{t('序号')}</th>
              <th>{t('应用')}</th>
              <th>{t('添加方式')}</th>
            </tr>
          </thead>
          <tbody>
            {disableApps.map((disableApp, index) => {
              const { id, name, addType } = disableApp
              return (
                <tr>
                  <td>
                    <b>{index + 1}</b>
                  </td>
                  <td>
                    <a href={getAppStoreUrl(region, id)}>{name}</a>
                  </td>
                  <td>{addType === 'auto' ? t('自动添加') : t('人为添加')}</td>
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
