import Vue from 'vue'
import Router from 'vue-router'
// import Login from '../components/login/login.vue'
import Login from '@/components/login/login.vue'
Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       name: 'login',
//       path: '/login',
//       component: Login
//     }
//   ]
// })

export default new Router({
  routes: [{
    name: 'home',
    path: '/',
    redirect: {
      name: 'login'
    }
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  }
  ]
})
