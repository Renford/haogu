
import util from '@/common/utils/Utils'

class ArticleDetail {
  constructor (id, title, source, time, brief, body, topcontent, bottomcontent) {
    this.id = id
    this.title = title
    this.source = source
    this.brief = brief
    this.body = body
    this.topcontent = topcontent
    this.bottomcontent = bottomcontent
    this.time = util.formateTimestamp(time, 'yyyy-MM-dd HH:mm')
  }
}

export default ArticleDetail
