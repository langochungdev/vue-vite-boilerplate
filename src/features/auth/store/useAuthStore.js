import { defineStore } from 'pinia'
import { loginApi, logoutApi } from '../services/authService'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: null,
        error: null,
    }),
    actions: {
        async login(credentials) {
            try {
                const data = await loginApi(credentials)
                this.user = data.user
                this.token = data.token
                this.error = null
            } catch (err) {
                this.error = err.message
            }
        },
        async logout() {
            try {
                await logoutApi()
                this.user = null
                this.token = null
                this.error = null
            } catch (err) {
                this.error = err.message
                throw err
            }
        },
    },
})
