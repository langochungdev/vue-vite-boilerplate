import axios from 'axios'

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080',
    timeout: 10000,
})

// có thể thêm interceptor cho token ở đây
// instance.interceptors.request.use(config => { ... })

export default instance
