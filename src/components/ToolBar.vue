<template>
  <div class="tool-container flex-row">
    <div v-for="(item, index) in tools" :key="item.image" class="item-box flex-row" @click="onItemEvent(index)">
      <img :src="item.image" alt="">
      <div class="F3 C1">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tools: Object,
    onToolBarItemEvent: Function
  },

  data () {
    return {
    }
  },

  methods: {
    onItemEvent (index) {
      this.onToolBarItemEvent(index)
    }
  },

  created () {
    console.log('=======stare', this.tools)
  }
}
</script>

<style scoped>

.tool-container {
  width: 100%;
  height: 100%;
}

.item-box {
  height: 100%;
  width: 50%;
  align-items: center;
  justify-content: center;
}

.item-box img {
  width: 50rpx;
  height: 50rpx;
  margin-right: 20rpx;
}

</style>
