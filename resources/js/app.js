import App from './components/member/Appmember.vue'
// import router from './router/index.js'

window.Vue = require('vue');

require('./bootstrap');



const app = new Vue({
	el: '#app',
	render: h => h(App),
    // router
}); 