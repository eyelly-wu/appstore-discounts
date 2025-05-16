import React, { render } from 'jsx-to-md'
import { Feed } from 'feed'
import { getTranslate } from '@/data/i18n'
import { homepage } from '../../../../package.json'
import { regionInAppPurchasesTextMap } from 'appinfo.config'

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

export default function addDiscountFeedItems(props: {
  feed: Feed
  discountInfos: DiscountInfo[]
  region: Region
}) {
  const { feed, discountInfos, region } = props
  const t = getTranslate(region)

  discountInfos.forEach((discountInfo) => {
    const { timestamp, trackName, trackViewUrl } = discountInfo

    feed.addItem({
      title: `${trackName}`,
      id: `${trackName}-${region}-${timestamp}`,
      link: trackViewUrl,
      description: getShowDescription(discountInfo),
      content: getShowContent(region, t, discountInfo),
      date: new Date(timestamp),
    })
  })
}
