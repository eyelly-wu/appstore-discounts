import pLimit from 'p-limit'
import { start, end } from '../../timer'
import { getAppTopInfo } from './impl'
import { isEmpty } from 'lodash'

export default async function getRegionAppTopInfo(
  regions: Region[],
  limitCount: number,
): Promise<Partial<RegionAppTopInfo>> {
  const label = `parallel getRegionAppTopInfo(${limitCount})`
  start(label)
  const res: Partial<RegionAppTopInfo> = {}
  const limit = pLimit(limitCount)

  const getAppTopInfoArr = await Promise.all(
    regions.map((region, i) =>
      limit(() =>
        getAppTopInfo(
          region,
          `${label}【${i + 1}/${regions.length}】${region}`,
        ),
      ),
    ),
  )

  getAppTopInfoArr.forEach((appTopInfo, i) => {
    const region = regions[i]
    if (!isEmpty(appTopInfo)) {
      res[region] = appTopInfo
    }
  })

  end(label)
  return res
}
