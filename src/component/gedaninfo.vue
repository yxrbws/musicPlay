<template>
    <div class="gedaninfo-container">
        <div class="top">
            <p>
                <span class="mui-icon mui-icon-back back" @click="goback"></span><span class="歌单">歌单</span>
            </p>
            <div class="des">
                <img :src="info.coverImgUrl">
                <span class="name">{{ info.name }}</span>
                <span class="description">{{ info.description }}</span>
                
            </div>
        </div>

        <div class="list">
           <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item,index) in list" :key="item.id">
					<a @click="play(item.id)">
						<span class="mui-media-object mui-pull-left">{{index+1}}</span>
						<div class="mui-media-body">
							{{item.name}}
							<p class='mui-ellipsis'>{{item.artists[0].name}}</p>
						</div>
					</a>
				</li>
			</ul>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return {
            info:[],
            list:[]
        }
    },
    created(){
        this.getinfo()
    },
    methods: {
        goback(){
            this.$router.go(-1)
        },
        getinfo(){
            this.$http.get("netease/songList?id="+this.$route.params.id).then(res => {
                this.info = res.body.data
                this.list = this.info.tracks
                // console.log(this.info)
            },(err) => {
                console.log(err)
            })
        },
        play(id){
            // let data = null
            this.$http.get("netease/song?id="+id).then(res => {
                // data = res.body.data
                this.$store.commit('getmusic',[res.body.data,id])
                // console.log(res.body.data)
            })
            this.$http.get("netease/url?id=41642901&quality=flac").then(res => {
                // console.log(res.body.data)
            })
            // console.log(data)
            // 
        }
    }
}
</script>

<style lang="scss" scoped>
    .gedaninfo-container{
        .top{
            height: 25px;
            color: rgb(114, 109, 109);
            font-size: 18px;
            background-color: rgba(86, 59, 108, 1);
            height: 240px;
            .back{
                width: 40px;
                height: 40px;
                color: white;
                margin: 10px;
            } 
            .des{
                img{
                    border: none;
                    width: 40%;
                    height: 150px;
                    padding: 10px;
                    padding-top: 0;
                    float: left;
                }
                span{
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    margin: 10px 5px;
                }
                .name{
                    font-size: 14px;
                    color: azure;
                }
                .description{
                    font-size: 12px;
                    color: #bbb;
                }
            }
        }
        .list{
            span{
                margin-right: 20px;
                color:#ddd;
                text-align: center;
            }
            .mui-ellipsis{
                margin-top: 5px;
                font-size: 12px;
            }
        }
    }
</style>
