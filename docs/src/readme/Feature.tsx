import React, { H1, List } from 'jsx-to-md'
import { getCountryOrRegionText } from '../utils'

export default function Vision() {
  return (
    <>
      <H1>{t('特性')}</H1>
      <List
        items={[
          'U',
          t(
            '支持任意{0}的{1}（理论上🤔）',
            getCountryOrRegionText(),
            ' `App Store` ',
          ),
          t(
            '支持追踪{0}的价格和{1}的价格',
            ` \`${t('应用本体')}\` `,
            ` \`${t('App 内购买项目')}\` `,
          ),
          [t('支持多种方式订阅折扣信息'), ['U', 'RSS', 'Telegram']],
          t('开源免费，任何人可参与贡献'),
        ]}
      />
    </>
  )
}
