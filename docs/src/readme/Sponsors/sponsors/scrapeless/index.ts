import { resolve } from 'node:path'
import getBase64Image from '../../utils/getBase64Image'

const scrapeless: Sponsor = {
  name: 'Scrapeless - Effortless Web Scraping Toolkit for Business and Developers',
  url: 'https://www.scrapeless.com/en',
  logo: getBase64Image(resolve(__dirname, 'logo.png')),
  expireTime: '2025-07-14T23:59:59',
}

export default scrapeless
