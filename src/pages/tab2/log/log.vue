<template>
  <div class="body B2">
    <div v-for="(live, index) in lives" :key="index">
      <live-cell :live="live" :isTop="false" :from="'/pages/subject/main'"></live-cell>
    </div>

    <img class="icon-search" src="/static/button_search_default@2x.png" alt="" @click.stop="onPushSearch">

  </div>
</template>

<script>

import SubjectSection from '@/components/SubjectSection'
import SubjectCell from '@/components/SubjectCell'
import LiveCell from '@/components/LiveCell'

import api from '@/api/api'
import config from '@/api/config'

let updateTimer = ''

export default {
  data () {
    return {
      liveId: 16,
      lives: [],
      dates: []
    }
  },

  components: {
    SubjectSection,
    SubjectCell,
    LiveCell
  },

  methods: {
    onPushSearch () {
      let url = `/pages/general/search/main`
      this.$router.push({
        path: url
      })
    }
  },

  onPullDownRefresh () {
    let that = this
    getLives(that, '', false)
  },

  mounted () {
    let that = this
    getLives(that, '', false)
  },

  onShow () {
    let that = this
    updateTimer = setInterval(function () {
      getLives(that, '', false)
    }, config.updateInterval)
  },

  onHide () {
    clearInterval(updateTimer)
  }
}

function getLives (that, updateTime, isWssData) {
  api.live.getLives(that.liveId, false, '', updateTime, isWssData).then(res => {
    console.log('r====request lives update', res)
    that.dates = res.dates
    that.lives = res.lives
  }).catch(err => {
    console.log('r====request lives erro', err.message)
  })
}
</script>

<style scoped>
.body {
  padding-top: 0;
}

.icon-search {
  position: fixed;
  width: 100rpx;
  height: 100rpx;
  right: 30rpx;
  bottom: 30rpx;
  z-index: 100;
  border-radius: 12rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>