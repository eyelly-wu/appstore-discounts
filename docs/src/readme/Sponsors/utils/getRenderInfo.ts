import dayjs from 'dayjs'
import { isEmpty, chunk } from 'lodash'
import {
  bottomSpace,
  sponsors,
  sponsorTypeHeight,
  sponsorSpace,
  getSponsorTypeName,
  sponsorTypeRowSpanMap,
  sponsorTypeSizeMap,
} from '../constants'
import { DisplaySponsor, DisplaySponsors } from '../types'
import getIndexX from './getIndexX'

export default function getRenderInfo() {
  const now = dayjs()
  let existSponsors = false
  let allHeight = bottomSpace
  let y = 0

  const displaySponsors = sponsors.reduce((res, typeSponsorInfo) => {
    const { type, sponsors = [] } = typeSponsorInfo

    const sponsorRowSpan = sponsorTypeRowSpanMap[type]
    const { height } = sponsorTypeSizeMap[type]

    const displaySponsors = sponsors.filter((sponsor) => {
      if (!sponsor) return false
      const { expireTime } = sponsor
      return now.isBefore(expireTime)
    })

    if (!isEmpty(displaySponsors)) {
      const nameY = y + Math.ceil(sponsorTypeHeight / 2)
      y += sponsorTypeHeight
      existSponsors = true
      const sponsors = chunk(displaySponsors, sponsorRowSpan).map(
        (rowSponsors) => {
          const indexX = getIndexX(type, rowSponsors.length)

          const newRowSponsors = rowSponsors.map((sponsor, i) => {
            const x = indexX[i]

            return {
              ...sponsor,
              x,
              y,
            } as DisplaySponsor
          })

          y += height

          return newRowSponsors
        },
      )

      allHeight +=
        sponsorTypeHeight +
        sponsors.length * height +
        (sponsors.length - 1) * sponsorSpace

      res.push({
        ...typeSponsorInfo,
        name: getSponsorTypeName(type),
        y: nameY,
        sponsors,
      })
    }

    return res
  }, [] as DisplaySponsors)

  return {
    existSponsors,
    displaySponsors,
    allHeight,
  }
}
