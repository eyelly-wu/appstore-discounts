import nodeFetch from 'node-fetch'
import { load } from 'cheerio'
import { isEmpty } from 'lodash'
import { regionInAppPurchasesTextMap } from '../../../appinfo.config'

const IN_APP_PURCHASE_MAX_TIMES = 50

/**
 * https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1
 */
const BASE_URL = 'https://itunes.apple.com/lookup'

function getUrl(appIds: Array<string | number>, region: Region) {
  const url = new URL(BASE_URL)

  const search = new URLSearchParams({
    id: appIds.join(','),
    country: region,
    entity: 'software',
    limit: `${appIds.length}`,
    timestamp: Date.now() + '',
  }).toString()
  url.search = search

  return url
}

export async function getInAppPurchases(
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
    if (times > IN_APP_PURCHASE_MAX_TIMES) return inAppPurchases
    return new Promise<AppInfo['inAppPurchases']>((resolve) => {
      setTimeout(() => {
        resolve(getInAppPurchases(appInfo, region, log, times + 1))
      }, 1000)
    })
  }

  try {
    const tempRes = (await nodeFetch(url, {
      method: 'GET',
      headers: {
        Accept: '*/*',
      },
    }).then((res) => res.text())) as string

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

export async function getAppInfo(
  appIds: Array<string | number>,
  region: Region,
  log: string,
): Promise<RequestAppInfo[]> {
  let res: RequestAppInfo[] = []
  console.log(log)
  try {
    const tempRes = (await nodeFetch(getUrl(appIds, region), {
      method: 'GET',
      headers: {
        Accept: '*/*',
      },
    }).then((res) => res.json())) as ResponseResult

    const errorMessage = tempRes.errorMessage

    if (errorMessage) {
      throw errorMessage
    }

    res = (tempRes as ResponseResult).results
  } catch (error) {
    console.error('getAppInfo request error:', error)
    const errorMsg = typeof error === 'string' ? error : error?.toString?.()
    if (
      errorMsg.includes('SyntaxError: Unexpected token < in JSON at position 0')
    ) {
      res = await getAppInfo(appIds, region, log)
    }
  }

  return res
}
