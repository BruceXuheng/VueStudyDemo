// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//>cnpm install vue-router --save

/* eslint-disable no-new */
//new Vue({
//el: '#app',
//router,
//template: '<App/>',
//components: { App }
//})


import Vue from 'vue'
//import App from './App'
import VueRoter from 'vue-router'
//import router from './router'
	import test1 from './components/test1'
	import usershow from './components/usershow'


Vue.use(VueRoter)

Vue.config.productionTip = false


//设置路由

const router1 = new VueRouter({
	mode:"history",
	base:__dirname,
	routes:[
		{path:"/",component:usershow},
		{path:"/test1",component:test1}
	]
})

new Vue({
	router1,
	template:`	
		<div id="app">
			<ul>
			
			<li>
				<router-link to="/">UserShow</router-link>
				<router-link to="/test1">test1</router-link>
			</li>

			</ul>
			<router-view></router-view>
		</div>
		
		`
}).$mount('#app')

