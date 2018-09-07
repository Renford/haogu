import Vue from 'vue'
import App from './App'

import MpvueRouterPatch from 'mpvue-router-patch'
Vue.use(MpvueRouterPatch)

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/tab1/home/main',
      'pages/tab2/log/main',
      'pages/general/web/main',
      'pages/general/search/main'
    ],
    tabBar: {
      color: '#a0a0a0',
      selectedColor: '#eb333b',
      list: [
        {
          pagePath: 'pages/tab1/home/main',
          text: '主页',
          iconPath: 'static/button_tab1_nor.png',
          selectedIconPath: 'static/button_tab1_sel.png'
        },
        {
          pagePath: 'pages/tab2/log/main',
          text: '日志',
          iconPath: 'static/button_tab2_nor.png',
          selectedIconPath: 'static/button_tab2_sel.png'
        }
      ]
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }
}
