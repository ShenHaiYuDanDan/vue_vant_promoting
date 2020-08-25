<template>
<div class="qj">
    <div id="myChart" class="charts"></div>
</div>
</template>
<script>
export default {
    //  name: 'hello',
  data () {
    return {
    //   msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            // 添加背景颜色
 label: {
    textStyle: {
        color: 'rgba(255, 255, 255, 0.3)'
    }
},
            backgroundColor:'#2c343c',
            // title: { text: '在Vue中使用echarts' },
            // tooltip: {},
            // xAxis: {
            //     // data: ["昨日访问数","今日访问数","近一个月访问数"]
            // },
            // yAxis: {},
            series: [{
                // name: '数量',
                type: 'pie',
                data: [
                    {value:230,name:'今日访问数'},
                    {value:200,name:'昨日访问数'}
                ]
            }]
            // ----点形状
            // xAxis: {
            //                     type: 'category',
            //                     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            //                 },
            //                 yAxis: {
            //                     type: 'value'
            //                 },
            //                 series: [{
            //                     data: [820, 932, 901, 934, 1290, 1330, 1320],
            //                     type: 'line',
            //                     smooth: true
            //                 }]
        });
    }
  }
}
</script>
<style scoped>
.charts {
            width: 100%;
            height: 200px;
            /* 水平居中 */
            /* margin:  0 auto; */
            /* 垂直居中 */
            margin-top: 50%;
        };
/* .qj{

} */
</style>