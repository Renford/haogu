<script>
/* 这部分相当于原生小程序的 app.js */
export default {

  data: {
    screenWidth: 0,
    screenHeight: 0,
    pixelRatio: 0,
    userId: ''
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

@import url("./common/css/font.css");
@import url("./common/css/color.css");
@import url("./common/css/base.css");

page {
  background-color: #f8f8f8;
}
</style>