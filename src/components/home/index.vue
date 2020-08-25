<template>
  <div class="swiper">
    <form action="/">
      <van-search v-model="context" placeholder="请输入相关比赛名称" show-action shape="round" @search="onSearch"
        background="bule">
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
    </form>

    <!--<van-notice-bar text="富强、民主、文明，和谐，自由，平等，公正，法治，爱国，敬业，诚信，友善。" left-icon="volume-o" /> -->

    <!-- 轮播 -->
    <van-swipe :autoplay="2000" :loop="true" :height="150" indicator-color="#fff">
      <van-swipe-item v-for="(image, index) in SwiperImg" :key="index">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 分割线 -->
    <van-divider contentPosition="center" customStyle="color: #1989fa;border-color: #1989fa;font-size: 18px;">英雄联盟比赛
    </van-divider>
    <!-- 导航栏 -->
    <van-tabs v-model='active' type="card" background="#111111" color="#4169E1">
      <van-tab title="今日">

        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <!-- ellipsis超出文本省略号显示 item.context|ellipsis -->
          <!-- <img :src="item.content"> -->
          <!-- 带ID跳转到详情页 @click="自定义函数（接受的字段）" -->
          <!-- <van-cell @click="ArticleDetails(item.id)" class="van-multi-ellipsis--12" v-for="(item,index) in list"
                :key="index">
           <div class="div1">
                      <van-cell>{{item.title}}</van-cell>
                    </div>
                    <div v-text="item.context" class="div1"></div>
              </div>
              </van-cell> -->
          <div class="van-multi-ellipsis--12" v-for="(item,index) in list" :key="index">
            <div style="height:120px;" class="setbj">
              <div class="top_title">
                <van-row>
                  <van-col span="8" offset="2">
                    <font color='ffffff'>{{item.matchName}}</font>
                    <font color='ffffff' size='2'> /{{item.fieldNumber}}</font>
                  </van-col>
                </van-row>
              </div>
              <div class="top_flex">
                <van-row type="flex" justify="center">
                  <van-col span="6" offset="2">
                    <font color='ffffff' size='5'>{{item.matchRanksBlue}}</font>
                  </van-col>
                  <van-col span="6">
                    <font color='ffffff'>VS</font>
                  </van-col>
                  <van-col span="6">
                    <font color='ffffff' size='5'>{{item.matchRanksRed}}</font>
                  </van-col>
                </van-row>
              </div>
              <div class="top_fix">
                <van-row>
                  <van-col offset="16">
                    <van-button color="linear-gradient(to right, #1E90FF, #00FF00)"
                      @click="ArticleDetails(item.id,index,$event)" size="small">查看详情</van-button>
                  </van-col>
                </van-row>
              </div>
            </div>
          </div>

          <!-- <div @click="ArticleDetails(item.id)" class="van-multi-ellipsis--12" v-for="(item,index) in list"
              :key="index">
                  <div class="div1">
                      <p>{{item.title}}</p>
                    </div>
                    <div v-text="item.context" class="div1"></div>
              </div> -->
        </van-list>


      </van-tab>
      <van-tab title="明日" color="#111111">
        <!-- 加载list比赛列表 -->
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <!-- ellipsis超出文本省略号显示 item.context|ellipsis -->
          <!-- <img :src="item.content"> -->
          <!-- 带ID跳转到详情页 @click="自定义函数（接受的字段）" -->
          <div class="van-multi-ellipsis--12" v-for="(item,index) in list" :key="index">
            <div style="height:120px;" class="setbj">
              <div class="top_title">
                <van-row>
                  <van-col span="8" offset="2">
                    <font color='ffffff'>{{item.matchName}}</font>
                    <font color='ffffff' size='2'> /BO3</font>
                  </van-col>
                </van-row>
              </div>
              <div class="top_flex">
                <van-row type="flex" justify="center">
                  <van-col span="6" offset="2">
                    <font color='ffffff' size='5'>IG</font>
                  </van-col>
                  <van-col span="6">
                    <font color='ffffff'>VS</font>
                  </van-col>
                  <van-col span="6">
                    <font color='ffffff' size='5'>RNG</font>
                  </van-col>
                </van-row>
              </div>
              <div class="top_fix">
                <van-row>
                  <van-col offset="16">
                    <van-button color="linear-gradient(to right, #1E90FF, #00FF00)"
                      @click="ArticleDetails(item.id,index,$event)" size="small">查看详情</van-button>
                  </van-col>
                </van-row>
              </div>
            </div>
          </div>
        </van-list>
      </van-tab>
      <!-- <van-tab title="昨日"></van-tab> -->
      <!-- <van-tab title="历史"></van-tab> -->

    </van-tabs>
    <!-- list新闻列表 -->
  </div>
</template>
<script>
  // import { ImagePreview } from "vant";
  // import { Lazyload } from "vant";
  import qs from "qs";
  import axios from "axios";
  import {
    filter
  } from "minimatch";
  export default {
    data() {
      return {
        show: false,
        radio: '1',
        value: '',
        //默认索引值
        title: "hahah",
        active: 0,
        articleId: "",
        context: "",
        matchName:"",
        list: [],
        loading: false,
        finished: false,
        SwiperImg: [
          "http://106.13.164.46:8088/mm.png",
          "http://106.13.164.46:8088/mm.png",
          "http://106.13.164.46:8088/mm.png"
        ]
      };
    },
    methods: {
      // 点击跳转
      ArticleDetails(id, index, $event) {
        this.current = index;
        //获取点击对象      
        var el = event.currentTarget.id;
        console.log(el);
        this.$router.push({
          path: "/article",
          query: {
            id: id
          }
        });
        // console.log(id)
      },

      onLoad() {
        // 异步更新数据
        setTimeout(() => {
          axios.get("http://106.13.164.46:8081/api/getUserQuery/competitionRelease").then(res => {
            // axios.get("/api/api/article/list").then(res => {
            if (res.data.code != 1000) {
              this.$toast({
                message: res.data.message
              });
            } else {
              // console.log(res.data.data);
              for (let i = 0; i < res.data.data.total; i++) {
                this.list.push(this.list.length + 1);
              }
              // // 加载状态结束
              this.loading = false;
              // 数据全部加载完成
              if (this.list.length >= res.data.data.total) {
                console.log(res.data.data.list)
                this.list = res.data.data.list;
                this.finished = true;
              }
            }
          });
        }, 500);
      },
      // 异步加载数据列表
      // 搜索
      onSearch() {
        let pot = qs.stringify({
          context: this.context
        });
        setTimeout(() => {
          axios
            .post("http://106.13.164.46:8081/api/article/context", pot)
            .then(res => {
              // axios.get("/api/api/article/list").then(res => {
              if (res.data.code != 1000) {
                this.$toast({
                  message: res.data.message
                });
              } else {
                console.log(res.data.data);
                // console.log(res.data.data);
                for (let i = 0; i < res.data.data.total; i++) {
                  this.list.push(this.list.length + 1);
                }
                // // 加载状态结束
                this.loading = false;
                // 数据全部加载完成
                if (this.list.length >= res.data.data.total) {
                  this.list = res.data.data.list;
                  this.finished = true;
                }
              }
            });
        }, 500);
      }
    },
    // 超出文本省略号显示
    filters: {
      ellipsis(value) {
        if (!value) return "";
        if (value.length > 22) {
          return value.slice(0, 22) + "...";
        }
        return value;
      }
    }
  };
</script>
<style scoped>
  .div1 {
    overflow: hidden;
    /*自动隐藏文字*/
    text-overflow: ellipsis;
    /*文字隐藏后添加省略号*/
    display: -webkit-box;
    -webkit-line-clamp: 1;
    /*想要显示的行数*/
    -webkit-box-orient: vertical;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
  }

  .user-container {
    position: absolute;
    background-size: cover;
    /*background-image: url("../../assets/SPR.jpg");*/
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
  }

  /*van-cell{
                width:200px;
                height:200px;
                background:rgba(0,0,0,0.3);
}*/
  .div2 {
    float: right;
  }

  .div4 {
    float: left;
  }

  .setbj {
    background-image: url("../../img/bule1.png");

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    -moz-background-size: cover;
    /* background: #222222; */
    /* ; */

  }

  .swiper {
    background-image: url("../../img/bule.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    -moz-background-size: cover;
  }

  .top_fix {
    position: relative;
    top: 25%;
    margin-left: 25%;
  }

  .top_flex {
    position: relative;
    top: 15%;

  }

  .top_title {
    position: relative;
    top: 5%;
  }

  /* .png_bk {
    position: relative;
    background-image: url("../../img/jkborder.png") center no-repeat;
    background-size: 100% 100%;
    height: 100%;
    width: 80%;
    margin: 0 auto;
    position: relative;
    text-align: center;
  } */
</style>