<template>
  <div class="item B1">
    
    <!-- left -->
    <div class="item-left-placeholder" v-if="isTop === false">
      <div class="item-line L2"></div>
    </div>

    <!-- right -->
    <div class="item-right">
      <div class="flex-row">
        <div class="item-time F5 C1">{{live.time}}</div>
        <div class="item-name F4 C1" v-if="live.plates.length > 0">{{live.plates[0].name + ' ' + live.plates[0].zdfString}}</div>
      </div>

      <div v-if="isTop">
        <div class="item-content">
          <wxParse :content="live.content" :noData="''" @preview="onPreviewEvent" @navigate="onNavigateEvent"></wxParse>
        </div>
      </div>
      <div v-else>
        <wxParse :content="live.content" :noData="''" @preview="onPreviewEvent" @navigate="onNavigateEvent"></wxParse>
      </div>
      
      <div v-if="live.images.length > 0 && isTop !== true">
        <img class="item-image" :src="live.images[0]" alt="" @click="onPreviewImageEvent(live.images[0])">
      </div>

      <div class="flex-row" v-if="live.stocks.length > 0">
        <div v-for="stock in live.stocks" :key="stock.id">
          <div class="item-stock F6" :style="{color: stock.fontColor, background: stock.bgColor}" @click.stop="onShowStockDetail(stock)">{{stock.name + ' ' + stock.zdfString}}</div>
        </div>
      </div>
    </div>

    <div class="item-left-container" v-if="isTop === false">
      <div class="item-dot L2"></div>
    </div>

  </div>
</template>

<script>

import wxParse from 'mpvue-wxparse'

export default {
  props: {
    live: {
      type: Object
    },
    isTop: {
      type: Boolean
    },
    from: {
      type: String
    }
  },

  watch: {
    live (val, old) {
      this.title = getTitle(val)
    }
  },

  data () {
    return {
      title: getTitle(this.live),
      contentHeight: 100
    }
  },

  components: {
    wxParse
  },

  methods: {
    onPreviewImageEvent (imageUrl) {
      wx.previewImage({
        urls: [imageUrl]
      })
    },

    onPreviewEvent (src, e) {
      console.log('====onPreviewEvent', src)
    },

    onNavigateEvent (href, e) {
      console.log('====onNavigateEvent', href)
    },

    onShowStockDetail (stock) {
    }
  }
}

function getTitle (live) {
  let result = live.time
  if (live.plates.length > 0) {
    result = result + '  ' + live.plates[0].name + '  ' + live.plates[0].zdfString
  }
  return result
}
</script>

<style scoped>

@import url("~mpvue-wxparse/src/wxParse.css");

.item {
  position: relative;
  display: flex;
  flex-direction: row;
}

.item-right {
  width: 700rpx;
  padding: 20rpx 20rpx 30rpx 20rpx;
}

.item-time {
  height: 40rpx;
  line-height: 40rpx;
}

.item-name {
  height: 40rpx;
  line-height: 40rpx;
  margin-left: 40rpx;
}

.item-content {
  margin: 10rpx 0 10rpx 0;
  overflow: hidden;
  max-height: 100rpx;
}

.item-image {
  width: 336rpx;
  max-height: 190rpx;
  height: 0 auto;
  margin: 20rpx 0 20rpx 0;
}

.item-stock {
  width: 260rpx;
  height: 50rpx;
  line-height: 50rpx;
  text-align: center;
  margin: 10rpx 10rpx 0 0;
  border-radius: 5rpx;
}

.item-left-placeholder {
  width: 40rpx;
  display: flex;
  justify-content: center;
}

.item-left-container {
  width: 40rpx;
  height: 100%;
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
}

.item-line {
  width: 1rpx;
  height: 100%;
  position: relative;
}

.item-dot {
  width: 20rpx;
  height: 20rpx;
  margin-top: 30rpx;
  border-radius: 10rpx;
}

</style>
