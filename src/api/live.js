
import Live from '../models/live'

import config from './config'
import fly from './fly'

import util from '@/common/utils/Utils'

// 获取直播数据
export function getLives (liveId, isTop, date, updateTime, isWssData) {
  if (date === undefined || date.length === 0) {
    date = util.formateDate(new Date(), 'yyyyMMdd')
  }

  if (updateTime === undefined || updateTime.length === 0) {
    updateTime = util.formateDate(new Date(), 'yyyy-MM-dd HH:mm:ss')
  }

  let lastData = isWssData === true ? 1 : 0

  let url = `${config.BaseUrl}live`
  let params = {
    liveId: liveId,
    date: date,
    updateTime: updateTime,
    lastData: lastData,
    isTop: isTop
  }

  return fly.post(url, params).then(res => {
    res.tops = res.tops.map(item => {
      return Live.init(item)
    })

    res.lives = res.lives.map(item => {
      return Live.init(item)
    })

    res.pickerdates = util.dateArray2PickerValue(res.dates)

    return res
  })
}

export default {
  getLives
}
