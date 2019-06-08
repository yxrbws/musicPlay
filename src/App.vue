<template>
  <div class="app-container">
    <!-- 顶部 Header 区域 -->
    <div class="header">
      <span class="left">网易云音乐</span>
      <span class="mui-icon mui-icon-search right"></span>
    </div>

    <!-- 滑动横幅 -->
    <div class="mui-content">
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
		</div>

    <!-- 中间的 路由 router-view 区域 -->
    <transition mode='out-in'>
      <router-view></router-view>
    </transition>

    <!-- 底部 Tabbar 区域 -->
    <div class="tabbar">
      <!-- <aplayer autoplay :music="{
          title: 'Preparation',
          author: 'Hans Zimmer/Richard Harvey',
          url: '',
          pic: '',
          lrc: ''
        }">
      </aplayer> -->
    </div>
    
  </div>
</template>

<script>
// 导入 vue-aplayer(音乐播放) 组件
import Aplayer from 'vue-aplayer'
import mui from './lib/mui/js/mui.min.js'

export default {
  mounted(){
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  components:{
    Aplayer
  },
  methods: {
    goTo(path){
      this.$router.push(path)
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
      .right{
        float: right;
        line-height: 40px;
        margin-right: 15px;
        color: white;
      }
    }
    .tabbar{
      opacity: 0.5;
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