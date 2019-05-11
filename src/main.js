import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
// import iView from 'iview'
import './theme/index.less'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
// Vue.use(iView)
Vue.use(Element)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
