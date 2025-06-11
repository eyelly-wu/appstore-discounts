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
} from './constants'
import { DisplaySponsors } from './types'

export function getRenderInfo() {
  const now = dayjs()
  let existSponsors = false
  let allHeight = bottomSpace

  const displaySponsors = sponsors.reduce((res, typeSponsorInfo) => {
    const { type, sponsors = [] } = typeSponsorInfo

    const sponsorRowSpan = sponsorTypeRowSpanMap[type]
    const { height } = sponsorTypeSizeMap[type]

    const displaySponsors = sponsors.filter((sponsor) => {
      const { expireTime } = sponsor
      return now.isBefore(expireTime)
    })

    if (!isEmpty(displaySponsors)) {
      existSponsors = true
      const sponsors = chunk(displaySponsors, sponsorRowSpan)
      allHeight +=
        sponsorTypeHeight +
        sponsors.length * height +
        (sponsors.length - 1) * sponsorSpace

      res.push({
        ...typeSponsorInfo,
        name: getSponsorTypeName(type),
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
