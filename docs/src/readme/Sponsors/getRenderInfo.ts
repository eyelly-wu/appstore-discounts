import dayjs from 'dayjs'
import { isEmpty, chunk } from 'lodash'
import {
  bottomSpace,
  sponsors,
  sponsorRowSpan,
  sponsorTypeHeight,
  sponsorHeight,
  sponsorSpace,
  getSponsorTypeName,
} from './constants'
import { DisplaySponsors } from './types'

export function getRenderInfo() {
  const now = dayjs()
  let existSponsors = false
  let allHeight = bottomSpace

  const displaySponsors = sponsors.reduce((res, typeSponsorInfo) => {
    const { type, sponsors = [] } = typeSponsorInfo

    const displaySponsors = sponsors.filter((sponsor) => {
      const { expireTime } = sponsor
      return now.isBefore(expireTime)
    })

    if (!isEmpty(displaySponsors)) {
      existSponsors = true
      const sponsors = chunk(displaySponsors, sponsorRowSpan)
      allHeight +=
        sponsorTypeHeight +
        sponsors.length * sponsorHeight +
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
