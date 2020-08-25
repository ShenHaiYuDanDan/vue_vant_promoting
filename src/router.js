import Vue from 'vue'
import Router  from 'vue-router';
import { resolve } from 'path';
import Home from "./components/home/home";
import Login from "./components/login/user"
import Index from "./components/home/index";
import Info from './components/login/info';
import Registe from './components/login/registe';
import Article from './components/details/article';
import userOrder from './components/order/user_order'
import Chart from './components/echarts/chart';
import { IndexAnchor } from 'vant';
Vue.use(Router);


export default new Router({
  // meta:{requireAuth:true,},

  mode: 'history',
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index,
      meta:{
        title:'首页',
        type:'/',

      }
      // meta: {
      //   requireAuth: true
      // },
    },

    // {
    //   path:'/chart',
    //   name:'图表',
    //   component:Chart,
    //   meta:{
    //     title:'页面图表',
    //     type:''
    //   }
    // },
    {
      path:'/login',
      name:'login',
      component:Login,
      meta:{
        title:'请登录',
        type:''
      }
    },
    {
      path:'/index',
      name:'index',
      component:Index,
      meta:{
        title:'首页',
        type:''
      }
    },
    {
      path:'/info',
      name:'info',
      component:Info,
      meta:{
        title:'用户信息',
        type:'login',
        // requireAuth:true
      }
    },
    {
      path:'/registe',
      name:'registe',
      component:Registe,
      meta:{
        title:'注册',
        type:''
      }
    },
    {
      path:'/article',
      name:'',
      component:Article,
      meta:{
        title:'新闻详情',
        type:''
      }
    },
    {
      path:'/userOrder',
      name:'userOrder',
      component: userOrder,
      meta: {
        title:'我的订单',
        type:'/login'
      }
    },
    
    // {
    //   path: '/index',
    //   name: '首页',
    //   component: Index,
    //   meta: {
    //     requireAuth: true
    //   },
    //   children: [
    //     {
    //       //对应 一个home一个右边渲染块
    //       path: 'xwfb',
    //       name: '新闻发布',
    //       component: resolve => require(['@/components/admin/xwfb.vue'], resolve)
    //     },

    //     {
    //       path: 'xwlist',
    //       name: '新闻列表',
    //       component: resolve => require(['@/components/admin/xwlist.vue'], resolve)
    //     },
    //     {
    //       path: 'newsDetail',
    //       name: '查看详情',
    //       component: resolve => require(['@/components/admin/newsDetail.vue'], resolve)
    //     },
    //   ]
    // },


    // {
    //   path:'/Test',
    //   name:'Release',
    //   component:Test,
    // },
    // {？
    //   path:'/tt',
    //   name:'tt',
    //   component:tt,
    // },

  ],


});