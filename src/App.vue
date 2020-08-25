<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Index msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// import HelloWorld from './components/home/index.vue'
import Index from "./components/home/home.vue";
export default {
  name: "app",
  components: {
    Index
  },
  //现在用localStorage来永久存储了
  //钩子函数！ vuex每次刷新页面都会删除掉vuex存储的用户信息，每次刷新页面把sessionStorage中的数据重新存储到vuex中
  // 这个问题导致info页面无法访问
  // created() {
  //   if (sessionStorage.getItem("param")) {
  //     this.$store.replaceState(
  //       Object.assign(
  //         {},
  //         this.$store.state,
  //         JSON.parse(sessionStorage.getItem("param"))
  //       )
  //     );
  //   }
  //   window.addEventListener("beforeunload", () => {
  //     sessionStorage.setItem("param", JSON.stringify(this.$store.state));
  //   });
  // }
};

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
