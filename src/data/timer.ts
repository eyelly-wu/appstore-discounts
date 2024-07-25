import { isEmpty } from 'lodash'

let state: Record<
  string,
  {
    start: number
    end: number
  }
> = {}

function start(key: string) {
  if (!isEmpty(state[key])) {
    console.error(`${key}已经开始`)
    return
  }
  const timestamp = Date.now()
  console.info(`${key} 开始
  `)

  state[key] = {
    start: timestamp,
    end: timestamp,
  }
}

function end(key: string) {
  if (isEmpty(state[key])) {
    console.error(`${key}并未开始`)
    return
  }
  console.info(`
${key} 结束
`)
  state[key].end = Date.now()
}

function getDistance(start: number, end: number) {
  const difference = end - start

  if (difference === 0) return `0s`

  // 将差值转换为小时、分钟和秒
  const hours = Math.floor(difference / (1000 * 60 * 60))
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = (difference % (1000 * 60)) / 1000

  let res = ''

  if (hours !== 0) {
    res += `${hours}h`
  }

  if (minutes !== 0) {
    res += `${minutes}m`
  }

  if (seconds !== 0) {
    res += `${seconds}s`
  }

  return res
}

function summarize() {
  Object.entries(state).forEach(([key, time]) => {
    console.info(`${key} 耗时：${getDistance(time.start, time.end)}`)
  })
}

export { start, end, summarize }
