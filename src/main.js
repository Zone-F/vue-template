import Vue from 'vue'
import App from './App.vue'
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import lazyLoad from '@/directive/lazyLoad'
Vue.use(lazyLoad)

Vue.config.productionTip = false
// Vue.use(Vuex)
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
