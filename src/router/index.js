import Vue from 'vue'
import router from 'vue-router'
import MainContent from '../components/MainContent'
import Interview from '../components/Interview'

Vue.use(router)

export default new router({
	routes: [
		{
			path: '/',
			name: 'MainContent',
			component: MainContent
		},
		{
			path: '/interview',
			name: 'Interview',
			component: Interview
		}
	]
})