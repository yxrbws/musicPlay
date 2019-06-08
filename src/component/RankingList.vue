<template>
    <div>
        <div class="top">
            <span class="mui-icon-extra mui-icon-extra-rank"></span><span>排行榜</span>
        </div>
        

        <div class="ranklist">
            <ul class="mui-table-view">
                <li class="mui-table-view-cell mui-media" v-for="(item,index) in rank" :key="item.id">
                    <a>
                        <span class="mui-media-object mui-pull-left">{{index+1}}</span>
                        <div class="mui-media-body">
                            {{item.name}}
                            <p class='mui-ellipsis'>{{item.name}}</p>
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
            rank: []
        }
    },
    created(){
        this.getrankinglist()
    },
    methods: {
        getrankinglist(){
            this.$http.get("netease/artist/top").then(res => {
                this.rank = this.rank.concat(res.body.data)
                console.log(res.body.data)
            },(err) => {
                console.log(err)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .top{
        background-color: #ddd;
    }
</style>