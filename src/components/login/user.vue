<template>
  <div class="div3" id="logo">
    <div>
      <img v-bind:src="imgUrl" />
      <ul>
        <van-cell-group>
          <van-field
            v-model="phone"
            required
            label="用户名"
            placeholder="请输入用户名"
            @click-right-icon="$toast('question')"
          />
          <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
        </van-cell-group>
        <div class="div2">
          <van-row type="flex" justify="center">
            <van-col span="6">
              <van-button
              @click="show = true"
                round
                type="info"
                @click.native="login"
                color="linear-gradient(to right, #4bb0ff, #6149f6)"
              >登陆
              </van-button>
              <van-overlay :show="show" @click="show = false">
                <div class="div4">
               <van-loading  size="24px" type="spinner"  vertical>登录中...</van-loading>
                </div>
              </van-overlay>
            </van-col>
            <van-col span="6">
              <van-button
                round
                type="info"
                to="/registe"
                color="linear-gradient(to right, #4bb0ff, #6149f6)"
              >注册</van-button>
            </van-col>
          </van-row>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
import qs from "qs";
import axios from "axios";

export default {
  data() {
    return {
      showname: false,
      imgUrl: require("../../img/HM.png"),
      phone: "",
      password: "",
      show: false,
      tips:"",
    };
  },
  mounted(){
    show:true
  },
  methods: {
    login() {

      let pos = qs.stringify({
        phone: this.phone,
        password: this.password
      });
      axios.post("api/api/login", pos).then(res => {
      // axios.post("http://106.13.164.46:8081/api/login", pos).then(res => {
        if (res.data.code != 1000) {
          console.log(res);
          this.$toast({
            message: res.data.message
          });
          this.show=false
        } else {
          this.show=true
          var finaToken = res.data.data;
          // console.log(finaToken);
          axios({
            method: "post",
            // url: "http://106.13.164.46:8081/api/getMessage",
            url: "/api/api/getMessage",
            headers: {
              token: finaToken
            },
            params: {
              phone: this.phone
            }
          }).then(res => {
            if (res.data.code == 1000) {
              if (res.data.data.username) {
                this.showname = true;
              }
              localStorage.setItem("token", finaToken);
              localStorage.setItem("param", JSON.stringify(res.data.data));
              this.$toast({
                message: res.data.message
              });
              this.$router.push("/index");
            } else {
              console.log(res);
              this.$toast({
                message: res.data.message
              });
            }
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.div2 {
  margin-top: 20px;
}
.div3 {
  margin-top: 50px;
}
.div4 {
  margin-top: 79%;
}
</style>