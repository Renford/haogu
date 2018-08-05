<template>
    <div class="article-item">
        <div class="article-item-left">
            <p class="article-item-title">{{article.title}}</p>
            <p class="article-item-time">{{article.aaaa}}</p>  
        </div>
        <!-- <img class="article-item-image" src="article.img" alt=""> -->
    </div>    
</template>

<script>

// import Article from '@/models/article'

export default {

  props: ['article'],
  // {
  //   article: Article
  // },

  watch: {
    article: function (val) {
      console.log('======watch article:', val)
    }
  },

  created () {
    console.log('cell create======', this.article)
  },

  mounted () {
    console.log('cell mounted======', this.article)
  }
}
</script>

<style>
.article-item {
    width: 100%;
    height: 200rpx;
    display: flex;
    flex-direction: row;
    background-color: aqua;
    position: relative;
    align-items: center;
    justify-content: space-between;
    margin: 1px;
}

.article-item-left {
    height: 100%;
    width: 600rpx;
    background-color: red;
    position: relative;
}

.article-item-image {
    width: 100rpx;
    height: 80rpx;
    margin-right: 10rpx;
}

.article-item-title {
    top: 10rpx;
    overflow: hidden;
    white-space: normal;
    height: 100rpx;
    background-color: aquamarine;
}

.article-item-time {
    position: absolute;
    bottom: 10rpx;
}

</style>
