import Vue from 'vue'
import axios from 'axios'
const http = axios.create({
  baseURL: process.env.API_BASE_URL
})
// if (process.browser) {
//   http.interceptors.request.use(config => {
//     config.headers.Authorization =
//       'Bearer ' + localStorage.getItem('access_token')
//     config.headers['Accept'] = 'application/json'
//     config.headers['Content-Type'] = 'application/json'
//     return config
//   })
// }

Vue.prototype.$http = http
