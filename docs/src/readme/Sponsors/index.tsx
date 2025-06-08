import { Break, H1 } from 'jsx-to-md'
import React from 'react'
import {
  sponsorHeight,
  sponsorRowGap,
  sponsorTypeColorMap,
  sponsorTypeHeight,
  sponsorWidth,
  wrapperWidth,
} from './constants'
import { getRenderInfo } from './getRenderInfo'

export default function Sponsors() {
  const { existSponsors, displaySponsors, allHeight } = getRenderInfo()

  if (!existSponsors) return

  const divProps = {
    xmlns: 'http://www.w3.org/1999/xhtml',
  } as any

  return (
    <>
      <H1>{t('赞助商')}</H1>
      <Break />
      <Break />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={wrapperWidth}
        height={allHeight}
        style={{ backgroundColor: '#fff' }}
      >
        <foreignObject x="0" y="0" width="100%" height="100%">
          <div {...divProps}>
            {displaySponsors.map((displaySponsor) => {
              const { type, name, sponsors: rowSponsors } = displaySponsor
              const color = sponsorTypeColorMap[type]

              return (
                <>
                  <div
                    style={{
                      height: sponsorTypeHeight,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontWeight: 500,
                      fontSize: 20,
                      color,
                    }}
                  >
                    {name}
                  </div>
                  {rowSponsors.map((sponsors) => {
                    return (
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: sponsorRowGap,
                        }}
                      >
                        {sponsors.map((sponsor) => {
                          const { url, logo } = sponsor

                          return (
                            <a
                              key={url}
                              href={url}
                              target="_blank"
                              style={{ cursor: 'pointer' }}
                            >
                              <img
                                src={logo}
                                alt={url}
                                style={{
                                  width: sponsorWidth,
                                  height: sponsorHeight,
                                  objectFit: 'contain',
                                }}
                              />
                            </a>
                          )
                        })}
                      </div>
                    )
                  })}
                </>
              )
            })}
          </div>
        </foreignObject>
      </svg>
      <Break />
      <Break />
    </>
  )
}
