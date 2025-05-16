import dayjs from 'dayjs'
import utcPlugin from 'dayjs/plugin/utc'
import timezonePlugin from 'dayjs/plugin/timezone'
import { regionTimezoneMap } from 'appinfo.config'

dayjs.extend(utcPlugin)
dayjs.extend(timezonePlugin)

export function getRegionDate(region: Region, timestamp: number) {
  const timezone = regionTimezoneMap[region]
  return dayjs(timestamp).tz(timezone).format('YYYY/MM/DD')
}

export function getAppStoreUrl(region: Region, id: string | number) {
  return `https://apps.apple.com/${region}/app/id${id}`
}
