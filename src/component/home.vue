<template>
    <div>
        <!-- 滑动横幅 -->
        <div class="mui-content">
            <div id="slider" class="mui-slider">
                <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                    <div class="mui-scroll">
                        <a class="mui-control-item mui-active" data-wid="tab-top-subpage-1.html" @click="goTo('/home/fashion')">
                            时下流行
                        </a>
                        <a class="mui-control-item" data-wid="tab-top-subpage-2.html" @click="goTo('/home/HotSongList')">
                            热门歌单
                        </a>
                        <a class="mui-control-item" data-wid="tab-top-subpage-3.html" @click="goTo('/home/MVlist')">
                            热门MV
                        </a>
                        <a class="mui-control-item" data-wid="tab-top-subpage-4.html" @click="goTo('/home/RankingList')">
                            歌手排行榜
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <transition mode='out-in'>
            <router-view></router-view>
        </transition> 
    </div>




</template>

<script>
import mui from '../lib/mui/js/mui.min.js'

export default {
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods: {
        goTo(path){
            this.$router.push(path)
        }
    }
}
</script>

<style lang="scss" scoped>
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
