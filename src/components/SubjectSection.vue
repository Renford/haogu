<template>
  <div class="item B2">
    <!-- <div class="item-image flex-row">
      <img :src="section.image" alt="" >
    </div> -->
    <div class="item-title F6 C3">{{section.title}}</div>
  </div>
</template>

<script>
export default {
  props: {
    section: Object
  },

  created () {
  }
}
</script>

<style scoped>

.item {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50rpx;
}

.item-image {
  width: 90rpx;
  height: 90rpx;
  align-items: center;
  justify-content: center;
}

.item-image img { 
  width: 40%;
  height: 40%;
}

.item-title {
  line-height: 50rpx;
  margin-left: 20rpx;
}

</style>
