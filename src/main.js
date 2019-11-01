import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import MyHttpServer from '@/plugins/http.js'

import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/style.css'
Vue.use(ElementUI)
Vue.use(MyHttpServer)

Vue.config.productionTip = false

let vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.use(vm)