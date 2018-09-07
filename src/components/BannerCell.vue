<template>
  <div class="banner-item" >
    <img class="image" :src="article.images[0]" alt="">
  </div>
</template>

<script>

export default {
  props: {
    article: {
      type: Object
    }
  },

  created () {
  }
}
</script>

<style scoped>
.banner-item {
  height: 200rpx;
  margin: 10rpx;
  overflow: hidden;
}

.image {
  width: 100%;
  height: 100%;
  /* height: 0 auto; */
  border-radius: 10rpx;
}

</style>
