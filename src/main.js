// 入口文件

import Vue from 'vue'
// 导入路由的包
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)

// 导入 vuex 包
import Vuex from 'vuex'
Vue.use(Vuex)

// 导入及安装 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.url.options.root="https://v1.itooi.cn/";

import { Header, Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

// 导入 App 组件
import app from './App.vue'
import router from './router.js'

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

Vue.filter("countForm",function(value){
  if(parseInt(value) > 10000 ){
    value = value/10000
    return parseInt(value)+"万"
  }
  return value
})

var vm = new Vue({
  el: '#app',
  data:{},
  render: c => c(app),
  created(){
    this.$http.get("").then(res => {
      console.log(res)
    },(err) => {
      console.log(err)
    })
  },
  router,
  store
})

const store = new Vuex.Store({
  state: {
    highquality: [],
    hotsonglist: [],
    hotMVlist: [],
    artistlist: []
  },
  mutations: {

  }
})