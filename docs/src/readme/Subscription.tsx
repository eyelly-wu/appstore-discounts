import React, {
  H1,
  Link,
  Image,
  Bold,
  List,
  render,
  H2,
  Table,
} from 'jsx-to-md'
import { linkObj, imageObj } from '../constants'
import { regionNameMap } from 'appinfo.config'
import { getCountOrRegionText } from '../utils'

export default function Subscription() {
  return (
    <>
      <H1>{t('如何订阅')}</H1>
      <H2>RSS</H2>
      <Table
        columns={[
          {
            fieldName: 'region',
            title: t('编码'),
          },
          {
            fieldName: 'name',
            title: getCountOrRegionText(true),
          },
          {
            fieldName: 'rss',
            title: t('{0}源', 'RSS '),
          },
        ]}
        data={Object.entries(regionNameMap).reduce((res, [region, name]) => {
          res.push({
            region,
            name,
            rss: `https://raw.githubusercontent.com/eyelly-wu/appstore-discounts/main/rss/${region}.xml`,
          })
          return res
        }, [])}
      />
      <H2>Telegram</H2>
      {t(
        '点击{0}订阅',
        ` ${render(
          <Link {...linkObj['telegram-channel']}>
            <Image {...imageObj['telegram']} />
          </Link>,
        )} `,
      )}
    </>
  )
}
