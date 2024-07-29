import fetch from 'node-fetch'
import { HttpsProxyAgent } from 'https-proxy-agent'
import React, { render } from 'jsx-to-md'
import { start, end } from './timer'
import { isEmpty } from 'lodash'
import { getTranslate } from './i18n'

function getMessage(region: Region, discountInfos: DiscountInfo[]) {
  const t = getTranslate(region)

  const msg = render(
    <>
      <b>
        {t(
          '{0}有{p1款应用}正在打折',
          `App Store（${region.toUpperCase()}）`,
          discountInfos.length,
        )}
      </b>
      {'\n'}
      {discountInfos.map((discountInfo) => {
        const { trackName, trackViewUrl, discounts = [] } = discountInfo

        const { price, inAppPurchase } = discounts.reduce(
          (res, discount) => {
            const { type, name, from, to } = discount
            function getContent() {
              return (
                <>
                  <b>{name}</b>: <s>{from}</s> → {to}
                  {'\n'}
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
                    {t('App 内购买项目')}:{'\n'}
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
            <a href={trackViewUrl}>
              <b>{trackName}</b>
            </a>
            {'\n'}
            {inAppPurchase}
          </>
        )
      })}
    </>,
  )

  return msg
}

async function sendMessage(
  telegramBotToken: string,
  region: Region,
  message: string,
  disabledLinkPreview: boolean,
  proxy?: string,
) {
  try {
    const res = (await fetch(
      `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        agent: proxy ? new HttpsProxyAgent(proxy) : null,
        body: JSON.stringify({
          chat_id: '@appstore_discounts',
          text: message,
          parse_mode: 'HTML',
          link_preview_options: {
            is_disabled: disabledLinkPreview,
          },
        }),
      },
    ).then((res) => res.json())) as {
      ok: boolean
      description: string
    }

    if (!res.ok) {
      throw res.description
    }
  } catch (error) {
    console.error('Telegram Bot sendMessage failed：\n', error)
  }
}

export async function pushTelegramNotification(
  regionDiscountInfos: RegionDiscountInfo,
) {
  start('pushTelegramNotification')
  const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN
  const isLocalDev = process.env.IS_LOCAL_DEV
  if (telegramBotToken) {
    console.info('telegramBotToken length', telegramBotToken.length)
  }
  const tempRegionDiscountInfos = Object.entries(regionDiscountInfos)
  for (let i = 0; i < tempRegionDiscountInfos.length; i++) {
    const [region, discountInfos] = tempRegionDiscountInfos[i]
    if (isEmpty(discountInfos)) continue
    const msg = getMessage(region as Region, discountInfos)
    await sendMessage(
      telegramBotToken,
      region as Region,
      msg,
      discountInfos.length > 1,
      isLocalDev ? 'http://127.0.0.1:7997' : undefined,
    )
  }
  end('pushTelegramNotification')
}
