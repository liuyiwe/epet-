import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
import app from './App.vue'
//import './mock/mock'
import './mock/mockServer'
import router from './router'
import './common/reset.less'
// import 'normalize.css'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(app),
  router
})
