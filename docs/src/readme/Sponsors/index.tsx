import React, { Break, H1, render } from 'jsx-to-md'
import {
  sponsorTypeColorMap,
  sponsorTypeSizeMap,
  wrapperWidth,
} from './constants'
import { getRenderInfo } from './utils'
import { saveSvg, getSvgUrl } from './utils'

export default function Sponsors() {
  const { existSponsors, displaySponsors, allHeight } = getRenderInfo()

  if (!existSponsors) return

  const svgContent = render(
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={wrapperWidth}
        height={allHeight}
        style={{ backgroundColor: 'white' }}
      >
        {displaySponsors.map((displaySponsor) => {
          const { type, name, y, sponsors: rowSponsors } = displaySponsor
          const color = sponsorTypeColorMap[type]
          const { width, height } = sponsorTypeSizeMap[type]

          return (
            <>
              <text
                x="50%"
                y={y}
                text-anchor="middle"
                dominant-baseline="middle"
                font-size="20"
                fill={color}
              >
                {name}
              </text>
              {rowSponsors.map((sponsors) => {
                return (
                  <>
                    {sponsors.map((sponsor) => {
                      const { url, logo, name, x, y } = sponsor

                      const aProps = {
                        xlinkHref: url,
                      } as any

                      const imageProps = {
                        xlinkHref: logo,
                      } as any

                      return (
                        <a
                          key={url}
                          target="_blank"
                          style={{ cursor: 'pointer' }}
                          {...aProps}
                        >
                          <image
                            x={x}
                            y={y}
                            width={width}
                            height={height}
                            {...imageProps}
                          >
                            <title>{name}</title>
                          </image>
                        </a>
                      )
                    })}
                  </>
                )
              })}
            </>
          )
        })}
      </svg>
    </>,
  )

  const doSaveSvg = () => {
    let success = true
    try {
      saveSvg(svgContent)
    } catch (error) {
      success = false
    }

    return success
  }

  const saveSuccess = doSaveSvg()

  if (!saveSuccess) return null

  const title = t('赞助商')
  const codeUrl = getSvgUrl('code')
  const svgUrl = getSvgUrl('svg')

  return (
    <>
      <H1>{title}</H1>
      <Break />
      <Break />
      <div
        {...(() => ({
          align: 'center',
        }))()}
      >
        <a href={codeUrl} target="_blank">
          <img src={svgUrl} alt={title} />
        </a>
      </div>

      <Break />
      <Break />
    </>
  )
}
