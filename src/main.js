import Vue from 'vue'
import App from './App.vue'
import router from './router'
import style from './styles/index.less'

Vue.config.productionTip = false
// Vue.use(style)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
