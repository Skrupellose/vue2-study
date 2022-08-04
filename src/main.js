import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { focus } from './utils/directive'
import('@/assets/less/init.less')
// vue是否在启动时生成生产提示
Vue.config.productionTip = false
Vue.use(focus)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
