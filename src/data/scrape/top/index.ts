import parallel from './parallel'

export default function (regions: Region[]) {
  const limitCount = regions.length
  return parallel(regions, limitCount)
}
