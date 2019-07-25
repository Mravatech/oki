import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faCircle, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import carousel from 'vue-owl-carousel'

import {VueTabs, VTab} from 'vue-nav-tabs'
//you can also import this in your style tag
import 'vue-nav-tabs/themes/vue-tabs.css'

// import VueTaber from 'vue-tabs'
// import '../vue-tabs.css'
// import tabs from './tabs.js'
//
// const vueTaber = new VueTaber({
//     tabs
// })
//
// Vue.use(VueTaber)

Vue.use(BootstrapVue)
import VueTypedJs from 'vue-typed-js'

Vue.use(VueTypedJs)

import { VueTyper } from 'vue-typer'
import VueTyperPlugin from 'vue-typer'
Vue.use(VueTyperPlugin)

library.add(faUserSecret, faFacebookF, faTwitter, faInstagram, faCircle, faCircleNotch)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
    VueTyper,
    'vue-typer': VueTyper,
    carousel,
    VueTabs,
    VTab,
    // taber: vueTaber,
  render: h => h(App),

}).$mount('#app')
