import { Button, Card, Col, DatePicker, Form, FormItem, Input, Menu, MenuItem, MessageBox, Option, Row, Select, Submenu } from 'element-ui'
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
Vue.use(Card)
Vue.use(Select)
Vue.use(Option)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(DatePicker)

Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = MessageBox

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
