import { Translate } from 'i18n-pro'

declare global {
  type Region = 'cn' | 'hk' | 'mo' | 'tw' | 'us'

  type AppIdConfig = Record<string, string | Partial<Record<Region, string>>>

  type ResponseResult = {
    resultCount: number
    results: RequestAppInfo[]
    errorMessage?: string
  }

  type RequestAppInfo = {
    isGameCenterEnabled: boolean
    advisories: any[]
    supportedDevices: string[]
    features: string[]
    screenshotUrls: string[]
    ipadScreenshotUrls: string[]
    appletvScreenshotUrls: any[]
    artworkUrl60: string
    artworkUrl512: string
    artworkUrl100: string
    artistViewUrl: string
    kind: string
    currency: string
    trackId: number
    trackName: string
    releaseNotes: string
    price: number
    description: string
    isVppDeviceBasedLicensingEnabled: boolean
    releaseDate: string
    genreIds: string[]
    bundleId: string
    sellerName: string
    primaryGenreName: string
    primaryGenreId: number
    currentVersionReleaseDate: string
    averageUserRating: number
    averageUserRatingForCurrentVersion: number
    trackCensoredName: string
    languageCodesISO2A: string[]
    fileSizeBytes: string
    formattedPrice: string
    contentAdvisoryRating: string
    userRatingCountForCurrentVersion: number
    trackViewUrl: string
    trackContentRating: string
    minimumOsVersion: string
    artistId: number
    artistName: string
    genres: string[]
    version: string
    wrapperType: string
    userRatingCount: number
  }

  type AppInfo = RequestAppInfo & {
    inAppPurchases: Record<string, string>
  }

  type RegionAppInfo = Partial<Record<Region, AppInfo[]>>

  type TimeStorageAppInfo = {
    timestamp: number
  } & AppInfo

  type DateStorageAppInfo = TimeStorageAppInfo[]

  type StorageAppInfo = Record<string, DateStorageAppInfo[]>

  type RegionStorageAppInfo = Partial<Record<Region, StorageAppInfo>>

  type DiscountType = 'price' | 'inAppPurchase'

  type Discount = {
    type: DiscountType
    name: 'price' | string
    from: string
    to: string
  }

  type DiscountInfo = {
    appId: AppInfo['trackId']
    discounts: Discount[]
  }

  const tr: Translate
}
