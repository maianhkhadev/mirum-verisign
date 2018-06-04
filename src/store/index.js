import Vue from 'vue'
import Vuex from 'vuex'

import domains from './domains'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    domains
  }
})

export default store
