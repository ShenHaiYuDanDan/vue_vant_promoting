<template>
    <div>
        <div style="margin-top: 20px">
            <van-row>
                <van-col span="8">
                    <van-button plain type="info" size="small" @click="money=100">100</van-button>
                </van-col>
                <van-col span="8">
                    <van-button plain type="info" size="small" @click="money=200">200</van-button>
                </van-col>
                <van-col span="8">
                    <van-button plain type="info" size="small" @click="money=500">500</van-button>
                </van-col>
            </van-row>
        </div>
        <div style="margin-top: 10px">
            <van-row>
                <van-col span="8">
                    <van-button plain type="info" size="small" @click="money=1000">1000</van-button>
                </van-col>
                <van-col span="8">
                    <van-button plain type="info" size="small" @click="money=2000">2000</van-button>
                </van-col>
                <van-col span="8">
                    <van-button plain type="info" size="small" @click="money=3000">3000</van-button>
                </van-col>
            </van-row>
        </div>
        <div style="margin-top: 10px;margin-left: 20px">
            <label>
                <!--                <input style="width: 80%" v-model="money" placeholder="请输入充值金额"/>-->
                <van-field style="width: 80%;" v-model="money" placeholder="请输入充值金额"/>
            </label>
        </div>
        <div style="margin-top: 20px">
            <van-button type="info" block round color="linear-gradient(to right, #blue, #red)" @click="show=true"
                        :disabled="disabledShow">立即支付
            </van-button>
            <!--            <van-button style="margin-top: 5px" type="info" block round color="linear-gradient(to right, #ff6034, #ee0a24)" size="small">返回上一级</van-button>-->
        </div>
        <van-popup v-model="show" round position="bottom" :style="{ height: '30%' }">
            <div style="margin-top: 20px">
                <van-cell value="支付宝" is-link @click="setUrlAliPay"></van-cell>
                <van-cell value="微信" is-link></van-cell>
            </div>
        </van-popup>
        <van-popup v-model="alipay" :style="{ height: '100%'}" closeable >
<!--            <p>长按图片扫码支付</p>-->
<!--            <van-image :src="img"/>-->
            <div>
                <iframe :srcdoc="url"
                        frameborder="no"
                        border="0"
                        marginwidth="0"
                        marginheight="0"
                        scrolling="no"
                        width="100%"
                        height="100%"
                        style="overflow:hidden;">
                </iframe>
            </div>
        </van-popup>
        <div>
            <iframe :srcdoc="url"
                    frameborder="no"
                    border="0"
                    marginwidth="0"
                    marginheight="0"
                    scrolling="no"
                    width="0"
                    height="0"
                    style="overflow:hidden;">
            </iframe>
        </div>
        <div v-html="url">
        </div>
        <router-view/>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "recharge",
        data() {
            return {
                url: '',
                money: '',
                show: false,
                disabledShow: true,
                alipay: false,
                img: ''
            }
        },
        mounted() {
        },
        watch: {
            money(curV, oldV) {
                switch (curV) {
                    case 100 :
                        this.img = 'http://106.13.164.46:8088/1598433138383.jpg'
                        break;
                    case 200 :
                        this.img = 'http://106.13.164.46:8088/1598433159473.jpg'
                        break;
                    case 500 :
                        this.img = 'http://106.13.164.46:8088/1598433325356.jpg'
                        break;
                    case 1000 :
                        this.img = 'http://106.13.164.46:8088/1598432864262.jpg'
                        break;
                    case 2000 :
                        this.img = 'http://106.13.164.46:8088/1598433352859.jpg'
                        break;
                    case 3000 :
                        this.img = 'http://106.13.164.46:8088/1598433366773.jpg'
                        break;
                    default :
                        this.img = 'http://106.13.164.46:8088/1598431700271.jpg'
                }
                //curV点击当前的值
                //oldV上一次点击的值
                // console.log(this.money,curV,oldV)
                if (curV !== '') {
                    this.disabledShow = false
                } else {
                    this.disabledShow = true
                }
            }
        },
        methods: {
            setUrlAliPay(){
                axios.post('/api/api/alipay').then(res => {
                    this.url = res.data;
                    //原始页面直接跳转支付
                    this.$nextTick(()=>{
                        //字段更新后提交此表单
                        document.forms[0].submit();
                    })
                    //跳转新页面支付
                    // if (res.status===200){
                    //     this.$router.push({
                    //         name:'alipay',
                    //         params: {
                    //             form:res.data
                    //         }
                    //     })
                    // }
                    //打开新页面支付
                    // window.location.replace('<html><head><title></title><meta charset=\'utf-8\'><body>"+dataObj+"</body></html>')
                    // let dwSafari
                    // dwSafari=window.open();
                    // dwSafari.document.open();
                    // let dataObj=res.data
                    // let html=  dataObj.replace(/[^\u0000-\u00FF]/g,function($0){return escape($0).replace(/(%u)(\w{4})/gi,"&#x$2;")});
                    // dwSafari.document.write("<html><head><title></title><meta charset='utf-8'><body>"+dataObj+"</body></html>")
                    // dwSafari.document.forms[0].submit()
                    // dwSafari.document.close()
                })
            },

        },
    }
</script>

<style scoped>

</style>