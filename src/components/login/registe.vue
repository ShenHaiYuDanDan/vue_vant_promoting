<template>
  <div>
    <div id="logo" class="div3">
        <img v-bind:src="imgUrl" />
        <ul>
          <van-cell-group>
            <van-field
              v-model="phone"
              required
              label="手机号"
              placeholder="请输入手机号"
              @click-right-icon="$toast('question')"
            />
            <van-field
                v-model="username"
                required
                label="用户名"
                placeholder="请输入用户昵称"
            />
            <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
          </van-cell-group>
          <div class="div2">
          <van-row>
          <van-button
            size="large"
            color="linear-gradient(to right, #4bb0ff, #6149f6)"
            @click.native="login"
          >注册</van-button>
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
      imgUrl: require("../../img/index.png"),
      phone: "",
      password: "",
      username:""
    };
  },
  methods: {
    login() {
      let pos = qs.stringify({
        phone: this.phone,
        password: this.password,
        username:this.username
      });
      // axios.post("api/api/register", pos).then(res => {
      axios.post("http://106.13.164.46:8081/api/register", pos).then(res => {
        if (res.data.code != 1000) {
          this.$toast({
            message: res.data.message
          });
        } else {
              this.$toast({
                message: res.data.message
              });
              this.$router.push("/login");
            }
          });
        }
    }
};
</script>

<style scoped>
/* .me_hemo {
   position: absolute;
  background-size: cover;
  background-image: url("../../assets/img_1.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
} */
/* #logo {
  background: url("../../assets/img_1.jpg");
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
} */

.div2 {
  margin-top: 20px;
}
.div3 {
  margin-top: 50px;
}
</style>