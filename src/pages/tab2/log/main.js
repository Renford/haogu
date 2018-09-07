import Vue from 'vue'
import App from './log'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarBackgroundColor': '#ffffff',
    'navigationBarTextStyle': 'black',
    'navigationBarTitleText': '日志',
    'backgroundColor': '#f8f8f8',
    'backgroundTextStyle': 'dark',
    'enablePullDownRefresh': true
  }
}
