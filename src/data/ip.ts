import nodeFetch from 'node-fetch'
import { resolve } from 'path'
import { start, end } from './timer'
import { existsSync, writeFileSync } from 'fs'
import { isEmpty } from 'lodash'

type IpCounter = Record<string, number>

const filepath = resolve(__dirname, 'storage/ip.json')

function getStorageIpCounter() {
  let res: IpCounter = {}
  const isExist = existsSync(filepath)

  if (isExist) {
    try {
      res = require(filepath)
    } catch (error) {
      console.error(error)
    }
  }

  return res
}

function setStorageIpCounter(ipCounter: IpCounter) {
  if (!isEmpty(ipCounter)) {
    const content = JSON.stringify(ipCounter, null, 2)

    writeFileSync(filepath, content, {
      encoding: 'utf-8',
    })
  }
}

async function getIp() {
  let ip = undefined

  try {
    const res = (await nodeFetch('https://api.ipify.org/?format=json', {
      method: 'GET',
      headers: {
        Accept: '*/*',
      },
    }).then((res) => res.json())) as { ip: string }
    ip = res.ip
  } catch (error) {
    console.error(error)
  }

  return ip
}

export default async function updateIpCounter() {
  const isLocalDev = process.env.IS_LOCAL_DEV
  if (['true', true].includes(isLocalDev)) return
  start('updateIpCounter')

  const storageIpCounter = getStorageIpCounter()
  const ip = await getIp()
  if (ip) {
    const counter = storageIpCounter[ip] || 0
    storageIpCounter[ip] = counter + 1
  }
  setStorageIpCounter(storageIpCounter)

  end('updateIpCounter')
}
