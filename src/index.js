import Vue from 'vue'
import App from './app.vue'
import './assets/styles/global.styl'
Vue.config.devtools = true
const root = document.createElement('div')
document.body.appendChild(root)
new Vue({
    // 将App挂载到html
  render:(h) => h(App)

}).$mount(root)