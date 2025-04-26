import nodeFetch from 'node-fetch'

const limit = 10

function getUrl(region: Region) {
  const url = `https://itunes.apple.com/${region}/rss/toppaidapplications/limit=${limit}/json`
  return url
}

export async function getAppTopInfo(
  region: Region,
  log: string,
): Promise<AppTopInfo[]> {
  const res: AppTopInfo[] = []
  console.log(log)
  try {
    const tempRes = (await nodeFetch(getUrl(region), {
      method: 'GET',
      headers: {
        Accept: '*/*',
      },
    }).then((res) => res.json())) as AppTopInfoResponse

    tempRes.feed?.entry.forEach((appInfo) => {
      const name = appInfo['im:name'].label
      const id = appInfo['id'].attributes['im:id']

      if (name && id) {
        res.push({ id, name })
      }
    })
  } catch (error) {
    console.error('getAppTopInfo request error:', error)
  }

  return res
}
