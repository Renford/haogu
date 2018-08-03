<template>
    <div class="item" :style="{width: data.itemWidth + 'rpx'}" @click="onClickEvent(data)">
      <p class="item-title" :style="{color: itemColor}">{{data.title}}</p>
      <div class="item-line" :style="{background: itemColor}"></div>
    </div>
</template>

<script>

import tabVue from './tab.vue'

export default {
  props: {
    data: Object
  },

  data () {
    return {
      itemWidth: 0,
      itemColor: tabVue.data().selectIndex === this.data.index ? 'red' : 'black'
    }
  },

  created () {
    console.log('=====tab data', tabVue.data())
  },

  methods: {
    onClickEvent: function (itemData) {
      tabVue.selectIndex = itemData.index
      console.log('=====tab data', tabVue.data().selectIndex, itemData.index)
    }
  }
}
</script>

<style>
.item {
  display: inline-block;
  width: 100%;
  height: 100%;
  background-color: yellow;
  text-align: center;
  border: 1px solid red;
}

.item-title {
  margin-top: 15rpx;
  font-size: 30rpx;
}

.item-line {
  width: 40rpx;
  height: 6rpx;
  margin: 0 auto;
  margin-top: 10rpx; 
  background-color: red;
}

</style>
