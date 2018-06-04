import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://sugapi.verisign-grs.com/ns-api/2.0/',
  // withCredentials: true,
  headers: { 'X-Requested-With': 'XMLHttpRequest' }
})

export default instance
