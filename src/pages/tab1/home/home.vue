<template>
  <div class="tab-padding B1">
    
    <!-- tab -->
    <div class="tab-top">
      <tab-view v-bind:tabs="tabs" :hasLine="true" :onTabItemTapEvent="onTabItemTapEvent"></tab-view>
    </div>

    <!-- banner -->
    <div v-if="banners.length>0" @click="onBannerTapEvent(articles[0])">
      <banner-cell :article="articles[0]"></banner-cell>
    </div>

    <!-- news -->
    <li v-for="(art, index) in articles" :key="art.id" @click="onItemTapEvent(art, index)">
      <div v-if="art.funcType === 1">
        <banner-cell :article="art"></banner-cell>
      </div>
      <div v-else>
        <div v-if="art.uiType === 0 || art.uiType === 1">
          <article-cell :article="art" :recommend="currIndex === 0"></article-cell>
        </div>
        
        <div v-else-if="art.uiType === 2 || art.uiType === 3">
          <banner-cell :article="art"></banner-cell>
        </div>

        <div class="item-line-padding L0"></div>
      </div>
    </li>

    <!-- footer -->
    <div v-if="end[currIndex] === true">
      <div class="footer F6 C4">我们是有底线的</div>
    </div>
  </div>
</template>

<script>

import TabView from '@/components/TabView'
import BannerCell from '@/components/BannerCell'
import ArticleCell from '@/components/ArticleCell'

import api from '@/api/api'
import config from '@/api/config'

export default {
  data () {
    return {
      tabs: [],
      banners: [],
      articles: [],
      currIndex: 0,
      pos: [config.posZero],
      end: [false]
    }
  },

  components: {
    TabView,
    BannerCell,
    ArticleCell
  },

  methods: {
    onTabItemTapEvent (index) {
      this.currIndex = index
      this.pos[this.currIndex] = config.posZero

      var that = this
      getArticles(index, config.posZero, that)
    },

    onBannerTapEvent (article) {
      let tempUrl = 'https://uatapiminapp.emoney.cn/NewsDetails/' + article.id
      let url = `../web/main?title=${article.title}&url=${encodeURI(tempUrl)}`
      this.$router.push({path: url})
    },

    onItemTapEvent (article, index) {
      let url = `/pages/haogus/detail/main?id=${article.id}&title=${article.title}`
      this.$router.push({path: url})
    }
  },

  mounted () {
    getCategories(this)
  },

  onPullDownRefresh () {
    this.pos[this.currIndex] = config.posZero
    getArticles(this.currIndex, this.pos[this.currIndex], this)
  },

  onReachBottom () {
    if (this.end[this.currIndex] === false) {
      getArticles(this.currIndex, this.pos[this.currIndex], this)
    }
  }
}

function getCategories (that) {
  api.article.getCategories().then(res => {
    that.tabs = TabView.handleData(res, that.currIndex)
    getArticles(that.currIndex, that.pos[that.currIndex], that)
  }).catch(err => {
    console.log('request haogu error====', err)
  })
}

function getArticles (index, pos, that) {
  let id = that.tabs[that.currIndex].id
  api.article.getArticles(id, pos).then(res => {
    wx.stopPullDownRefresh()
    if (res.classId === that.tabs[that.currIndex].id) {
      if (that.pos[that.currIndex] === config.posZero && that.currIndex !== 0) {
        that.banners = res.banners
        that.articles = res.tops.concat(res.news)
      } else {
        that.articles = that.articles.concat(res.news)
      }

      that.pos[that.currIndex] = res.pos
      that.end[that.currIndex] = res.end
    }
  }).catch(err => {
    wx.stopPullDownRefresh()
    console.log('request article error====', err)
  })
}
</script>

<style scoped>

.footer {
  height: 80rpx;
  line-height: 80rpx;
  text-align: center;
}
</style>