import { resolve } from 'node:path'
import { existsSync, writeFileSync } from 'node:fs'

function getFilepath(region: Region) {
  const filepath = resolve(__dirname, 'storage', `${region}.json`)
  return filepath
}

export function getStorageAppInfo(regions: Region[]) {
  let res: RegionStorageAppInfo = {}

  for (let i = 0; i < regions.length; i++) {
    const region = regions[i]
    const filepath = getFilepath(region)
    const isExist = existsSync(filepath)

    if (isExist) {
      try {
        const storageAppInfo = require(filepath)
        res[region] = storageAppInfo
      } catch (error) {
        console.error(error)
      }
    } else {
      res[region] = {}
    }
  }

  return res
}

export function setStorageAppInfo(
  regions: Region[],
  regionStorageAppInfo: RegionStorageAppInfo,
) {
  for (let i = 0; i < regions.length; i++) {
    const region = regions[i]
    const storageAppInfo = regionStorageAppInfo[region]

    if (storageAppInfo && Object.keys(storageAppInfo).length > 0) {
      const filepath = getFilepath(region)
      const content = JSON.stringify(storageAppInfo, null, 2)

      writeFileSync(filepath, content, {
        encoding: 'utf-8',
      })
    }
  }
}
