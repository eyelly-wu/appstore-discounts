import { Scrapeless } from '@scrapeless-ai/sdk'
import { load } from 'cheerio'
import { isEmpty } from 'lodash'
import chalk from 'chalk'
import { regionInAppPurchasesTextMap } from '../../../../appinfo.config'

export const SCRAPELESS_TOKEN = process.env.SCRAPELESS_TOKEN

const client = new Scrapeless({
  apiKey: SCRAPELESS_TOKEN || 'empty',
})

const IN_APP_PURCHASE_MAX_TIMES = 50

export default async function getInAppPurchasesByScrapeless(
  appInfo: RequestAppInfo,
  region: Region,
  log: string,
  times = 1,
): Promise<AppInfo['inAppPurchases']> {
  console.log(log)
  const { trackViewUrl, formattedPrice, trackName } = appInfo
  const inAppPurchases: AppInfo['inAppPurchases'] = {}
  const url = `${trackViewUrl}${
    trackViewUrl.includes('?') ? '&' : '?'
  }timestamp=${Date.now()}`

  function retry() {
    if (times > IN_APP_PURCHASE_MAX_TIMES) {
      console.log(chalk.red(log))
      return inAppPurchases
    }
    return new Promise<AppInfo['inAppPurchases']>((resolve) => {
      setTimeout(() => {
        resolve(getInAppPurchasesByScrapeless(appInfo, region, log, times + 1))
      }, 1000)
    })
  }

  try {
    const tempRes = await client.universal.scrape({
      actor: 'unlocker.webunlocker',
      input: {
        url,
        redirect: true, // 改为 true 允许重定向
        method: 'GET', // Apple Store API 应该使用 GET 请求
        header: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        },
      },
    })

    const $ = load(tempRes)

    const inAppPurchasesText = regionInAppPurchasesTextMap[region]

    $('.information-list__item').each((index, element) => {
      const title = $(element).find('dt').text().trim()
      if (title === inAppPurchasesText) {
        $(element)
          .find('.list-with-numbers__item')
          .each((i, item) => {
            const name = $(item)
              .find('.list-with-numbers__item__title span')
              .text()
              .trim()
            const price = $(item)
              .find('.list-with-numbers__item__price')
              .text()
              .trim()

            if (name && price) {
              inAppPurchases[name] = price
            }
          })
      }
    })
    const price = $('.app-header__list__item--price')?.text()?.trim?.()
    const inAppPurchaseElementText = $(
      '.app-header__list__item--in-app-purchase',
    )?.text?.()
    const isPriceNotEqual = formattedPrice !== price
    const inAppPurchasesError =
      inAppPurchaseElementText && isEmpty(inAppPurchases)

    if (isPriceNotEqual) {
      console.error(
        `${log}【${trackName}】appInfo price(${formattedPrice}) !== pageInfo price(${price})`,
      )
    }

    if (inAppPurchasesError) {
      console.error(
        `${log}【${trackName}】is In-App purchase，but can't get relate info`,
      )
    }

    if ((isPriceNotEqual && isEmpty(price)) || inAppPurchasesError) {
      return retry()
    }
  } catch (error) {
    console.error(`${log} getInAppPurchases request error:`, error)
    return retry()
  }

  return inAppPurchases
}
