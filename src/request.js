import axios from 'axios'

axios.interceptors.request.use(
    config => {
      if (localStorage.getItem('token')) {
        // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.token = `${localStorage.getItem('token')}`;
      }

      console.log('request')
      return config;
    },
    err => {
      return Promise.reject(err);
});