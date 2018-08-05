
<template>
    <div class="tab">
        <div v-for="(tab, index) in tabs" :key="tab.id" @click="onItemTapEvent(index)">
            <tabitem :data="tab"></tabitem>
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
      selectIndex: 0
    }
  },

  components: {
    tabitem
  },

  methods: {
    onItemTapEvent: function (index) {
      this.tabs.forEach(item => {
        item.itemColor = 'black'
      })
      this.selectIndex = index
      this.tabs[index].itemColor = 'red'
    }
  },

  created () {
    console.log('tab create======', this.tabs)
  },

  mounted () {
  },

  // 添加tab主题属性
  handleData (arr) {
    let itemWidth = this.getItemWidth()
    let array = arr.map(item => {
      let data = Object.assign({
        itemWidth: itemWidth,
        itemColor: 'red'
      }, item)
      return data
    })

    return array
  },

  // 计算tab宽度
  getItemWidth () {
    let count = haoguVue.data().titles.length
    if (count > 5) {
      count = 5
    }

    return AppVue.data.screenWidth * AppVue.data.pixelRatio / count
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




