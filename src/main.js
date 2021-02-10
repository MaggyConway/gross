import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/ru-RU'
Vue.use(ElementUI, { locale })
// Vue.config.productionTip = false

import router from './router'
Vue.use(router)

import VueSocialSharing from 'vue-social-sharing'
Vue.use(VueSocialSharing)


import App from './App.vue'


new Vue({
  el: '#app',
  ElementUI,
  router,
  VueSocialSharing,
  render: h => h(App)
})
