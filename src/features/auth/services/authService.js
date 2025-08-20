import axios from '@/app/config/axios'

export async function loginApi(credentials) {
    try {
        const { data } = await axios.post('/auth/login', credentials)
        return data
    } catch (err) {
        const status = err.response?.status
        let message = 'Login failed'

        if (status === 401) {
            message = 'Invalid username or password'
        } else if (status === 500) {
            message = 'Server error, please try again later'
        } else if (!err.response) {
            message = 'Network error, please check your connection'
        }

        throw new Error(message)
    }
}

export async function logoutApi() {
    try {
        await axios.post('/auth/logout')
    } catch (err) {
        throw new Error(err.response?.data?.message || 'Logout failed')
    }
}
