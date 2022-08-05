import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { focus } from '@/utils/directive'
import Toast from "@/plugins/toast"
import('@/assets/less/init.less')
import('@/plugins/toast/toast.css')
// vue是否在启动时生成生产提示
Vue.config.productionTip = false
Vue.use(focus)
Vue.use(Toast, {
  defaultType: 'center',
  duration: '5000',
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
