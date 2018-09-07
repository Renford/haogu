<template>
  <web-view :src="url">
  </web-view>
</template>

<script>

export default {
  data: function () {
    return {
      url: ''
    }
  },

  onLoad: function (option) {
    this.url = decodeURI(option.url)
    wx.setNavigationBarTitle({title: option.title})
  }
}
</script>

<style scoped>
</style>