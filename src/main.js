import { Button, Col, Row } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import Vue from 'vue'
import App from './App.vue'

Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
