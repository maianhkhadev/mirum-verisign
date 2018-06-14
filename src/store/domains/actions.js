import axios, { mirum } from '@/plugins/axios'

export function search ({ commit, state }, { name = '' }) {

  mirum.post('/search', { keyword: name })
  .then(function (res) {
    console.log(res)
  })
  .catch(function (error) {
    console.log(error)
  })

  axios.get(`/bulk-check?names=${name}&tlds=com&include-registered=true`)
  .then(function (res) {
    commit('setDomainSearched', res.data.results[0])
  })
  .catch(function (error) {

  })

  axios.get(`/suggest?name=${name}&tlds=com`)
  .then(function (res) {

  })
  .catch(function (error) {

  })

  axios.get(`/add-prefix?name=${name}&tlds=com&max-results=6`)
  .then(function (res) {
    commit('setPrefixes', { prefixes: res.data.results })
  })
  .catch(function (error) {

  })

  axios.get(`/add-suffix?name=${name}&tlds=com&max-results=6`)
  .then(function (res) {
    commit('setSuffixes', { suffixes: res.data.results })
  })
  .catch(function (error) {

  })

  axios.get(`/segment?name=${name}`)
  .then(function (segment) {

    axios.get(`/spin-word?name=${segment.data.segmentedName.join(',')}&tlds=com`)
    .then(function (res) {
      commit('setSegments', { names: res.data.segmentation, domains: res.data.results })
    })
  })
  .catch(function (error) {

  })
}
