import * as actions from './actions'
import * as getters from './getters'
import state from './state'

const mutations = {
  setData (state, { data }) {
    state.data = data
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
