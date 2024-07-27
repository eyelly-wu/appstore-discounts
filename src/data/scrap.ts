import nodeFetch from 'node-fetch'
import { load } from 'cheerio'
import { regionInAppPurchasesTextMap } from '../../appinfo.config'
import { start, end } from './timer'

/**
 * https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1
 */
const BASE_URL = 'https://itunes.apple.com/lookup'

function getUrl(appIds: string[], region: Region) {
  const url = new URL(BASE_URL)

  const search = new URLSearchParams({
    id: appIds.join(','),
    country: region,
    entity: 'software',
    limit: `${appIds.length}`,
  }).toString()
  url.search = search

  return url
}

async function getInAppPurchases(url: string, region: Region): Promise<any> {
  const inAppPurchases: AppInfo['inAppPurchases'] = {}

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
  } catch (error) {
    console.error('getInAppPurchases request error:', error)
  }

  return inAppPurchases
}

async function getAppInfo(
  appIds: string[],
  region: Region,
): Promise<RequestAppInfo[]> {
  let res: RequestAppInfo[] = []

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
    if (
      (error as string).includes(
        'SyntaxError: Unexpected token < in JSON at position 0',
      )
    ) {
      res = await getAppInfo(appIds, region)
    }
  }

  return res
}

export default async function getRegionAppInfo(
  appIds: string[],
  regions: Region[],
) {
  start('getRegionAppInfo')
  let res: RegionAppInfo = {}

  for (let i = 0; i < regions.length; i++) {
    const region = regions[i]
    const label = `【${i + 1}/${regions.length}】（${region}）`
    console.info(`${label}getAppInfo`)
    const appInfos = await getAppInfo(appIds, region)
    if (appInfos.length > 0) {
      const newAppInfos: AppInfo[] = []
      for (let j = 0; j < appInfos.length; j++) {
        const appInfo = appInfos[j]
        console.log(
          `${label}【${j + 1}/${appInfos.length}】${appInfo.trackName}`,
        )
        const inAppPurchases = await getInAppPurchases(
          appInfo.trackViewUrl,
          region,
        )

        newAppInfos.push({
          ...appInfo,
          inAppPurchases,
        })
      }
      res[region] = newAppInfos
    }
  }
  end('getRegionAppInfo')
  return res
}
