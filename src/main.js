import Vue from 'vue'
import App from './App.vue'
import ProductZoomer from 'vue-product-zoomer'

Vue.config.productionTip = false
Vue.use(ProductZoomer)

new Vue({
  render: h => h(App),
}).$mount('#app')
