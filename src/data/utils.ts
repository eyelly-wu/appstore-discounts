import dayjs from 'dayjs'

export function getDate(timestampProps) {
  // TODO 这里应该需要根据地区来计算，不同地区计算出的日期应该是不一样的
  return dayjs(timestampProps).format('YYYY/MM/DD')
}
