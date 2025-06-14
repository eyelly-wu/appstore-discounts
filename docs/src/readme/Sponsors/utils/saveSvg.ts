import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { getLocaleName } from '../../../utils'

export default function saveSvg(content: string) {
  const localeName = getLocaleName()

  writeFileSync(
    resolve(
      __dirname,
      '../',
      `sponsors${localeName ? `_${localeName}` : ''}.svg`,
    ),
    content,
    {
      encoding: 'utf-8',
    },
  )
}
