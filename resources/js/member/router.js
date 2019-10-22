import Vue from 'vue'
import VueRouter from 'vue-router'
// import { routes as routes } from '../app/index'

// import Main from '../components/member/Appmember.vue' 
import Page from '../components/member/page/page.vue' 
import Page1 from '../components/member/page/page1.vue' 
import Page2 from '../components/member/page/page2.vue' 

// import Analytics from '../DemoPages/Dashboards/Analytics.vue' 

Vue.use(VueRouter)

// const routes = [
//   { path: '/', component: Content },
//   { path: '/test', component: Test },
//   // { path: '/', name:'/' , component: Home },
//   // { path: '/', component: MemInfo },
//   //  ---------- members-setup -----------
  
//   // { path: '/analytics', name:'analytics' , component: Analytics },
// ]

// Vue.use(Vuetify)

const routes = [
  // { path: '/', component: Main },
    // { path: '/', component: Page },
    { path: '/page', component: Page },
    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page2 },
]

const router = new VueRouter({
  routes: routes 
})

export default router