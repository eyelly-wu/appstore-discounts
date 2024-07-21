import dayjs from 'dayjs'
import { Feed } from 'feed'
import { writeFileSync } from 'fs'
import { resolve } from 'path'
import { getDate } from './utils'
import React, { render } from 'jsx-to-md'

type Post = {
  id: string
  title: string
  url: string
  description: string
  content: string
  timestamp: number
}

function getShowContent(
  discountInfo: DiscountInfo,
  type: 'description' | 'content',
) {
  const {
    trackName,
    discounts,
    trackViewUrl,
    description,
    artworkUrl60,
    screenshotUrls,
    ipadScreenshotUrls,
    appletvScreenshotUrls,
  } = discountInfo

  if (type === 'description') {
    const { price, inAppPurchase } = discounts.reduce(
      (res, discount) => {
        const { type, name, from, to } = discount
        if (type === 'price') {
          res.price = `${name}: ${from} -> ${to}`
        } else {
          res.inAppPurchase.push(`${name}: ${from} -> ${to}`)
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

    return `${trackName} \n${inAppPurchase.join('\n')}`
  }

  return render(
    <>
      <a href={trackViewUrl}>
        <img src={artworkUrl60} />
      </a>
      <h1>
        <a href={trackViewUrl}>{trackName}</a>
      </h1>
      <h2>优惠信息</h2>
      <table>
        <thead>
          <tr>
            <th align="left">类型</th>
            <th width={200}>名称</th>
            <th width={120} align="right">
              原价
            </th>
            <th width={120} align="right">
              现价
            </th>
          </tr>
        </thead>
        <tbody>
          {discounts.map((discount) => {
            const { type, typeName, name, from, to } = discount

            return render(
              <tr>
                <td>{typeName}</td>
                <td>{name}</td>
                <td width={120} align="right">
                  {from}
                </td>
                <td width={120} align="right">
                  {to}
                </td>
              </tr>,
            )
          })}
        </tbody>
      </table>
      <h2>应用描述</h2>
      <p>{description}</p>
      {screenshotUrls.length && (
        <>
          <h2>iPhone 应用截图</h2>
          {screenshotUrls.map((url) => {
            return <img src={url} />
          })}
        </>
      )}
      {ipadScreenshotUrls.length && (
        <>
          <h2>iPad 应用截图</h2>
          {ipadScreenshotUrls.map((url) => {
            return <img src={url} />
          })}
        </>
      )}
      {appletvScreenshotUrls.length && (
        <>
          <h2>Apple TV 应用截图</h2>
          {appletvScreenshotUrls.map((url) => {
            return <img src={url} />
          })}
        </>
      )}
    </>,
  )
}

function generateRegionFeed(regionDiscountInfo: RegionDiscountInfo) {
  const appstoreIcon = 'https://s3.bmp.ovh/imgs/2024/07/20/491487aec936222a.png'

  const regionFeed = Object.entries(regionDiscountInfo).reduce(
    (res, [region, discountInfos]) => {
      const feed = new Feed({
        title: `AppStore Discounts（${region}）`,
        description:
          'AppStore Discounts - Made with love by appstore-discounts(https://github.com/eyelly-wu/appstore-discounts)',
        id: `https://github.com/eyelly-wu/appstore-discounts/rss/${region}.xml`,
        link: `https://apps.apple.com/${region}/app`,
        language: 'en', // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
        image: appstoreIcon,
        favicon: appstoreIcon,
        copyright: 'Copyright (c) 2024-present Eyelly Wu',
        updated: new Date(), // optional, default = today
        author: {
          name: 'Eyelly wu',
          email: 'eyelly.wu@gmail.com',
          link: 'https://github.com/eyelly-wu',
        },
      })

      discountInfos.forEach((discountInfo) => {
        const { timestamp, trackName, trackViewUrl } = discountInfo

        feed.addItem({
          title: `${getDate(timestamp)} - ${trackName} - 最新优惠信息`,
          id: `${trackName}-${timestamp}`,
          link: trackViewUrl,
          description: getShowContent(discountInfo, 'description'),
          content: getShowContent(discountInfo, 'content'),
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
  console.info({ regionDiscountInfo })

  const feed = generateRegionFeed(regionDiscountInfo)
  saveRegionFeed(feed)
}
