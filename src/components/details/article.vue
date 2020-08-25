<template>
    <div>
        <div class="swiper">
            <van-radio-group v-model="radio">
                <van-cell-group>
                    <van-cell title="单选框 1" clickable @click="radio = '1'">
                        <van-radio slot="right-icon" name="1" />
                    </van-cell>
                    <van-cell title="单选框 2" clickable @click="radio = '2'">
                        <van-radio slot="right-icon" name="2" />
                    </van-cell>
                    <van-button @click='getSelectOneData()'>
                        获取信息
                    </van-button>
                </van-cell-group>
            </van-radio-group>
        </div>
    </div>

</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                radio: '1'
            }
        },
        mounted() {
            console.log(this.$router.currentRoute.query.id)
            this.getSelectOneData();
        },
        methods: {
            getSelectOneData() {
                axios.post('api/api/userRecharge/add').then(res => {
                    console.log(res)
                    this.$toast({
                        message: res.data.message
                    });
                })
            }
        }
    }
    // export default {
    //     data(){
    //         return{
    //             title:'',
    //             context:''
    //         }
    //     },
    //     mounted(){
    //         this.getParams()
    //     },
    //     methods:{
    //         getParams(id){
    //         const routerParams=this.$router.currentRoute.query.id
    //         axios.get('http://106.13.164.46:8081/api/article/one/'+routerParams).then(res=>{
    //         // axios.get('/api/api/article/one/'+routerParams).then(res=>{
    //             this.title=res.data.data.title
    //             this.context=res.data.data.context
    //         })
    //         }
    //     }
    // };
</script>
<style scoped>
    .swiper {
        background-image: url("../../img/bule.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        -moz-background-size: cover;
    }
</style>