// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import fontawesome from '@fortawesome/fontawesome'
// import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'

Vue.config.productionTip = false
Vue.use(ElementUI, {size: 'samll', zIndex: 3000}) // size组件默认尺寸，弹框的初始z-index
fontawesome.library.add(solid)
fontawesome.library.add(regular)
fontawesome.library.add(brands)

// Vue.component('fa-icon', FontAwesomeIcon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
