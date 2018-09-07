import Vue from 'vue'
import App from './web'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarBackgroundColor': '#eb333b',
    'navigationBarTextStyle': 'white',
    'navigationBarTitleText': '',
    'backgroundColor': '#f8f8f8',
    'backgroundTextStyle': 'light'
  }
}
