import * as actions from './actions'
import * as getters from './getters'
import state from './state'

const mutations = {
  setData (state, { data }) {
    state.data = data
  },
  setDomainSearched (state, { domain }) {
    state.domainSearched = domain
  },
  setPrefixes (state, { prefixes }) {
    state.prefixes = prefixes
  },
  setSuffixes (state, { suffixes }) {
    state.suffixes = suffixes
  },
  setSegments (state, { names, domains }) {
    let segments = new Array()
    names.forEach(function (name) {
      segments.push({
        name: name,
        domains: []
      })
    })
    domains.forEach(function (domain) {
      let segment = segments[domain.position]
      if(segment.domains.length < 6)
        segments[domain.position].domains.push(domain)
    })

    state.segments = []
    segments.forEach(function (segment) {
      // if(segment.domains.length > 0)
        state.segments.push(segment)
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
