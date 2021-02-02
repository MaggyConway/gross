import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/ru-RU'
Vue.use(ElementUI, { locale })
// Vue.config.productionTip = false

import router from './router'
Vue.use(router)

import YmapPlugin from 'vue-yandex-maps'
const settings = {
  apiKey: '77a5e6ea-6171-44e6-bdac-228f66072a3e',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
}
Vue.use(YmapPlugin, settings)

import VueSocialSharing from 'vue-social-sharing'
Vue.use(VueSocialSharing)


import App from './App.vue'


new Vue({
  el: '#app',
  ElementUI,
  router,
  YmapPlugin,
  VueSocialSharing,
  render: h => h(App)
})
