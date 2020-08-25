<template>
    <van-list v-model="loading" :finished="finished" finishen-text="加载完成" @load="onLoad">
        <van-cell v-for="(item,index) in list" :key="index" >
            <p>{{item.match_name}}</p>
        </van-cell>
    </van-list>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "user_order",
        data() {
            return {
                list:[],
                loading:false,
                finished:false,
            }
        },
        mounted() {

        },
        methods: {
            onLoad(){
                setTimeout(()=>{
                    axios.get('/api/api/getOrderList').then(res=>{
                        console.log(res)
                        for (let i=0;i<res.data.length;i++){
                            this.list.push(this.list.length+1);
                        }
                        this.loading=false;
                        if (this.list.length>=res.data.length){
                            this.list=res.data
                            this.finished=true
                        }
                    })

                },1000)
            }
        },
        watch: {}

    }
</script>

<style scoped>

</style>