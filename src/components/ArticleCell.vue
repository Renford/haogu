<template>
    <div class="article-item B1">
        <div class="article-item-left">
            <div class="article-item-title F3 C1">{{article.title}}</div>
            <div class="article-item-time flex-row">
                <div v-if="recommend === true">
                    <div class="article-item-type F8 C3">{{article.className + ''}}</div>
                </div>
                <div class="F8 C3">{{article.time}}</div>  
            </div>
        </div>
        <div v-if="article.uiType === 1 && article.images.length > 0">
            <img class="article-item-image" :src="article.images[0]" alt="">
        </div>
    </div>    
</template>

<script>

export default {

  props: {
    article: Object,
    recommend: {
      type: Boolean,
      default: false
    }
  },

  created () {
  }

}
</script>

<style>
.article-item {
    height: 200rpx;
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: center;
    justify-content: space-between;
    /* margin: 10rpx; */
    padding: 10rpx 0 10rpx 20rpx;
}

.article-item-left {
    height: 100%;
    position: relative;
    margin-right: 20rpx;
}

.article-item-image {
    width: 180rpx;
    height: 0 auto;
    max-height: 140rpx;
    margin-right: 20rpx;
}

.article-item-title {
    margin-top: 30rpx;
    overflow: hidden;
    white-space: normal;
    height: 100rpx;
    line-height: 50rpx;
}

.article-item-time {
    position: absolute;
    bottom: 20rpx;
    white-space: nowrap;
}

.article-item-type {
    margin-right: 20rpx;
}
</style>
