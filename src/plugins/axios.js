import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://sugapi.verisign-grs.com/ns-api/2.0/',
  // withCredentials: true,
  headers: { 'X-Requested-With': 'XMLHttpRequest' }
})

export const mirum = axios.create({
  baseURL: 'http://dev5.sofresh.vn/verisign/backend/public/api/',
  // withCredentials: true,
  headers: {
    'api-key': 'test123',
    'X-Requested-With': 'XMLHttpRequest'
  }
})

export default instance
