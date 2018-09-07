
import util from '@/common/utils/Utils'

class Article {
  constructor (id, title, brief, classId, className, time, funcType, uiType, reads, images, outLinks) {
    this.id = id
    this.title = title
    this.brief = brief
    this.classId = classId
    this.className = className
    this.time = time
    this.funcType = funcType
    this.uiType = uiType
    this.reads = reads
    this.images = images
    this.outLinks = outLinks

    let yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    let beforeYesterday = new Date()
    beforeYesterday.setDate(beforeYesterday.getDate() - 2)

    if (util.formateTimestamp(time, 'yyyy-MM-dd') === util.formateDate(new Date(), 'yyyy-MM-dd')) {
      this.time = util.formateTimestamp(time, 'HH:mm')
    } else if (util.formateTimestamp(time, 'yyyy-MM-dd') === util.formateDate(yesterday, 'yyyy-MM-dd')) {
    //   this.time = util.formateTimestamp(time, '昨天 HH:mm')
    // } else if (util.formateTimestamp(time, 'yyyy-MM-dd') === util.formateDate(beforeYesterday, 'yyyy-MM-dd')) {
    //   this.time = util.formateTimestamp(time, '前天 HH:mm')
    } else if (util.formateTimestamp(time, 'yyyy') === util.formateDate(new Date(), 'yyyy')) {
      this.time = util.formateTimestamp(time, 'MM/dd HH:mm')
    } else {
      this.time = util.formateTimestamp(time, 'yyyy/MM/dd HH:mm')
    }
  }
}

export default Article
