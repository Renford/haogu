import Article from '@/models/article'

let Fly = require('flyio/dist/npm/wx')
let fly = new Fly()

class Api {
  getArticles () {
    console.log('======fly', fly)

    let result = []
    for (let i = 0; i < 5; i++) {
      let image = 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3569856855,2009311331&fm=58&bpow=480&bpoh=506'
      let article = new Article(i, '标题', '摘要', image, '14:15')
      result.push(article)
    }
    return result
  }
}

export default Api
