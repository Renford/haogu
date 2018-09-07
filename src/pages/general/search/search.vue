<template>
  <div>
    <!-- search bar -->
    <div class="top-search-bg B2">
      <div class="top-search-bar">
        <img src="/static/button_search@2x.png" alt="">
        <input class="F6 C1" type="search" placeholder="名称" autofocus="autofocus" @input="onSearchEvent($event)">
      </div>
    </div>

    <!-- cell -->
    <div v-for="(stock, index) in stocks" :key="stock.id" @click="onItemTapEvent(stock, index)">
      <div class="flex-col">
        <div class="item flex-row">
          <div class="item-type F10">{{stock.type}}</div>
          <div class="item-name F5 C1">{{stock.name}}</div>
          <div class="item-code F5 C4">{{stock.code}}</div>
          <img class="item-image" :src="stock.operateImage" alt="" @click="onAddOrDelEvent(stock)">
        </div>
        <div class="item-line L1"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      stocks: []
    }
  },

  methods: {
    onSearchEvent (event) {
    },

    onItemTapEvent (stock, index) {
    },

    onAddOrDelEvent (stock) {
    }
  }
}
</script>

<style scoped>

.top-search-bg {
  height: 130rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.top-search-bar {
  display: flex;
  flex-direction: row;
  position: relative;
  width: 690rpx;
  height: 70rpx;
  border-style: solid;
  border-color: rgb(228, 228, 228);
  border-width: 1px;
  border-radius: 12rpx;
  align-items: center;
  box-sizing: border-box;
  padding-left: 20rpx;
  padding-right: 20rpx;
  background-color: white;
}

.top-search-bar img {
  width: 40rpx;
  height: 40rpx;
}

.top-search-bar input {
  margin-left: 20rpx;
}

.item {
  width: 100%;
  height: 100rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.item-type {
  position: relative;
  width: 50rpx;
  margin-left: 20rpx;
  border-style: solid;
  border-radius: 6rpx;
  border-width: 1rpx;
  padding: 6rpx;
  text-align: center;
}

.item-name {
  position: relative;
  margin-left: 20rpx;
  width: 160rpx;
}

.item-code {
  position: relative;
  margin-left: 30rpx;
  width: 160rpx;
}

.item-image {
  position: absolute;
  width: 44rpx;
  height: 44rpx;
  right: 50rpx;
}

</style>
