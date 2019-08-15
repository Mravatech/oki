import Vue from 'vue'
import Router from 'vue-router'
import Splash from './views/Splash/Splash.vue'
import Splash2 from './views/Splash/Splash2.vue'
import Splash3 from './views/Splash/Splash3.vue'
import Login from './views/Login/Login.vue'
import Verify from './views/Login/Verify.vue'
import VerifyCode from './views/Login/VerifyCode.vue'
import Location from './views/Login/Location.vue'
import CreatePin from './views/Login/CreatePin.vue'
import Username from './views/Login/Username.vue'
import Landing from './views/Landing/Landing.vue'
import ViewFood from './views/Landing/ViewFood.vue'
import Delicacies from './views/Landing/Delicacies.vue'
import Cart from './views/Cart/Cart.vue'
import Delivery from './views/Landing/Delivery.vue'
import IntegerPlusminus from './components/IntegerPlusminus.vue'
import Invite from './views/Invite/Invite.vue'
import MyCard from './views/MyCard/MyCard.vue'
import WalletBalance from './views/MyCard/WalletBalance.vue'
import AddBankCard from './views/AddCash/AddBankCard.vue'
import History from './views/History/History.vue'
import AddCash from './views/AddCash/AddCash.vue'
import AddCashQuickteller from './views/AddCash/AddCashQuickteller.vue'
import BankTransfer from './views/AddCash/BankTransfer.vue'
import Settings from './views/Settings/Settings.vue'
import CustomerService from './views/Settings/CustomerService.vue'
import ChangePin from './views/Settings/ChangePin.vue'
import Menu from './views/Menu/Menu.vue'

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
          path: '/VerifyCode/:phone',
          name: 'VerifyCode',
          component: VerifyCode
      },
      {
          path: '/Location',
          name: 'Location',
          component: Location
      },
      {
          path: '/CreatePin',
          name: 'CreatePin',
          component: CreatePin
      },
      {
          path: '/Username',
          name: 'Username',
          component: Username
      },
      {
          path: '/Landing',
          name: 'Landing',
          component: Landing
      },
      {
          path: '/ViewFood',
          name: 'ViewFood',
          component: ViewFood
      },
      {
          path: '/Delicacies',
          name: 'Delicacies',
          component: Delicacies
      },
      {
          path: '/Cart',
          name: 'Cart',
          component: Cart
      },
      {
          path: '/Delivery',
          name: 'Delivery',
          component: Delivery
      },
      {
          path: '/Menu',
          name: 'Menu',
          component: Menu
      },
      {
          path: '/IntegerPlusminus',
          name: 'IntegerPlusminus',
          component: IntegerPlusminus
      },
      {
          path: '/Invite',
          name: 'Invite',
          component: Invite
      },
      {
          path: '/MyCard',
          name: 'MyCard',
          component: MyCard
      },
      {
          path: '/WalletBalance',
          name: 'WalletBalance',
          component: WalletBalance
      },
      {
          path: '/AddBankCard',
          name: 'AddBankCard',
          component: AddBankCard
      },
      {
          path: '/History',
          name: 'History',
          component: History
      },
      {
          path: '/AddCash',
          name: 'AddCash',
          component: AddCash
      },
      {
          path: '/AddCashQuickteller',
          name: 'AddCashQuickteller',
          component: AddCashQuickteller
      },
      {
          path: '/BankTransfer',
          name: 'BankTransfer',
          component: BankTransfer
      },
      {
          path: '/Settings',
          name: 'Settings',
          component: Settings
      },
      {
          path: '/CustomerService',
          name: 'CustomerService',
          component: CustomerService
      },
      {
          path: '/ChangePin',
          name: 'ChangePin',
          component: ChangePin
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
