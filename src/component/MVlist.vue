<template>
    <div class="MV-container">
        <span class="top">MV精选>></span>

        <div class="MVlist">
            <div class="box" v-for="item in mvlist" :key="item.id">
                <img :src="item.cover">
                <span>{{ item.name }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            mvlist: []
        }
    },
    created(){
        this.getmvlist()
    },
    methods: {
        getmvlist(){
            this.$http.get("netease/mv/top").then(res => {
                this.mvlist = res.body.data
                console.log(res.body.data)
            },(err) => {
                console.log(err)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .MV-container{
        padding: 10px;
        .top{
            font-size: 18px;
            color: #212020;
            margin: 10px;
        }
        .MVlist{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .box{
                width: 48%;
                height: 150px;
                img{
                    width: 100%;
                    height: 120px;
                }
                span{
                    font-size: 12px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    color: black;
                }
            }
        }
    }
</style>
