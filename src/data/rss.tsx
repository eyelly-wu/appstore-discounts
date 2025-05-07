import { Feed } from 'feed'
import { writeFileSync, readFileSync, existsSync } from 'fs'
import { resolve } from 'path'
import React, { render } from 'jsx-to-md'
import { getTranslate } from './i18n'
import { Translate } from 'i18n-pro'
import { regionInAppPurchasesTextMap } from 'appinfo.config'
import { homepage } from '../../package.json'
import { start, end } from './timer'

const followUserId = '73658201673997312'

const followRegionFeedMap: Record<Region, string> = {
  cn: '49753297431966720',
  hk: '67474973430475776',
  mo: '73536165737884672',
  tw: '73536236398899200',
  us: '49753370488353792',
  tr: '99063474310237184',
}

const rssFilePath = resolve(__dirname, './storage/rss.json')

function readRegionDiscountInfo(): RegionDiscountInfo {
  const defaultRegionDiscountInfo: RegionDiscountInfo = {
    cn: [],
    hk: [],
    mo: [],
    tw: [],
    us: [],
    tr: [],
  }

  if (!existsSync(rssFilePath)) return defaultRegionDiscountInfo

  try {
    const data = JSON.parse(readFileSync(rssFilePath, 'utf-8'))
    const threeDaysAgo = Date.now() - 3 * 24 * 60 * 60 * 1000

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

function mergeRegionDiscountInfo(
  newInfo: RegionDiscountInfo,
  existingInfo: RegionDiscountInfo,
): RegionDiscountInfo {
  const merged = { ...existingInfo }

  Object.entries(newInfo).forEach(([region, discounts]) => {
    if (!merged[region]) {
      merged[region] = discounts
    } else {
      // 合并新旧数组项
      merged[region] = [...merged[region], ...discounts].sort(
        (a, b) => b.timestamp - a.timestamp,
      )
    }
  })

  saveRegionDiscountInfo(merged)
  return merged
}

function getShowDescription(discountInfo: DiscountInfo) {
  const { discounts } = discountInfo

  const { price, inAppPurchase } = discounts.reduce(
    (res, discount) => {
      const { type, name, from, to } = discount
      if (type === 'price') {
        res.price = `${name}: ${from} → ${to}`
      } else {
        res.inAppPurchase.push(`${name}: ${from} → ${to}`)
      }

      return res
    },
    {
      price: '',
      inAppPurchase: [],
    },
  )

  if (price) {
    inAppPurchase.unshift(price)
  }

  return inAppPurchase.join('<br/>')
}

function getShowContent(
  region: Region,
  t: Translate,
  discountInfo: DiscountInfo,
) {
  const {
    discounts,
    trackViewUrl,
    description,
    artworkUrl60,
    screenshotUrls = [],
    ipadScreenshotUrls = [],
    appletvScreenshotUrls = [],
  } = discountInfo

  const discountInfoContent = (() => {
    const { price, inAppPurchase } = discounts.reduce(
      (res, discount) => {
        const { type, name, from, to, range } = discount
        if (type === 'price') {
          res.price = (
            <>
              <span>{from}</span>
              {` → `}
              <b>
                <strong>{to}</strong>
              </b>
              <span>{range}</span>
            </>
          )
        } else {
          res.inAppPurchase.push(
            <>
              <strong>{name}：</strong>
              <span>{from}</span>
              {` → `}
              <b>
                <strong>{to}</strong>
              </b>
              <span>{range}</span>
            </>,
          )
        }

        return res
      },
      {
        price: '' as any,
        inAppPurchase: [],
      },
    )

    return (
      <>
        {price && (
          <>
            <h2>
              {t('优惠信息')}
              {`（${t('价格')}：${render(price)}）`}
            </h2>
          </>
        )}
        {!price && <h2>{t('优惠信息')}</h2>}
        {inAppPurchase.length && (
          <>
            <h3>{regionInAppPurchasesTextMap[region]}</h3>
            <ul>
              {inAppPurchase.map((content) => (
                <li>{content}</li>
              ))}
            </ul>
          </>
        )}
      </>
    )
  })()

  return render(
    <>
      <a href={trackViewUrl}>
        <img src={artworkUrl60} />
      </a>
      {discountInfoContent}
      <h2>{t('应用描述')}</h2>
      <p>{description}</p>
      {(screenshotUrls.length ||
        ipadScreenshotUrls.length ||
        appletvScreenshotUrls.length) && (
        <>
          <h2>{t('应用截屏')}</h2>
          {screenshotUrls.length && (
            <>
              <h3>iPhone</h3>
              {screenshotUrls.map((url) => {
                return <img src={url} />
              })}
            </>
          )}
          {ipadScreenshotUrls.length && (
            <>
              <h3>iPad</h3>
              {ipadScreenshotUrls.map((url) => {
                return <img src={url} />
              })}
            </>
          )}
          {appletvScreenshotUrls.length && (
            <>
              <h3>Apple TV</h3>
              {appletvScreenshotUrls.map((url) => {
                return <img src={url} />
              })}
            </>
          )}
        </>
      )}
    </>,
  )
}

function generateRegionFeed(regionDiscountInfo: RegionDiscountInfo) {
  const appstoreIcon = 'https://s3.bmp.ovh/imgs/2024/07/20/491487aec936222a.png'

  const regionFeed = Object.entries(regionDiscountInfo).reduce(
    (res, [key, discountInfos]) => {
      if (discountInfos.length === 0) return res

      const region = key as Region
      const t = getTranslate(region)
      const followFeedId = followRegionFeedMap[region]

      const feed = new Feed({
        title: `App Store Discounts（${region.toUpperCase()}）`,
        description: `App Store Discounts - Made with love by appstore-discounts(${homepage})
This message is used to verify that this feed (feedId:${followFeedId}) belongs to me (userId:${followUserId}). Join me in enjoying the next generation information browser https://follow.is.
feedId:${followFeedId}+userId:${followUserId}
`,
        id: `${homepage}/rss/${region}.xml`,
        link: `https://apps.apple.com/${region}/app`,
        image: appstoreIcon,
        favicon: appstoreIcon,
        copyright: 'Copyright (c) 2024-present Eyelly Wu',
        updated: new Date(),
        author: {
          name: 'Eyelly wu',
          email: 'eyelly.wu@gmail.com',
          link: 'https://github.com/eyelly-wu',
        },
      })

      feed.addItem({
        title: '🎉 ' + t('欢迎订阅{0}', ' App Store Discounts'),
        id: 'welcome',
        link: homepage,
        ...(() => {
          const description = t(
            '感谢您订阅我们的 RSS 源，我们是一个致力于为全球用户带来 App Store 最新折扣信息的社区驱动项目。我们的目标是让每一位用户都能第一时间掌握心爱应用的优惠动态，无论是应用本身的价格下调，还是内购项目的限时促销，我们都将为您一网打尽！',
          )
          const content = render(
            <>
              <p>{description}</p>
              <h1>{t('关于我们的 RSS 源')}</h1>
              <ul>
                <li>{t('专注于推送 App Store 应用的优惠信息')}</li>
                <li>{t('只要应用价格降低或内购项降价，我们就会及时推送')}</li>
                <li>{t('每个应用的优惠信息以单独的 feed 形式呈现')}</li>
                <li>
                  {t('RSS 源完全开源，您可以随时查看、贡献和添加您关注的应用')}
                </li>
              </ul>
              <h1>{t('找到我们')}</h1>
              <a href={homepage}>App Store Discounts</a>
              <h1>{t('最后')}</h1>
              <p>{t('如果本项目对你有帮助，请帮我们点个{0}可好', ' ⭐️ ')}</p>
            </>,
          )
          return {
            description,
            content,
          }
        })(),
        date: new Date(),
      })

      discountInfos.forEach((discountInfo) => {
        const { timestamp, trackName, trackViewUrl } = discountInfo

        feed.addItem({
          title: `${trackName}`,
          id: `${trackName}-${timestamp}`,
          link: trackViewUrl,
          description: getShowDescription(discountInfo),
          content: getShowContent(region, t, discountInfo),
          date: new Date(timestamp),
        })
      })

      res[region] = feed.atom1()

      return res
    },
    {},
  )

  return regionFeed as RegionFeed
}

function saveRegionFeed(feeds: RegionFeed) {
  Object.entries(feeds).forEach(([region, feed]) => {
    const filepath = resolve(__dirname, '../../rss', `${region}.xml`)
    writeFileSync(filepath, feed, 'utf-8')
  })
}

export default function updateFeeds(regionDiscountInfo: RegionDiscountInfo) {
  start('updateFeeds')

  const existingInfo = readRegionDiscountInfo()
  const mergedInfo = mergeRegionDiscountInfo(regionDiscountInfo, existingInfo)
  const feed = generateRegionFeed(mergedInfo)

  saveRegionFeed(feed)
  end('updateFeeds')
}
