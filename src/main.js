import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/haogus/haogu/main', 'pages/options/optional/main'],
    tabBar: {
      color: '#aaaaaa',
      selectedColor: '#ff0000',
      list: [
        {
          pagePath: 'pages/haogus/haogu/main',
          text: '好股',
          color: 'red'
        },
        {
          pagePath: 'pages/options/optional/main',
          text: '好股'
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
