import VueRouter from 'vue-router'

import fashion from './component/fashion.vue'
import HotSinger from './component/HotSinger.vue'
import HotSongList from './component/HotSongList.vue'
import RankingList from './component/RankingList.vue'

var router = new VueRouter({
  routes: [
    { path: '/', redirect:'/fashion'},
    { path: '/fashion', component:fashion},
    { path: '/HotSinger', component:HotSinger},
    { path: '/HotSongList', component:HotSongList},
    { path: '/RankingList', component:RankingList}
  ]
})


export default router