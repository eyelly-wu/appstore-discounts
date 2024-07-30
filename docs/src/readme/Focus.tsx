import React, { H1, Table, Break, BlockQuote } from 'jsx-to-md'
import { getRegionNameMap, regions, appConfig } from 'appinfo.config'
import { getCountryOrRegionText, getAppText, getAppStoreText } from '../utils'
import { getStorageAppInfo } from '@/data/storage'

export default function Focus() {
  const countryOrRegionText = getCountryOrRegionText()
  const appText = getAppText()
  const regionStorageAppInfo = getStorageAppInfo(regions)
  const data = appConfig.reduce((res, { id: appId }, index) => {
    const item: any = {
      index: index + 1,
      appId,
    }
    regions.forEach((region) => {
      const storageAppInfoObj = regionStorageAppInfo[region] || {}
      item[region] = storageAppInfoObj[appId]?.name || '❌'
    })

    res.push(item)

    return res
  }, [])

  return (
    <>
      <H1>{t('关注焦点')}</H1>
      {t(
        '当前已收录{0}个{1}和{p2个应用}',
        ` \`${regions.length}\` `,
        countryOrRegionText,
        appConfig.length,
      )}
      <br />
      {t(
        '只有下面罗列出的{0}的{1}有折扣信息时，才会有推送，如果你所在{2}或喜欢的{3}不在列表中，欢迎补充',
        countryOrRegionText,
        appText,
        countryOrRegionText,
        appText,
      )}
      <br />
      <BlockQuote>
        {t(
          '特别说明：下表中{0}表示在当前{1}的{2}不存在该应用',
          ' `❌` ',
          countryOrRegionText,
          getAppStoreText(),
        )}
      </BlockQuote>
      <Break />
      <Table
        columns={[
          {
            fieldName: 'index',
            title: t('序号'),
          },
          {
            fieldName: 'appId',
            title: 'App ID',
          },
          ...Object.entries(getRegionNameMap()).reduce(
            (res, [region, name]) => {
              res.push({
                fieldName: region,
                title: `${name}（${region}）`,
              })
              return res
            },
            [],
          ),
        ]}
        data={data}
      />
    </>
  )
}
