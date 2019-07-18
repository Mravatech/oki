import Vue from 'vue'
import Router from 'vue-router'
import Splash from './views/Splash/Splash.vue'
import Splash2 from './views/Splash/Splash2.vue'
import Splash3 from './views/Splash/Splash3.vue'
import Login from './views/Login/Login.vue'
import Verify from './views/Login/Verify.vue'
import VerifyCode from './views/Login/VerifyCode.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Splash',
      component: Splash
    },
      {
          path: '/Splash2',
          name: 'Splash2',
          component: Splash2
      },
      {
          path: '/Splash3',
          name: 'Splash3',
          component: Splash3
      },
      {
          path: '/Login',
          name: 'Login',
          component: Login
      },
      {
          path: '/Verify',
          name: 'Verify',
          component: Verify
      },
      {
          path: '/VerifyCode',
          name: 'VerifyCode',
          component: VerifyCode
      },
      {
          path: '/Home',
          name: 'home',
          component: Home
      },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ],
    mode:'history'
})
