
import util from '@/common/utils/Utils'

class Stock {
  static init (item) {
    let price = util.formateNumber((item.price / 10000).toFixed(2), 2)
    let change = util.formateNumber((item.change / 10000).toFixed(2), 2)
    let stock = new Stock(item.id, item.name, item.code, price, change, item.zdf, item.exchange, item.category, item.tradeSession)
    return stock
  }

  constructor (id, name, code, price, change, zdf, exchange, category, tradeSession) {
    this.id = id
    this.name = name
    this.code = code
    this.price = price
    this.change = change
    this.zdf = zdf
    this.exchange = exchange
    this.category = category
    this.tradeSession = tradeSession

    this.fontColor = util.changeColor(this.zdf)
    this.bgColor = util.changeBgColor(this.zdf)

    if (zdf > 0) {
      this.zdfString = '+' + (zdf / 100).toFixed(2) + '%'
    } else {
      this.zdfString = (zdf / 100).toFixed(2) + '%'
    }
  }
}

export default Stock
