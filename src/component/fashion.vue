<template>
<div class="fashion-container">
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in lunbotu" :key="item.id"><img :src="item.coverImgUrl" @click="goTogedan(item.id)"></mt-swipe-item>
    </mt-swipe>

    <div class="recommendSongList">
        <div class="recommend-warp">
            <span>推荐歌单</span>
            <span class="right">更多></span>
        </div>
        <div class="recommendList">
            <div class="box" v-for="list in songList" :key="list.id">
                <a @click="goTogedan(list.id)">
                    <img :src="list.coverImgUrl">
                    <p class="count"><span>{{ list.playCount | countForm }}</span></p>
                    <p class="description">{{ list.name }}</p>
                </a>
                
            </div>
        </div>
    </div>

    <div class="recommendMV">
        <div class="recommendMV-warp">
            <span>推荐MV</span>
            <span class="right">更多></span>
        </div>
        <div class="recommendMVList">
            <div class="box-MV" v-for="mlist in MVList" :key="mlist.id">
                <a @click="goToMV(mlist.id)">
                    <img :src="mlist.cover">
                    <p class="dexcription">{{ mlist.briefDesc }}</p>
                </a>
            </div>  
        </div>
        
    </div>

</div>

</template>

<script>
export default {
    data(){
        return {
            lunbotu:[],
            songList:[],
            MVList:[]
        }
    },
    created(){
        this.getLunbotu()
        this.getMV()
    },
    methods:{
        getLunbotu(){
            this.$http.get("netease/songList/highQuality").then(res => {
                if(res.body.code === 200){
                    this.lunbotu = res.body.data.splice(0,4)
                    this.songList = res.body.data.splice(4,6)
                    // console.log(this.songList)
                }
            },(err) => {
                console.log(err)
            })
        },
        getMV(){
            this.$http.get("netease/mv/top").then(res => {
                if(res.body.code === 200){
                    this.MVList = res.body.data.splice(0,6)
                    // console.log(this.MVList)
                }
            },(err) => {
                console.log(err)
            })
        },
        goTogedan(id){
            this.$router.push({ name: 'gedaninfo',params:{ id }})
        },
        goToMV(id){
            this.$router.push({ name: 'MVinfo',params:{ id }})
        }
    }
}
</script>

<style lang="scss" scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .fashion-container{
        .mint-swipe{
            width: 100%;
            height: 200px;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .recommendSongList{
        min-height: 350px;
        padding: 10px;
        .recommend-warp{
            margin: 2px 5px;
            height: 21px;
        }
        .recommendList{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .box{
            width: 32%;
            height: 160px;
            position: relative;
            margin-bottom: 5px;
            img{
                width: 100%;
                height: 120px;
            }
            .count{
                position: absolute;
                right: 0;
                top: 0;
                color: #fff;
                text-align: right;
                font-size: 16px;
                background-color:rgba(0,0,0,.2);
            }
            .description{
                max-height: 40px;
                font-size: 12px;
            }
        }
        }
        
    }
    .left{
        float: left;
    }
    .right{
        float: right;
    }
    .recommendMV{
        min-height: 320px;
        padding: 10px;
        .recommendMV-warp{
            height: 22px;
            margin: 5px 10px;
        }
        .recommendMVList{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .box-MV{
                width: 48%;
                height: 150px;
                img{
                    width: 100%;
                    height: 120px;
                }
                .dexcription{
                    font-size: 12px;
                    max-height: 30px;
                }
            }
        }
    }

</style>