<template>
    <div class="hotgedan">
        <div class="box" v-for="item in list" :key="item.id">
            <div @click="goTogedan(item.id)">
                <img :src="item.coverImgUrl">
                <span class="count">{{ item.playCount | countForm }}</span>
            </div>
            <span>{{ item.name }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list:[],
            page: 1
        }
    },
    created(){
        this.getgedanlist()
    },
    methods:{
        getgedanlist(){
            this.$http.get("netease/songList/hot").then(res => {
                this.list = this.list.concat(res.body.data)
                console.log(res.body.data)
            })
        },
        goTogedan(id){
            this.$router.push({ name: 'gedaninfo',params:{ id }})
        }
    }
}
</script>

<style lang="scss" scoped>
    .hotgedan{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 10px;
        .box{
            width: 48%;
            height: 240px;
            position: relative;
            img{
                width: 100%;
                height: 150px;
            }
            .count{
                position: absolute;
                right: 0;
                top: 0;
                color: white;
                background-color: rgba(0, 0, 0, .2);
                font-size: 14px;
            }

        }
    }
</style>