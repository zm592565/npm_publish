import Vue from 'vue'
import App from './App.vue'
import ChartG2 from './../packages/index'

Vue.config.productionTip = false
Vue.use(ChartG2)
new Vue({
  render: h => h(App),
}).$mount('#app')
