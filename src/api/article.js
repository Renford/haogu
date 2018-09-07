
import config from './config'
import Article from '@/models/article'
import ArticleDetail from '@/models/articledetail'

import fly from './fly'

// 栏目
export function getCategories () {
  let url = `${config.BaseUrl}haogu/category`
  let params = {}

  return fly.post(url, params).then(res => {
    return res
  })
}

// 文章
export function getArticles (id, pos) {
  let url = `${config.BaseUrl}haogu/articles`
  let params = {
    id: id,
    pos: pos,
    size: config.pageSize
  }

  return fly.post(url, params).then(res => {
    let banners = res.banners.map(res => {
      let article = new Article(res.id, res.title, res.brief, res.classId, res.className, res.time, res.funcType, res.uiType, res.reads, res.images, res.outLinks)
      return article
    })

    let tops = res.tops.map(res => {
      let article = new Article(res.id, res.title, res.brief, res.classId, res.className, res.time, res.funcType, res.uiType, res.reads, res.images, res.outLinks)
      return article
    })

    let news = res.news.map(res => {
      let article = new Article(res.id, res.title, res.brief, res.classId, res.className, res.time, res.funcType, res.uiType, res.reads, res.images, res.outLinks)
      return article
    })

    res.banners = banners
    res.tops = tops
    res.news = news

    return res
  }).catch(err => {
    return err
  })
}

// 文章详情
export function getArticlesById (id) {
  let url = `${config.BaseUrl}haogu/articledetail`
  let params = {
    id: id
  }

  return fly.post(url, params).then(res => {
    res.news = new ArticleDetail(res.id, res.title, '文章详情', res.time, res.brief, res.body, res.topcontent, res.bottomcontent)
    return res
  }).catch(err => {
    return err
  })
}
export default {
  getCategories,
  getArticles,
  getArticlesById
}
