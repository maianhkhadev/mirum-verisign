import axios, { mirum } from '@/plugins/axios'

// Spin Word(spin-word) - This call is for auto suggestion for up to 5 keywords break.
// position => 0 //This is dynamic
// tlds => com
// lang => eng
// use-idns => false
// max-results => 100
// include-registered => true
// sensitive-content-filter => true
// Suggest(suggest) - This call has been made for 6 or more words (As per youcouldbe campaign)
// tlds => com
// use-idns => false
// use-dashes => true
// max-results => 100
// include-registered => true
// sensitive-content-filter => true
// lang => eng
// Prefix(add-prefix)
// tlds => com
// vocabulary => @all
// use-idns => false
// use-dashes => false
// max-results => 100
// include-registered => true
// sensitive-content-filter => true
// lang => eng
// Suffix(add-suffix)
// tlds => com
// vocabulary => @all
// use-idns => false
// use-dashes => false
// max-results => 100
// include-registered => true
// sensitive-content-filter => true
// lang => eng

export function search ({ commit, state }, { name = '' }) {

  mirum.post('/search', { keyword: name })
  .then(function (res) {
    console.log(res)
  })
  .catch(function (error) {
    console.log(error)
  })

  mirum.get('/visitor/check')
  .then(function (res) {
    // "status": 1,
    // "msg": "New Visitor",
    // "data": {
    //     "visitorId": "15305238197725",
    //     "first_time": 0,
    //     "partners": {
    //         "MatBao": 5,
    //         "PA": 4
    //     }
    // }
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

  axios.get(`/suggest?name=${name}&tlds=com&lang=eng`)
  .then(function (res) {

  })
  .catch(function (error) {

  })

  axios.get('/add-prefix', {
    params: {
      'vocabulary': '@prefixes',
      'use-idns': false,
      'use-dashes': false,
      'max-results': 100,
      'include-registered': true,
      'sensitive-content-filter': true,
      'tlds': 'com',
      'lang': 'eng',
      'name': name
    }
  })
  .then(function (res) {
    commit('setPrefixes', { prefixes: res.data.results })
  })
  .catch(function (error) {

  })

  axios.get('/add-suffix', {
    params: {
      'vocabulary': '@suffixes',
      'use-idns': false,
      'use-dashes': false,
      'max-results': 100,
      'include-registered': true,
      'sensitive-content-filter': true,
      'tlds': 'com',
      'lang': 'eng',
      'name': name
    }
  })
  .then(function (res) {
    commit('setSuffixes', { suffixes: res.data.results })
  })
  .catch(function (error) {

  })

  axios.get(`/segment?name=${name}`)
  .then(function (segment) {

    commit('setSegments', { names: segment.data.segmentedName })

    segment.data.segmentedName.forEach(function (name, index) {

      axios.get('/spin-word', {
        params: {
          'use-idns': false,
          'max-results': 100,
          'include-registered': true,
          'sensitive-content-filter': true,
          'tlds': 'com',
          'lang': 'eng',
          'position': index,
          'name': segment.data.segmentedName.join(',')
        }
      })
      .then(function (res) {
        commit('allocationDomains', { domains: res.data.results })
      })
    })
  })
  .catch(function (error) {

  })
}
