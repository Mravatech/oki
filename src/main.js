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

Vue.use(BootstrapVue)
import VueTypedJs from 'vue-typed-js'

Vue.use(VueTypedJs)

import { VueTyper } from 'vue-typer'
import VueTyperPlugin from 'vue-typer'
import {ApiService} from "./services/api.service";
Vue.use(VueTyperPlugin)

library.add(faUserSecret, faFacebookF, faTwitter, faInstagram, faCircle, faCircleNotch)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;
ApiService.init('http://localhost:8000/api/v1');


new Vue({
  router,
    VueTyper,
    'vue-typer': VueTyper,
  render: h => h(App)
}).$mount('#app')
