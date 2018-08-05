<template>
    <div class="item" :style="{width: data.itemWidth + 'rpx'}">
      <p class="item-title" :style="{color: data.itemColor}">{{data.title}}</p>
      <div class="item-line" :style="{background: data.itemColor}"></div>
    </div>
</template>

<script>

export default {
  props: {
    data: Object
  },

  watch: {
    data: function (val) {
      console.log('======watch data:', val)
    }
  },

  data () {
    return {
    }
  },

  created () {
    console.log('tab item create======', this.data)
  },

  methods: {
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
