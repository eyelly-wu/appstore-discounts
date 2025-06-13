import { readFileSync } from 'node:fs'

export default function GetBase64Image(imagePath: string) {
  const logoFile = readFileSync(imagePath)

  return 'data:image/png;base64,' + logoFile.toString('base64')
}
