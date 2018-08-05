<script>
/* 这部分相当于原生小程序的 app.js */
export default {

  data: {
    screenWidth: 0,
    screenHeight: 0,
    pixelRatio: 0
  },

  created () {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.screenWidth = res.windowWidth
        that.screenHeight = res.windowHeight
        that.pixelRatio = res.pixelRatio
      }
    })
  }
}
</script>

<style>
/* 这部分相当于原生小程序的 app.wxss */
.container {
  background-color: #cccccc;
}

.tab-top {
  height: 100rpx;
}
</style>