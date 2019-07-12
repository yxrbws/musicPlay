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

import { Header, Swipe, SwipeItem, Lazyload } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.use(Lazyload)

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
const store = new Vuex.Store({
  state: {
    login: null,
    name: null,
    author: null,
    url: null,
    pic: null,
    lrc: null,
    musiclist: [],
    flag: false
  },
  mutations: {
    getmusic(state,mes){
      console.log(mes)
      state.name = mes[0].songs[0].al.name
      state.author = mes[0].songs[0].ar[0].name
      state.pic = mes[0].songs[0].al.picUrl
      state.url = "https://v1.itooi.cn/netease/url?id="+mes[1]+"&quality=flac"
      state.flag = true
      title = mes[0].songs[0].al.name
      author = mes[0].songs[0].ar[0].name
      pic = mes[0].songs[0].al.picUrl
      url = "https://v1.itooi.cn/netease/url?id="+mes[1]+"&quality=flac"
      obj = {title,author,pic,url}
      state.musiclist.push(obj)
      console.log("state.musiclist",state.musiclist)
      }
  }
})

var vm = new Vue({
  el: '#app',
  data:{},
  render: c => c(app),
  created(){
    // console.log(store)
    this.$http.get("").then(res => {
      console.log(res)
    },(err) => {
      console.log(err)
    })
  },
  router,
  store
})

