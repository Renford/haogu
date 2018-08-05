<template>
  <div class="container">
    <div class="tab-top">
      <tab v-bind:tabs="titles"></tab>
    </div>
    <div v-for="(art, index) in articles" :key="art.id" @click="onItemTapEvent(art, index)">
      <cell v-bind="art"></cell>
    </div>
  </div>
</template>

<script>

import tab from '@/components/tab'
import cell from '@/components/cell-article'
import Api from '@/api/api'

let api = new Api()

export default {
  data () {
    return {
      titles: [
        {
          id: 1,
          title: '推荐'
        },
        {
          id: 2,
          title: '涨停'
        },
        {
          id: 3,
          title: '次新'
        },
        {
          id: 4,
          title: '二春'
        }],
      articles: [
        {
          id: 0,
          title: 'title',
          time: '12:12',
          img: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3569856855,2009311331&fm=58&bpow=480&bpoh=506',
          desc: 'desp'
        }
      ]
    }
  },

  components: {
    tab,
    cell
  },

  methods: {
    onItemTapEvent (article, index) {
      console.log('tap item', index, article)
    }
  },

  created () {
    console.log('haogu create======', this.data)
    this.titles = tab.handleData(this.titles)
    console.log('=====titles', this.titles)
    this.articles = api.getArticles()
    console.log('=====articles', this.articles)
    console.log('=====cel', cell, tab)
  },

  mounted () {
  }
}
</script>

<style scoped>
.tab {
  position: absolute;
  top: 0rpx;
}
</style>