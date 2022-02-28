import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://yukawa-dev.axalize.vn/',
  timeout: 60000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
})

const setToken = () => {
  const token = localStorage.token
  api.defaults.headers.common.Authorization = `Bearer ${token}`
}

setToken()
