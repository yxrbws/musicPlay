<template>
  <div class="app-container">
    <!-- 顶部 Header 区域 -->
    <div class="header">
      <span class="left" @click=goHome>云云云音乐</span>
      <div class="input"><input type="text" @click=getFouce><span class="mui-icon mui-icon-search"></span></div>
      <span class="mui-icon mui-icon-person right" @click=goLogin></span>
    </div>

    <!-- 滑动横幅 -->
    <!-- <div class="mui-content">
			<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" data-wid="tab-top-subpage-1.html" @click="goTo('fashion')">
							时下流行
						</a>
						<a class="mui-control-item" data-wid="tab-top-subpage-2.html" @click="goTo('HotSinger')">
							热门歌单
						</a>
						<a class="mui-control-item" data-wid="tab-top-subpage-3.html" @click="goTo('HotSongList')">
							热门MV
						</a>
						<a class="mui-control-item" data-wid="tab-top-subpage-4.html" @click="goTo('RankingList')">
							歌手排行榜
						</a>
					</div>
				</div>
			</div>
		</div> -->

    <!-- 中间的 路由 router-view 区域 -->
    <transition mode='out-in'>
      <keep-alive include="fashion,MVlist,HotSongList,RankingList,gedaninfo,MVinfo">
        <router-view></router-view>
      </keep-alive>
    </transition>

    <!-- 底部 Tabbar 区域 -->
    <div class="tabbar">
      <aplayer v-if="$store.state.flag" :listFolded="true" :list="$store.state.musiclist" listMaxHeight="100px" autoplay :music="{
          title: $store.state.name,
          author: $store.state.author,
          url: $store.state.url,
          pic: $store.state.pic,
          lrc: $store.state.lrc
        }">
      </aplayer>

      <!-- <aplayer v-if="$store.state.flag" autoplay :music="$store.state.musiclist" listMaxHeight='100' listFolded='true'>
      </aplayer> -->
    </div>
    
  </div>
</template>

<script>
// 导入 vue-aplayer(音乐播放) 组件
import Aplayer from 'vue-aplayer'
import mui from './lib/mui/js/mui.min.js'

export default {
  components:{
    Aplayer
  },
  methods: {
    // goTo(path){
    //   this.$router.push(path)
    // }

    getFouce(){
      this.$router.push({ name: 'sreach'})
    },
    goHome(){
      this.$router.push({ name: 'fashion'})
    },
    goLogin(){
      this.$router.push({ name: 'login'})
    }
  }
}

</script>

<style lang="scss" scoped>
  *{
    touch-action: pan-y;
  }
  .app-container{
    padding-top: 40px;
    padding-bottom: 66px;
    overflow-x: hidden;
    .header {
      position: fixed;
      z-index: 10;
      top: 0;
      width: 100%;
      height: 40px;
      background-color: #CE3D3E;
      .left{
        float: left;
        font-size: 18px;
        line-height: 40px;
        margin-left: 15px;
        color: white;
      }
      .input{
        width: 50%;
        margin: 5px 20px 5px;
        height: 30px;
        float: left;
        background-color: rgba(90, 89, 89, 0.3);
        // border: 1px solid black;
        border-radius: 25px;
        .mui-icon-search{
          color: #aaa;
        }
        input{
          margin:2px 2px 2px 15px; 
          width: 75%;
          height: 20px;
          background-color: rgba(90, 89, 89, 0);
          border: none;
        }
      }
      .right{
        float: right;
        line-height: 40px;
        margin-right: 15px;
        color: white;
      }
    }
    .tabbar{
      opacity: 0.7;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  }
  .v-enter{
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
  }

  .v-enter-active,
  .v-leave-active{
    transition: all 0.5s ease;
  }
</style>