import Vue from 'vue'
import App from './App.vue'

import { Button } from 'vant';
import { Row, Col } from 'vant';

import { Icon } from 'vant';
Vue.use(Icon);
import {Popup} from 'vant';
Vue.use(Popup)
import { Cell, CellGroup } from 'vant';
Vue.use(Cell).use(CellGroup);

import { Field } from 'vant';
Vue.use(Field);
//标签页
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);
//单选框
import { RadioGroup, Radio } from 'vant';
Vue.use(RadioGroup);
Vue.use(Radio);

import { Toast } from 'vant';
Vue.use(Toast);
// 分割线
import { Divider } from 'vant';
Vue.use(Divider)
//小键盘
import { NumberKeyboard } from 'vant';
Vue.use(NumberKeyboard);

import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
import { Lazyload } from 'vant';
// Vue.use(Lazyload, options);
//小喇叭通知栏
import { NoticeBar } from 'vant';
Vue.use(NoticeBar);
// 引入图表
// import echarts from 'echarts';
// Vue.prototype.$echarts = echarts;

import { Search } from 'vant';
Vue.use(Search);
//提示弹窗
import { Dialog } from 'vant';
Vue.use(Dialog)

import { ImagePreview } from 'vant';
Vue.use(ImagePreview);

import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);

import { NavBar } from 'vant';
Vue.use(NavBar);

import { List } from 'vant';
Vue.use(List);

import { Image } from 'vant';
Vue.use(Image);

import { Skeleton } from 'vant';
Vue.use(Skeleton);

import { Overlay } from 'vant';
Vue.use(Overlay);


import { Grid, GridItem } from 'vant';
Vue.use(Grid).use(GridItem);

import { Loading } from 'vant';
Vue.use(Loading);

import { Uploader } from 'vant';
Vue.use(Uploader);

Vue.use(Row).use(Col);
Vue.use(Button);
Vue.config.productionTip = false
import axios from 'axios'
import qs from 'qs'
Vue.prototype.$qs = qs;
Vue.prototype.$http = axios;

import router from './router'


import { format } from 'url';
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  const type = to.meta.type
  console.log('123123')
  // 判断该路由是否需要登录权限
  const token = localStorage.getItem('token')
  if (type === 'login' || token) {
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()  // 确保一定要有next()被调用
  }
})


// http响应成功设置
// axios.interceptors.response.use(
  
//   response => {
//     const res = response.data
//     // if the custom code is not 20000, it is judged as an error.
//     if (res.code !== 1000) {
//       Message({
//         message: res.message || 'Error',
//         type: 'error',
//         duration: 5 * 1000
//       })
//       // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
//       // console.log(res)

//       if (res.message === '401' || res.message === '403' || res.code === 50014) {
//         // to re-login
//         MessageBox.confirm('您已注销，您可以取消停留在此页，或重新登录','确认注销', {
//           confirmButtonText: '重新登陆',
//           cancelButtonText: '退出',
//           type: 'warning'
//         }).then(() => {
//           store.dispatch('user/resetToken').then(() => {
//             location.reload()
//           })
//         })
//       }
//       return Promise.reject(new Error(res.message || 'Error'))
//     } else {
//       // console.log(res)
//       return res
//     }
//   },
//   error => {
//     console.log('err' + error) // for debug
//     Message({
//       message: error.message,
//       type: 'error',
//       duration: 5 * 1000
//     })
//     return Promise.reject(error)
//   }

// );
