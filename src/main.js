// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Root from './Root'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/**
* jQuery and Bootstrap includes
*/
window.$ = window.jQuery = require('jquery')
window.Popper = require('popper.js')
require('bootstrap')

/* eslint-disable no-new */
new Vue({
  el: '#root',
  router,
  store,
  components: { Root },
  template: '<Root />'
})
