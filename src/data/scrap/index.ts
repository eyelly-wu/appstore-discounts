import dayjs from 'dayjs'
import sequential from './sequential'
import parallel from './parallel'
import { regionTimezoneMap } from 'appinfo.config'

export default function (appIds: Array<string | number>, regions: Region[]) {
  const hour = dayjs().tz(regionTimezoneMap.cn).hour()

  if (hour >= 0 && hour < 12) {
    return sequential(appIds, regions)
  }

  return parallel(appIds, regions)
}
