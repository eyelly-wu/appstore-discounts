import { Break, H1 } from 'jsx-to-md'
import React from 'react'
import {
  sponsorTypeColorMap,
  sponsorTypeHeight,
  sponsorTypeSizeMap,
  wrapperWidth,
} from './constants'
import { getRenderInfo } from './getRenderInfo'
import { scrapeless } from './sponsors'

export default function Sponsors() {
  const { existSponsors, displaySponsors, allHeight } = getRenderInfo()

  if (!existSponsors) return

  const divProps = {
    xmlns: 'http://www.w3.org/1999/xhtml',
  } as any

  const tempProps = {
    align: 'center',
  }

  const { name, logo, url } = scrapeless

  return (
    <>
      <H1>{t('赞助商')}</H1>
      <p {...tempProps}>
        <a href={url}>
          <img width="85" height="85" src={logo} alt={name} />
        </a>
      </p>
    </>
  )

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
        style={{ backgroundColor: 'white' }}
      >
        <foreignObject x="0" y="0" width="100%" height="100%">
          <div
            {...divProps}
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div>
              {displaySponsors.map((displaySponsor) => {
                const { type, name, sponsors: rowSponsors } = displaySponsor
                const color = sponsorTypeColorMap[type]
                const { width, height } = sponsorTypeSizeMap[type]
                const gap = Math.floor(width / 4)

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
                            gap,
                          }}
                        >
                          {sponsors.map((sponsor) => {
                            const { url, logo, name } = sponsor

                            return (
                              <a
                                key={url}
                                href={url}
                                target="_blank"
                                style={{ cursor: 'pointer' }}
                              >
                                <img
                                  src={logo}
                                  alt={name}
                                  style={{
                                    width: width,
                                    height: height,
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
          </div>
        </foreignObject>
      </svg>
      <Break />
      <Break />
    </>
  )
}
