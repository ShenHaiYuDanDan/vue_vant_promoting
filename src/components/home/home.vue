<template>
  <div>
    <van-nav-bar
      title
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    > 
      <!-- <van-icon name="search" slot="right" /> -->
     </van-nav-bar>
      <van-tabbar route safe-area-inset-bottom placeholder>
        <van-tabbar-item replace to="/index" icon="home-o">首页</van-tabbar-item>
        <!-- <van-tabbar-item replace to="/" icon="setting-o">设置</van-tabbar-item> -->
        <!-- <van-tabbar-item replace to="/chart" icon="bar-chart-o">图表</van-tabbar-item> -->
        <van-tabbar-item replace to="/info" icon="manager-o">我的</van-tabbar-item>
      </van-tabbar>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
        this.$router.go(-1);
    },
  }
};
</script>
<style scoped>

</style>