<template>
  <div class="item flex-col B1">
    <div class="item-title F4 C1">{{subject.plate.name}}</div>
    <div class="F6 C3" style="margin: 5rpx 0 5rpx 0;">{{subject.stock.name}}</div>
    <div class="F8 C7" :style="{color: subject.stock.fontColor}">{{subject.stock.zdfString}}</div>
    <div class="item-line L1"></div>
  </div>
</template>

<script>

export default {
  props: {
    subject: Object
  },

  created () {
  }
}
</script>

<style scoped>
.item {
  width: 250rpx;
  height: 180rpx;
  text-align: center;
  /* padding: 10rpx 0 0 0; */
  position: relative;
}

.item-title {
  margin: 30rpx 0 10rpx 0;
  /* margin-bottom: 10rpx; */
}

.item-line {
  position: absolute;
  right: 0;
  width: 1rpx;
  top: 30rpx;
  height: 120rpx;
}
</style>
