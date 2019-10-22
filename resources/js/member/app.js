import router from './router'

// import store from './store'

require('../bootstrap');
// window.collect = require('collect.js')
window.Vue = require('vue');

import Appmember from '../components/member/Appmember.vue' 

// Vue.use(Loading.directive);
  
// Vue.prototype.$loading = Loading.service;
// Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$alert = MessageBox.alert;
// Vue.prototype.$confirm = MessageBox.confirm;
// Vue.prototype.$prompt = MessageBox.prompt;
// Vue.prototype.$notify = Notification;
// Vue.prototype.$message = Message;

const app = new Vue({
//   store,
  el: '#app',
  render:h => h(Appmember),
  router
}).$mount('#app');