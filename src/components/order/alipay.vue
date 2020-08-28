<template>
    <div v-html="alipay">
    </div>
</template>

<script>
    export default {
        name: "alipay",
        data(){
            return{
                alipay:'',
            }
        },
        mounted() {
            //赋值新值
            this.alipay=this.$route.params.form
            //$nextTick动态更新新的数据，dom元素中还未加载，通过$nextTcik获取到dom更新后的值 然后提交
            this.$nextTick(()=>{
                document.forms[0].submit();
            })
        }
    }
</script>

<style scoped>

</style>