import VueRouter from 'vue-router'

import home from './component/home.vue'
import fashion from './component/fashion.vue'
import MVinfo from './component/MVinfo.vue'
import HotSongList from './component/HotSongList.vue'
import RankingList from './component/RankingList.vue'
import gedaninfo from './component/gedaninfo.vue'
import MVlist from './component/MVlist.vue'
import sreach from './component/sreach.vue'
import login from './component/logInOut.vue'

var router = new VueRouter({
  routes: [
    { path: '/', redirect:'/home/fashion'},
    { path: '/home', component: home,children:[
      { path: '/home/fashion', component:fashion, name:'fashion'},
      { path: '/home/MVlist', component:MVlist, name: 'MVlist'},
      { path: '/home/HotSongList', component:HotSongList, name: 'HotSongList'},
      { path: '/home/RankingList', component:RankingList, name: 'RankingList'}
    ]},
    { path: '/gedaninfo/:id', component: gedaninfo,name:'gedaninfo'},
    { path: '/MVinfo/:id', component: MVinfo,name:'MVinfo'},
    { path: '/sreach',component:sreach, name:'sreach' },
    { path: '/login',component:login, name:'login' }
  ]
})


export default router