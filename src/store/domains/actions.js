import axios from '@/plugins/axios'

function transform (rawData) {
  return {
    seo: {
      title: '',
      description: rawData.meta_description
    },
    id: rawData.id,
    alias: rawData.alias,
    title: rawData.title,
    content: rawData.description ? rawData.description : rawData.shortDescription,
    thumbnail: {
      src: rawData.image,
      alt: ''
    }
  }
}

export function search ({ commit, state }, { name = '' }) {

  axios.get(`/bulk-check?names=${name}&tlds=com&include-registered=true`)
  .then(function (res) {
    commit('setDomainSearched', { domain: res.data.results[0] })
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
  .then(function (sasa) {

    axios.get(`/spin-word?name=${sasa.data.segmentedName.join(',')}&tlds=com`)
    .then(function (res) {
      commit('setSegments', { names: res.data.segmentation, domains: res.data.results })
    })
    .catch(function (error1) {

    })
  })
  .catch(function (error) {

  })
}
