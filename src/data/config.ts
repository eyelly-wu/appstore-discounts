import { resolve } from 'node:path'
import { readFileSync, writeFileSync } from 'node:fs'
import { isEmpty } from 'lodash'
import { start, end } from './timer'
import { appConfig as oldAppConfig } from '../../appinfo.config'

const contentEncoding = 'utf-8'
const filepath = resolve(__dirname, '../../appinfo.config.ts')
const matchStr = 'latestAppConfig: AppConfig[] = ['

function getInsertContent(appConfig: AppConfig[]) {
  const str = JSON.stringify(appConfig, null, 2).slice(1, -2)
  return `${str},`
}

function updateImpl(appConfig: AppConfig[]) {
  const content = readFileSync(filepath, { encoding: contentEncoding })
  const markIndex = content.lastIndexOf(matchStr)
  if (markIndex === -1) {
    console.error('No opening bracket found in appinfo.config.ts')
    return
  }

  const realIndex = markIndex + matchStr.length
  const preContent = content.slice(0, realIndex)
  const suffixContent = content.slice(realIndex)
  const newContent = preContent + getInsertContent(appConfig) + suffixContent
  writeFileSync(filepath, newContent, { encoding: contentEncoding })
}

export default function updateAppInfoConfig(
  regionAppTopInfo: Partial<RegionAppTopInfo>,
) {
  start('updateAppInfoConfig')

  const ids = oldAppConfig.map((item) => `${item.id}`)

  const idNameMap: Record<string, Partial<Record<Region, string>>> = {}

  Object.entries(regionAppTopInfo).forEach(([region, appTopInfo]) => {
    appTopInfo.forEach(({ id, name }) => {
      if (ids.includes(id)) return
      const item = idNameMap[id]

      if (item) {
        item[region] = name
      } else {
        idNameMap[id] = {
          [region]: name,
        }
      }
    })
  })

  if (isEmpty(idNameMap)) {
    end('updateAppInfoConfig')
    return oldAppConfig
  }

  const appConfig: AppConfig[] = Object.entries(idNameMap).reduce(
    (res, [id, regionNameMap]) => {
      const appConfig: AppConfig = {
        id: parseInt(id),
        name: regionNameMap,
        addType: 'auto',
      }
      res.push(appConfig)

      return res
    },
    [],
  )

  updateImpl(appConfig)

  end('updateAppInfoConfig')

  return [...appConfig, ...oldAppConfig]
}

// updateAppInfoConfig()
