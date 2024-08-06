import React, { Break, H1, List } from 'jsx-to-md'
import { getCountryOrRegionText } from '../utils'

export default function StartHistory() {
  const sourceProps1 = {
    srcset:
      'https://api.star-history.com/svg?repos=eyelly-wu/appstore-discounts&type=Date&theme=dark',
  }
  const sourceProps2 = {
    srcset:
      'https://api.star-history.com/svg?repos=eyelly-wu/appstore-discounts&type=Date',
  }

  return (
    <>
      <H1>Star History</H1>
      <a href="https://star-history.com/#eyelly-wu/appstore-discounts&Date">
        <picture>
          <source media="(prefers-color-scheme: dark)" {...sourceProps1} />
          <source media="(prefers-color-scheme: light)" {...sourceProps2} />
          <img
            alt="Star History Chart"
            src="https://api.star-history.com/svg?repos=eyelly-wu/appstore-discounts&type=Date"
          />
        </picture>
      </a>
      <Break />
    </>
  )
}
