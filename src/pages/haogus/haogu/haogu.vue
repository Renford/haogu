<template>
  <div class="container" @click="clickHandle">
    <div>
      <tab v-bind:tabs="titles"></tab>
    </div>
  </div>
</template>

<script>

import tab from '@/components/tab'

export default {
  data: {
    msg: 'Hello',
    titles: ['推荐', '涨停', '次新', '二春', '二春1', '二春2']
  },

  components: {
    tab
  },

  methods: {
    clickHandle () {
      this.msg = '======Clicked!!!!!!'
    }
  }
}
</script>

<style scoped>
.message {
  color: red;
  padding: 10px;
  text-align: center;
}
</style>