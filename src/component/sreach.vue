<template>
    <div>
        <div class="header">
            <input type="text" @keyup="keySreach()" v-model="msg">
            <span v-if="flag" @click="cancel">取消</span><span v-else @click="del">×</span>
        </div>
        <div class="list" v-for="item in list" :key="item.id">
            <a @click="play(item.id)">
            <span class="name">{{ item.name }}</span><br />
            <span class="album">{{ item.al.name }}</span>
            <span class="mui-icon mui-icon-plusempty right" @click="add(item.id)"></span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list: null,
            flag: true,
            msg: ''
        }
    },
    methods:{
        keySreach(){
            this.flag = this.msg.length>0 ? false : true
            this.$http.get('netease/search?keyword='+this.msg+'&type=song').then(res=>{
                console.log(JSON.parse(res.bodyText).data)
                this.list = JSON.parse(res.bodyText).data.songs
                console.log(this.list)
            },rej=>{
                this.$http.get('netease/search?keyword='+this.msg+'&type=singer').then(res=>{
                    // console.log(JSON.parse(res.bodyText).data)
                    this.list = JSON.parse(res.bodyText).data.song
                })
            })
        },
        cancel(){
             window.history.back()
        },
        add(id){
            this.$http.get("netease/song?id="+id).then(res => {
                // data = res.body.data
                this.$store.commit('getmusic',[res.body.data,id])
                // console.log(res.body.data)
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
                console.log(res.body.data)
            })
            // console.log(data)
            // 
        },
        del(){
            this.msg = null
            this.flag = true
        }
    }
}
</script>

<style lang="scss" scoped>
    .header{
        width: 100%;
        height: 40px;
        position: fixed;
        top:0;
        background-color: red;
        z-index: 11;
        input{
            width: 80%;
            height: 30px;
            margin: 5px;

        }
        span{
            color: #eee;
        }
    }

    .list{
        width: 100%;
        height: 60px;
        position: relative;
        box-shadow: 0 0 2px #fff;
        margin: 2px 5px;
        padding: 6px;
        a{
            color: #ccc;
            // direction: none
        }
        .name{
            font-size: 16px;
            color: black;
        }
        .album{
            font-size: 12px;
            color:#ddd;
        }
        .left{
            float: left;
        }
        .right{
            float: right;
            margin-top: -8px;
        }
    }
</style>
