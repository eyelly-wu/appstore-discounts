import React, { Image, Link, Break } from 'jsx-to-md'
import { linkObj, imageObj } from '../constants'
import { renderLanguage } from '../utils'

export default function Top() {
  const props = {
    align: 'center',
  }

  return (
    <div {...props}>
      <p style={{ fontSize: 18 }}>
        {t(
          '开源的 App Store 折扣信息助手，基于 GitHub Actions 实现，支持 RSS，Telegram 和 钉钉 通知',
        )}
      </p>
      <Break />
      {renderLanguage('README')}
      <Break />
      <Break />
      <Link {...linkObj['github-stars']}>
        <Image {...imageObj['github-stars']} />
      </Link>
      <Break />
      <Link {...linkObj['github-issues']}>
        <Image {...imageObj['github-issues']} />
      </Link>
      <Break />
      <Break />
    </div>
  )
}
