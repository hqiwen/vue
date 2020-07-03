import { Button, Col, Menu, MenuItem, Row, Submenu } from 'element-ui'
import 'element-ui/lib/theme-chalk/display.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import Vue from 'vue'
import App from './App.vue'

Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
