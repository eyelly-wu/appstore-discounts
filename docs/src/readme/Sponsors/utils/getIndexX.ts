import { sponsorTypeSizeMap, wrapperWidth } from '../constants'

export default function getIndexX(
  sponsorType: SponsorType,
  span?: number,
): Record<number, number> {
  const sponsorRowSpan = span
  const { width } = sponsorTypeSizeMap[sponsorType]

  const restWidth = wrapperWidth - sponsorRowSpan * width
  const space = Math.floor(restWidth / (sponsorRowSpan + 1))

  const indexPosition = Array(sponsorRowSpan)
    .fill(0)
    .reduce((res, _, index) => {
      res[index] = space * (index + 1) + index * width
      return res
    }, {} as Record<number, number>)

  return indexPosition
}
