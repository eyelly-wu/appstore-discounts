import React, { render } from 'jsx-to-md'
import { Feed } from 'feed'
import { getTranslate } from '@/data/i18n'
import { homepage } from '../../../../package.json'

export default function addWelcomeFeedItem(feed: Feed, region: Region) {
  const t = getTranslate(region)

  feed.addItem({
    title: '🎉 ' + t('欢迎订阅{0}', ' App Store Discounts'),
    id: 'welcome',
    link: homepage,
    ...(() => {
      const description = t(
        '感谢您订阅我们的 RSS 源，我们是一个致力于为全球用户带来 App Store 最新折扣信息的社区驱动项目。我们的目标是让每一位用户都能第一时间掌握心爱应用的优惠动态，无论是应用本身的价格下调，还是内购项目的限时促销，我们都将为您一网打尽！',
      )
      const content = render(
        <>
          <p>{description}</p>
          <h1>{t('关于我们的 RSS 源')}</h1>
          <ul>
            <li>{t('专注于推送 App Store 应用的优惠信息')}</li>
            <li>{t('只要应用价格降低或内购项降价，我们就会及时推送')}</li>
            <li>{t('每个应用的优惠信息以单独的 feed 形式呈现')}</li>
            <li>
              {t('RSS 源完全开源，您可以随时查看、贡献和添加您关注的应用')}
            </li>
          </ul>
          <h1>{t('找到我们')}</h1>
          <a href={homepage}>App Store Discounts</a>
          <h1>{t('最后')}</h1>
          <p>{t('如果本项目对你有帮助，请帮我们点个{0}可好', ' ⭐️ ')}</p>
        </>,
      )
      return {
        description,
        content,
      }
    })(),
    date: new Date(),
  })
}
