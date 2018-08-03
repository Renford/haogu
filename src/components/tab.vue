
<template>
    <div class="tab">
        <div v-for="(tab, index) in tabs" :key="tab.id">
            <tabitem :data="{title: tab, itemWidth: itemWidth, index:index}"></tabitem>
        </div>
    </div>
</template>

<script>

import tabitem from '@/components/tab-item'
import AppVue from '../App.vue'
import haoguVue from '../pages/haogus/haogu/haogu.vue'

export default {
  props: {
    tabs: Array
  },

  data () {
    return {
      itemWidth: 0,
      selectIndex: 0
    }
  },

  components: {
    tabitem
  },

  created () {
    console.log('===========width', this.itemWidth)
  },

  mounted () {
    let count = haoguVue.data.titles.length
    if (count > 5) {
      count = 5
    }

    this.itemWidth = AppVue.data.screenWidth * AppVue.data.pixelRatio / count
    console.log('===========width', this.itemWidth)
  }
}
</script>

<style>
.tab {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 90rpx;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;

    background-color: red;
}
</style>




