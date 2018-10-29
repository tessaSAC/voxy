import Vue from 'vue'
import App from './App.vue'

import voxy from '../dist/voxy.common.js'
import '../dist/voxy.css'

Vue.config.productionTip = false

Vue.use(voxy)

new Vue({
  render: h => h(App),
}).$mount('#app')
