
<template>
  <div>
    <div class="line-1 B2"></div>
    <div class="tab" :style="{height: height + 'rpx'}" >
      <div v-for="(tab, index) in tabs" :key="tab.id" @click="onItemTapEvent(index)">
        <tab-item :data="tab" :selected="selectIndex === index" :hasLine="hasLine"></tab-item>
      </div>
    </div>
    <div class="line-3 B2"></div>
  </div>
</template>

<script>

import TabItem from '@/components/TabItem'
import AppVue from '../App.vue'

export default {
  props: {
    tabs: {
      type: Array,
      default: []
    },

    hasLine: Boolean,

    onTabItemTapEvent: {
      type: Function,
      default: null
    }
  },

  data () {
    return {
      selectIndex: 0,
      height: this.hasLine === true ? 80 : 80,

      fontNormalWeight: 400,
      fontBlodWeight: 700
    }
  },

  components: {
    TabItem
  },

  methods: {
    onItemTapEvent: function (index) {
      this.tabs.forEach(item => {
        item.itemColor = '#000000'
        item.itemWeight = this.fontNormalWeight
      })
      this.selectIndex = index
      this.tabs[index].itemColor = '#eb333b'
      this.tabs[index].itemWeight = this.fontBlodWeight

      if (this.onTabItemTapEvent) {
        this.onTabItemTapEvent(index)
      }
    }
  },

  created () {
  },

  mounted () {
  },

  // 添加tab主题属性
  handleData (arr, index) {
    let itemWidth = this.getItemWidth(arr)

    let array = []
    for (let i = 0; i < arr.length; i++) {
      let itemColor = i === index ? '#eb333b' : '#000000'
      let itemWeight = i === index ? 700 : 400
      let data = Object.assign({
        itemWidth: itemWidth,
        itemColor: itemColor,
        itemWeight: itemWeight
      }, arr[i])
      array.push(data)
    }

    return array
  },

  // 计算tab宽度
  getItemWidth (arr) {
    let count = arr.length
    if (count > 5) {
      count = 5.5
    }

    return AppVue.data.screenWidth / count
  }
}
</script>

<style scoped>
.tab {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80rpx;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}

.line-1 {
  height: 1px;
}

.line-3 {
  height: 3px;
}

</style>




