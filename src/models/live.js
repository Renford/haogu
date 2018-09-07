
import Stock from './stock'
import util from '@/common/utils/Utils'

class Live {
  static init (info) {
    let live = new Live(info.id, info.time, info.content, info.plates, info.stocks, info.images)
    return live
  }

  constructor (id, time, content, plates, stocks, images) {
    this.id = id
    this.time = util.formateTimestamp(time, 'HH:mm')
    this.content = content
    this.images = images

    if (util.formateTimestamp(time, 'yyyy-MM-dd') !== util.formateDate(new Date(), 'yyyy-MM-dd')) {
      this.time = util.formateTimestamp(time, 'MM/dd HH:mm')
    }

    let plateArray = []
    plates.forEach(item => {
      let plate = Stock.init(item)
      plateArray.push(plate)
    })
    this.plates = plateArray

    let stockArray = []
    for (let i = 0; i < stocks.length; i++) {
      if (i >= 2) {
        break
      }
      let stock = Stock.init(stocks[i])
      stockArray.push(stock)
    }
    this.stocks = stockArray
  }
}

export default Live
