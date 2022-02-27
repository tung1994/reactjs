import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.REACT_APP_ENV === 'dev' ? 'http://localhost:3000/' : '/',
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
