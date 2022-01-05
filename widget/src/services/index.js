import axios from 'axios'

const API_ENVS = {
  production: 'https://backend-curso-vue3.vercel.app/',
  development: '',
  local: 'http://localhost:3000'
}

const httpClient = axios.create({
  baseURL: API_ENVS[process.env.NODE_ENV] || API_ENVS.local
})

httpClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const canThrowError = error.request.status === 0 || error.request.status === 500

    if (canThrowError) {
      throw new Error(error.mesage)
    }

    return error
  }
)

export default {}
