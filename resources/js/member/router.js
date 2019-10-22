import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
// import { routes as routes } from '../app/index'


import Page from '../components/member/page/page.vue' 
import Page1 from '../components/member/page/page1.vue' 
import Page2 from '../components/member/page/page2.vue'

Vue.use(VueRouter)

// Vue.use(Vuetify)
// const pageWhiteList = ['/', '/page2']

const routes = [
  { 
    path: '/page',
    component: Page,
    children: [
      { path: '/page1', component: Page1 },
      { path: '/page2', component: Page2 },
    ]
   },
  // { path: '/page1', component: Page1 },
  // { path: '/page2', component: Page2 },
]

const router = new VueRouter({
  routes: routes 
})

Window.VueRouter = router;

// router.beforeEach((to, from, next) => {

  let _isAuthorize = store.state.loggedIn;

  // if (to.matched.some(record => record.meta.requiresAuth)) {
    alert(_isAuthorize);
    router.push('/')
    // if (_isAuthorize) {
    //   next()
    // } else {
    //   next({
    //     path: '/signin',
    //     query: {redirect: to.fullPath}
    //   })
    // }
  // } else {
  //   console.log('here');
  //   next();
   
  // }

// })

export default router