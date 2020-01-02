import 'view-design/dist/styles/iview.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'view-design'
import MQuillEditor from 'vue-m-quill-editor'
import ajax from '@/util/ajax'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(iView)
Vue.use(MQuillEditor)
Vue.config.productionTip = false
Vue.prototype.$http = ajax
Vue.use(VueAwesomeSwiper /* { default global options } */)
// Vue.use(vcolorpicker)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
