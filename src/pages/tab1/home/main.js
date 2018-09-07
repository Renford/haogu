import Vue from 'vue'
import App from './home'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarBackgroundColor': '#ffffff',
    'navigationBarTextStyle': 'black',
    'navigationBarTitleText': '主页',
    'backgroundColor': '#f8f8f8',
    'backgroundTextStyle': 'dark',
    'enablePullDownRefresh': true
  }
}
