import Vue from 'vue'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'

const mutations = {
  setDomainSearched (state, { name, availability }) {
    Vue.set(state.domainSearched, 'name', name)
    Vue.set(state.domainSearched, 'availability', availability)
  },
  setPrefixes (state, { prefixes }) {
    state.prefixes = prefixes
  },
  setSuffixes (state, { suffixes }) {
    state.suffixes = suffixes
  },
  setSegments (state, { names }) {
    let segments = new Array()
    
    names.forEach(function (name) {
      segments.push({
        name: name,
        domains: []
      })
    })

    state.segments = segments
  },
  allocationDomains (state, { domains }) {

    domains.forEach(function (domain) {
      let segment = state.segments[domain.position]
      segment.domains.push(domain)
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
