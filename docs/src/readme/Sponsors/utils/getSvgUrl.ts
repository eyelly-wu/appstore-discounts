import { getLocaleName } from '../../../utils'

export default function getSvgUrl(type: 'code' | 'svg') {
  let localeName = getLocaleName()
  localeName = localeName ? `_${localeName}` : ''
  const branch = 'main'

  const codeUrl = `https://cdn.jsdelivr.net/gh/appstore-discounts/appstore-discounts@refs/heads/${branch}/docs/src/readme/Sponsors/sponsors${localeName}.svg`
  const svgUrl = `https://raw.githubusercontent.com/appstore-discounts/appstore-discounts/refs/heads/${branch}/docs/src/readme/Sponsors/sponsors${localeName}.svg`

  return type === 'code' ? codeUrl : svgUrl
}
