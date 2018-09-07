import Vue from 'vue'
import App from './search'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarBackgroundColor': '#ffffff',
    'navigationBarTextStyle': 'black',
    'navigationBarTitleText': '搜索',
    'backgroundColor': '#f8f8f8',
    'backgroundTextStyle': 'light'
  }

}
