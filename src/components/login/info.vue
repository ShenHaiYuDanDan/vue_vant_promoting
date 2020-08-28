<template>
    <div class="cell-t">
        <div style="height: 105px;">
            <van-uploader :after-read="onRead" style="margin-right: 200px;margin-top:10px">
                <van-image round width="5rem" height="5rem" :src="userPortrait"/>
            </van-uploader>
            <div style="margin-left: 80px;margin-top: -4.5em">
                <font size="4">{{username}}</font>
                <div style="margin-top: 8px">
                    <h1 style="color: #ed6a0c;font-size: 12px">余额:{{money}}</h1>
                </div>
            </div>
        </div>
        <div>
            <van-grid clickable :column-num="2" icon-size=15>
                <van-grid-item icon='gold-coin-o' text='充值' to='/recharge'></van-grid-item>
                <van-grid-item icon='paid' text='提现' to='/'></van-grid-item>
            </van-grid>
        </div>
        <div style="margin-top:10px;">
            <!-- <van-row>
                <van-col>
                    <van-button style="background-color: rgb(66, 66, 172);margin-left: 90px;">充值</van-button>
                </van-col>
            </van-row> -->
            <van-cell is-link to="userOrder" value='我的订单' class="cell-t" style=" "></van-cell>
            <van-cell is-link to='' value='消费历史'></van-cell>
            <van-cell is-link to value="基础资料"></van-cell>
            <van-cell is-link value='退出登陆' @click='logOut'></van-cell>
        </div>

    </div>

</template>
<script>
    import qs from "qs";
    import axios from "axios";

    export default {
        data() {

            return {
                userPortrait: "",
                img_name: "",
                username: "",
                phone: "",
                id: "",
                money:0,
                loading: true,
            };
        },
        methods: {
            getUserInfo() {
                let tokens = localStorage.getItem("token");
                let phones = JSON.parse(localStorage.getItem("param")).phone;
                axios({
                    method: "post",
                    // url: "http://106.13.164.46:8081/api/getMessage",
                    url: "/api/api/getMessage",
                    headers: {
                        token: tokens,
                    },
                    params: {
                        phone: phones,
                    },

                }).then((res) => {
                    if (res.data.code == 1000) {
                        // console.log(res.data.data.userPortrait);
                        this.userPortrait = res.data.data.userPortrait;
                    } else if (res.data.message == 401) {
                        localStorage.removeItem("token");
                        localStorage.removeItem("param");
                        this.$toast({
                            message: "请重新登陆",
                        });
                        this.logOut()
                    } else {
                        this.$toast({
                            message: res.data.message,
                        });
                    }
                });
            },
            onRead(file) {
                let data = new FormData();
                data.append("file", file.file);
                // axios
                // .post("http://106.13.164.46:8081/user/upload/" + this.id, data)
                axios.post("http://106.13.164.46:8081/user/upload/" + this.id, data).then((res) => {
                    this.userPortrait = res.data;
                    console.log(res.data);
                });
            },
            logOut() {
                localStorage.removeItem("token");
                localStorage.removeItem("param");
                this.$router.push("/index");
            },
        },
        mounted() {
            this.getUserInfo();
            this.username = JSON.parse(localStorage.getItem("param")).username;
            this.phone = JSON.parse(localStorage.getItem("param")).phone;
            this.id = JSON.parse(localStorage.getItem("param")).id;
            this.userPortrait = JSON.parse(localStorage.getItem("param")).id;
            this.loading = true;
        },
    };
</script>
<style scoped>
    .div3 {
        margin-top: 120%;
    }

    .cell-t {
        position: relative;
        background-image: url("../../img/bule.png") center no-repeat;
        background-size: 100% 100%;
        margin: 0 auto;
    }
</style>
