import { isEmpty, isEqual, omit } from 'lodash'
import chalk from 'chalk'
import { getStorageAppInfo, setStorageAppInfo } from '../storage'
import { regions, appConfig } from 'appinfo.config'

function fixInAppPurchaseError() {
  const regionStorageAppInfo = getStorageAppInfo(regions)
  const appIds = appConfig.map((item) => item.id)

  Object.entries(regionStorageAppInfo).forEach(([region, storageAppInfo]) => {
    appIds.forEach((appId) => {
      const storageApp = storageAppInfo[appId]
      if (!isEmpty(storageApp)) {
        const { history = [], name } = storageApp
        history.forEach((day, dayIndex) => {
          if (day.length === 1) return

          const isExistInAppPurchase = day.some(
            (item) => !isEmpty(item.inAppPurchases),
          )
          if (!isExistInAppPurchase) return

          const withoutInAppPurchaseIndexs = day.reduce((res, item, i) => {
            const { inAppPurchases } = item
            if (isEmpty(inAppPurchases)) {
              res.push(i)
            }
            return res
          }, [])

          if (withoutInAppPurchaseIndexs.length === 0) return

          const deleteIndexs = []

          withoutInAppPurchaseIndexs.forEach((withoutInAppPurchaseIndex) => {
            const time = day[withoutInAppPurchaseIndex]
            if (withoutInAppPurchaseIndex === 0) {
              if (dayIndex === 0) {
                console.log(
                  `${region} ${name} withoutInAppPurchaseIndex === 0 and dayIndex === 0`,
                )
                return
              }

              const lastDay = history[dayIndex - 1]

              const lastDayLastTime = lastDay[lastDay.length - 1]

              const isPriceEqualWithBefore = isEqual(
                time.price,
                lastDayLastTime.price,
              )

              if (!isPriceEqualWithBefore) return
              const nextTime = day[1]
              const isPriceEqualWithNext = isEqual(time.price, nextTime.price)
              if (!isPriceEqualWithNext) return
              deleteIndexs.push(withoutInAppPurchaseIndex)
            } else if (withoutInAppPurchaseIndex === day.length - 1) {
              const lastDayLastTime = day[withoutInAppPurchaseIndex - 1]
              const isPriceEqualWithBefore = isEqual(
                time.price,
                lastDayLastTime.price,
              )
              if (!isPriceEqualWithBefore) return
              deleteIndexs.push(withoutInAppPurchaseIndex)
            } else {
              const lastDayLastTime = day[withoutInAppPurchaseIndex - 1]
              const isPriceEqualWithBefore = isEqual(
                time.price,
                lastDayLastTime.price,
              )
              if (!isPriceEqualWithBefore) return
              const nextTime = day[withoutInAppPurchaseIndex + 1]
              const isPriceEqualWithNext = isEqual(time.price, nextTime.price)
              if (!isPriceEqualWithNext) return
              deleteIndexs.push(withoutInAppPurchaseIndex)
            }
          })

          if (deleteIndexs.length === 0) return

          console.log(
            `${chalk.red(region)} ${chalk.bgYellow(
              appId,
            )} dayIndex=${chalk.redBright(
              dayIndex,
            )} withoutInAppPurchaseIndexs=[${chalk.red(
              withoutInAppPurchaseIndexs.join(','),
            )}] deleteIndex=[${chalk.red(deleteIndexs.join(','))}]`,
          )

          if (deleteIndexs.length !== withoutInAppPurchaseIndexs.length) {
            console.log(
              chalk.bgYellow(
                `${region} ${appId} withoutInAppPurchaseIndexs !== deleteIndex`,
              ),
            )
          }

          if (deleteIndexs.length === day.length) {
            console.log(chalk.bgYellow(`${region} ${appId} will delete all`))
          }

          const filterData = day.filter((item, i) => !deleteIndexs.includes(i))

          history[dayIndex] = filterData.reduceRight((res, item, index) => {
            if (index === filterData.length - 1) {
              res = [item]
            } else {
              const isSame = isEqual(
                omit(item, ['timestamp']),
                omit(res[0], ['timestamp']),
              )
              if (isSame) return res
              res.unshift(item)
            }
            return res
          }, [])
        })
      }
    })
  })

  setStorageAppInfo(regions, regionStorageAppInfo)
}

fixInAppPurchaseError()
