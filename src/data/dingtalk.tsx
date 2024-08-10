import fetch from 'node-fetch'
import React, { render } from 'jsx-to-md'
import { start, end } from './timer'
import { isEmpty } from 'lodash'
import { getTranslate } from './i18n'

function getMessage(region: Region, discountInfos: DiscountInfo[]) {
  const t = getTranslate(region)

  const msg = render(
    <>
      <h3>
        {t(
          '{0}有{p1款应用}正在打折',
          `App Store（${region.toUpperCase()}）`,
          discountInfos.length,
        )}
      </h3>
      {discountInfos.map((discountInfo) => {
        const { trackName, trackViewUrl, discounts = [] } = discountInfo

        const { price, inAppPurchase } = discounts.reduce(
          (res, discount) => {
            const { type, name, from, to } = discount
            function getContent() {
              return (
                <>
                  <b>{name}</b>: <s>{from}</s> → {to}
                  <br />
                </>
              )
            }

            const content = getContent()

            if (type === 'price') {
              res.price = content
            } else {
              res.inAppPurchase.push(
                res.inAppPurchase.length === 0 ? (
                  <>
                    {t('App 内购买项目')}:
                    <br />
                    {content}
                  </>
                ) : (
                  content
                ),
              )
            }

            return res
          },
          {
            price: '' as any,
            inAppPurchase: [],
          },
        )

        if (price) {
          inAppPurchase.unshift(price)
        }

        return (
          <>
            <br />
            <a href={trackViewUrl}>
              <b>{trackName}</b>
            </a>
            <div>{inAppPurchase}</div>
          </>
        )
      })}
    </>,
  )

  return msg
}

async function sendMessage(
  dingTalkAccessToken: string,
  title: string,
  message: string,
) {
  try {
    const res = (await fetch(
      `https://oapi.dingtalk.com/robot/send?access_token=${dingTalkAccessToken}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          msgtype: 'markdown',
          markdown: {
            title,
            text: message,
          },
        }),
      },
    ).then((res) => res.json())) as {
      errcode: number
      errmsg: string
    }

    const { errcode, errmsg } = res

    if (errcode !== 0) {
      throw errmsg
    }
  } catch (error) {
    console.error('DingTalk sendMessage failed：\n', error)
  }
}

export default async function pushDingTalkNotification(
  regionDiscountInfos: RegionDiscountInfo,
) {
  start('pushDingTalkNotification')
  const dingTalkBotToken = process.env.DING_TALK_BOT_TOKEN
  const tempRegionDiscountInfos = Object.entries(regionDiscountInfos)
  for (let i = 0; i < tempRegionDiscountInfos.length; i++) {
    const [region, discountInfos] = tempRegionDiscountInfos[i]
    if (isEmpty(discountInfos)) continue
    const msg = getMessage(region as Region, discountInfos)
    const t = getTranslate(region as Region)

    await sendMessage(
      dingTalkBotToken,
      t(
        '{0}有{p1款应用}正在打折',
        `App Store（${region.toUpperCase()}）`,
        discountInfos.length,
      ),
      msg,
    )
  }
  end('pushDingTalkNotification')
}
