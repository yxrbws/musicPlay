import VueRouter from 'vue-router'

import home from './component/home.vue'
import fashion from './component/fashion.vue'
import HotSinger from './component/HotSinger.vue'
import HotSongList from './component/HotSongList.vue'
import RankingList from './component/RankingList.vue'
import gedaninfo from './component/gedaninfo.vue'
import MVinfo from './component/MVinfo.vue'

var router = new VueRouter({
  routes: [
    { path: '/', redirect:'/home'},
    { path: '/home', component: home,children:[
      { path: '/home/fashion', component:fashion},
      { path: '/home/HotSinger', component:HotSinger},
      { path: '/home/HotSongList', component:HotSongList},
      { path: '/home/RankingList', component:RankingList}
    ]},
    { path: '/gedaninfo/:id', component: gedaninfo,name:'gedaninfo'},
    { path: '/MVinfo/:id', component: MVinfo,name:'MVinfo'}
  ]
})


export default router