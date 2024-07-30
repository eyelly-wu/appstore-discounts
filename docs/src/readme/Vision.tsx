import React, { Break, H1 } from 'jsx-to-md'

export default function Vision() {
  return (
    <>
      <Break />
      <H1>{t('愿景')}</H1>
      {t(
        '成为{0}用户信赖的省钱助手，让更多人都能以优惠的价格购买到自己喜欢的应用',
        ' `App Store` ',
      )}
    </>
  )
}
