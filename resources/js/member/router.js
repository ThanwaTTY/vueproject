import Vue from 'vue'
import VueRouter from 'vue-router'
// import { routes as routes } from '../app/index'

import Main from '../components/member/Appmember.vue' 
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Content },
  // { path: '/', name:'/' , component: Home },
  // { path: '/', component: MemInfo },
  //  ---------- members-setup -----------
]

// Vue.use(Vuetify)

const routes = [
  { path: '/', component: Main },
]

const router = new VueRouter({
  routes: routes 
})

export default router