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

  axios.get(`/suggest?name=${name}&tlds=com`)
  .then(function (res) {
    console.log(res.data)
  })
  .catch(function (error) {

  })

  axios.get(`/add-prefix?name=${name}&tlds=com&max-results=6`)
  .then(function (res) {
    console.log(res.data)
  })
  .catch(function (error) {

  })

  axios.get(`/add-suffix?name=${name}&tlds=com&max-results=6`)
  .then(function (res) {
    console.log(res.data)
  })
  .catch(function (error) {

  })

  axios.get(`/segment?name=${name}`)
  .then(function (res) {

    axios.get(`/spin-word?name=${res.data.segmentedName.join(',')}&tlds=com`)
    .then(function (sasa) {
      console.log(sasa.data)
    })
    .catch(function (error1) {

    })
  })
  .catch(function (error) {

  })
}
