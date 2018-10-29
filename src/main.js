import Vue from 'vue'
import App from './App.vue'

import { SpeakerCard } from '../dist/voxy.common.js'

Vue.config.productionTip = false

Vue.use(SpeakerCard)
import '../dist/voxy.css'

new Vue({
  render: h => h(App),
}).$mount('#app')
