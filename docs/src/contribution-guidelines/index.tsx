import React, { H1, H2, List, TableOfContents } from 'jsx-to-md'
import { getCountryOrRegionText, getAppText, getAppStoreText } from '../utils'
import initI18n from '../i18n'

function getCodeOrId(type: 'code' | 'id') {
  const appStoreText = getAppStoreText()
  const url = 'https://apps.apple.com/us/app/pages/id409201541?mt=12&l=en-US'
  return [
    t('在你的苹果设备打开{0}应用', appStoreText),
    type === 'code'
      ? t('打开{0}中任何一个应用的详情', appStoreText)
      : t('打开{0}中你想添加应用的详情', appStoreText),
    t('点击{0}', ` \`${t('分享按钮')}\` `),
    t('点击{0}', ` \`${t('拷贝链接')}\` `),
    [
      t(
        '将拷贝的{0}粘贴至任何可以输入的地方，例如记事本',
        ` \`${t('链接')}\` `,
      ),
      [
        'U',
        t('你将获得类似的一个链接地址：{0}', url),
        t(
          '它的规则是：{0}',
          `${t('协议')}://apps.apple.com/${t(
            '{0}的编码',
            getCountryOrRegionText(true),
          )}/app/${t('应用的名称')}/id${t('应用的ID')}?x1=x1&x2=x2`,
        ),
        type === 'code'
          ? t(
              '例如从这个{0}链接获取到的{1}就是{2}',
              ` ${url} `,
              ` \`${t('编码')}\` `,
              ' `us` ',
            )
          : t(
              '例如从这个{0}链接获取到的{1}就是{2}',
              ` ${url} `,
              ' `ID` ',
              ' `409201541` ',
            ),
      ],
    ],
  ] as string[]
}

export default function AppList(props) {
  initI18n(props.locale)
  const countryOrRegionText = getCountryOrRegionText()
  const appText = getAppText()

  return (
    <>
      <TableOfContents text={t('目录')} open={false} />
      <H1>{t('如何参与贡献')}</H1>
      <H2>1. {t('补充{0}或{1}', countryOrRegionText, appText)}</H2>
      {t(
        '需要有一定的{0}语言基础，下面是大致的操作步骤，如果觉得上手有难度，可以提{1}',
        ' `TypeScript` ',
        ' `Issue` ',
      )}
      <List
        items={[
          'U',
          [
            t('补充{0}', countryOrRegionText),
            [
              'O',
              [
                t('获取{0}的{1}', countryOrRegionText, ` \`${t('编码')}\` `),
                ['O', ...getCodeOrId('code')],
              ],
              [
                t('修改{0}', ' `global.d.ts` '),
                [
                  'U',
                  t('假如你获取的编码是{0}', ' `xxx `'),
                  t(
                    '修改前类型是：{0}',
                    ` \`type Region = 'cn' | 'hk' | 'mo' | 'tw' | 'us'\` `,
                  ),
                  t(
                    '修改后的类型：{0}',
                    ` \`type Region = 'cn' | 'hk' | 'mo' | 'tw' | 'us' | 'xxx'\` `,
                  ),
                ],
              ],
              [
                t('修改{0}', ' `appinfo.config.ts` '),
                [
                  'O',
                  t('补充{0}变量声明', ' `regions` '),
                  t('补充{0}变量声明', ' `getRegionNameMap` '),
                  t('补充{0}变量声明', ' `regionInAppPurchasesTextMap` '),
                  t('补充{0}变量声明', ' `regionLanguageCodeMap` '),
                  t('补充{0}变量声明', ' `regionTimezoneMap` '),
                ],
              ],
            ],
          ],
          [
            t('补充{0}', appText),
            [
              'O',
              [
                t('获取{0}的{1}', appText, ' `ID` '),
                ['O', ...getCodeOrId('id')],
              ],
              [
                t('修改{0}', ' `appinfo.config.ts` '),
                ['O', t('补充{0}变量声明', ' `latestAppConfig` ')],
              ],
            ],
          ],
          t('最后将你的提交合并到本项目的{0}分支', ' `main` '),
        ]}
      />
      <H2>2. {t('其他')}</H2>
      {t(
        '若不想参与编码实现，只是有好的想法或者是发现 bug 直接提{0}',
        ' `Issue` ',
      )}
      <br />
      {t(
        '若想参与编码实现，由于现有的逻辑较多，贸然改动可能会影响已储存数据，也是先提{0}，后续可以根据其影响模块或难易程度来决定指派任务',
        ' `Issue` ',
      )}
    </>
  )
}
