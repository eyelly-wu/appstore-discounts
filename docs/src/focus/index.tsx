import React, {
  H1,
  Table,
  Break,
  BlockQuote,
  StrikeThrough,
  render,
} from 'jsx-to-md'
import { getRegionNameMap, regions, appConfig } from 'appinfo.config'
import { getCountryOrRegionText, getAppText, getAppStoreText } from '../utils'
import { getStorageAppInfo } from '@/data/storage'
import initI18n from '../i18n'

function getDeleteContent(content: string, showDelete = false) {
  return showDelete
    ? ` ${render(<StrikeThrough children={`${content}`} />)} `
    : content
}

export default function Focus(props) {
  initI18n(props.locale)

  const countryOrRegionText = getCountryOrRegionText()
  const appText = getAppText()
  const regionStorageAppInfo = getStorageAppInfo(regions)
  const data = appConfig.reduce(
    (res, { id: appId, allowNotification, addType }, index) => {
      const showDelete = allowNotification === false

      const item: any = {
        index: appConfig.length - index,
        appId: getDeleteContent(appId + '', showDelete),
        addType: addType === 'auto' ? t('自动') : t('手动'),
      }
      regions.forEach((region) => {
        const storageAppInfoObj = regionStorageAppInfo[region] || {}
        item[region] = getDeleteContent(
          storageAppInfoObj[appId]?.name || '❌',
          showDelete,
        )
      })

      res.push(item)

      return res
    },
    [],
  )

  return (
    <>
      <H1>{t('关注焦点')}</H1>
      {t(
        '当前已收录{p0个国家或地区}和{p1个应用}',
        regions.length,
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
        <br />
        {t(
          '如果列表中的某些应用频繁的在打折，吸引你安装使用，你也成功被吸引安装使用了，但最终使用体验却很差卸载了应用。对于类似情况欢迎反馈到{0}，同一个应用反馈的次数超过{1}次，该应用的折扣信息推送极有可能会被禁止',
          ' `Issue` ',
          ' `10` ',
        )}
        <br />
        {t(
          '目前被{0}标记的应用表示已被禁止推送通知',
          ` ${render(<StrikeThrough children={t('删除线')} />)} `,
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
          {
            fieldName: 'addType',
            title: t('添加方式'),
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
