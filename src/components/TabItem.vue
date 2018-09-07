<template>
  <div class="item B1" :style="{width: data.itemWidth + 'px', height: height + 'rpx'}">
    <div class="item-title F4" :style="{'color': data.itemColor, 'font-weight': data.itemWeight}">{{data.title}}</div>
    <div v-if="selected === true && hasLine === true">
      <div class="item-line" :style="{background: data.itemColor}"></div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    data: Object,
    selected: Boolean,
    hasLine: Boolean
  },

  data () {
    return {
      height: this.hasLine === true ? 80 : 80
    }
  },

  created () {
  },

  methods: {
  }
}
</script>

<style scoped>
.item {
  display: inline-block;
  width: 100%;
  height: 100%;
  background-color: white;
  text-align: center;
  position: relative;
}

.item-title {
  padding-top: 20rpx;
  /* font-weight: bold; */
}

.item-line {
  width: 100%;
  height: 5rpx;
  position: absolute;
  bottom: 0rpx;
}

</style>
