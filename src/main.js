// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'
import Vuex from 'vuex'
import store from './vuex/store'



Vue.prototype.$axios = axios

Vue.use(Vuex)
Vue.use(ElementUI)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
	console.log(sessionStorage.getItem('user'));
	console.log(JSON.parse(sessionStorage.getItem('user')));
	if (to.meta.requireAuth && JSON.parse(sessionStorage.getItem('user'))==null) {
		next({
			path: '/login',
			query: {redirect: to.fullPath}
		})
	} else {
		next();
	}
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	store,
	router,
	template: '<App/>',
	components: { App }
})
