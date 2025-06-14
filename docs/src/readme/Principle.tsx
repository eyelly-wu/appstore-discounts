import React, { H1, Link, List, render } from 'jsx-to-md'
import { scrapeless } from './Sponsors/sponsors'
import dayjs from 'dayjs'

export default function Principle() {
  const { expireTime, name, url } = scrapeless
  const showScrapelessSponsorTips = dayjs().isBefore(expireTime)
  const scrapelessSponsorTips = showScrapelessSponsorTips
    ? `（${t(
        '由{0}提供数据抓取能力',
        ` ${render(
          <Link href={url} title={name}>
            Scrapeless
          </Link>,
        )} `,
      )}）`
    : ''

  return (
    <>
      <H1>{t('运行机制及流程')}</H1>
      {t(
        '本项目基于{0}定时任务（每{1}分钟）自动执行以下流程：',
        ' `GitHub Actions` ',
        ' `60` ',
      )}
      <List
        items={[
          'O',
          t('获取付费排行榜应用信息'),
          t('更新跟踪应用列表'),
          [
            t('获取应用最新价格信息'),
            [
              'O',
              t(
                '通过{0}获取应用详细信息和{1}的价格',
                ` ${render(
                  <Link href="https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1">
                    iTunes Search API
                  </Link>,
                )} `,
                ` \`${t('应用本体')}\` `,
              ),
              t(
                '解析应用详情链接获取{0}的价格',
                ` \`${t('App 内购买项目')}\` `,
              ) + scrapelessSponsorTips,
            ],
          ],
          t('读取已存储价格信息'),
          t('计算折扣信息'),
          t('更新最新价格信息'),
          t('更新{0}文件', ' `RSS` '),
          t('推送通知到{0}', ' `Telegram` '),
          t('推送通知到{0}', ` \`${t('钉钉')}\` `),
          t('更新{0}及相关文档', ' `README.md` '),
          t('提交{0}更新', ' `Git` '),
        ]}
      />
      {t('如有折扣，订阅用户将收到推送')}
    </>
  )
}
