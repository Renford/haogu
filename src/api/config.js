
export let BaseUrl = 'https://uatapiminapp.emoney.cn/minappwebapi/api/'

export let posZero = 1
export let pageSize = 30
export let updateInterval = 5 * 1000

export let ErrorInfo = {
  kGetDataErrorInfo: new Error('数据获取失败')
}

export default {
  BaseUrl,
  posZero,
  pageSize,
  updateInterval,
  ErrorInfo
}
