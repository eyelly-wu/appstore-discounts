import React, { H1, List, Link } from 'jsx-to-md'
import { getCountryOrRegionText, getDocHref } from '../utils'

export default function RelateDoc() {
  return (
    <>
      <H1>{t('相关文档')}</H1>
      <List
        items={[
          'U',
          <Link href={getDocHref('FOCUS')}>
            ❤️ {t('当前追踪的{0}和对应的应用列表', getCountryOrRegionText())}
          </Link>,
          <Link href={getDocHref('CONTRIBUTION_GUIDELINES')}>
            🤝 {t('如何参与贡献')}
          </Link>,
        ]}
      />
    </>
  )
}
