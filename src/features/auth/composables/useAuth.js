import { computed } from 'vue'
import { useAuthStore } from '../store/useAuthStore'
import { storeToRefs } from 'pinia'

export function useAuth() {
    const authStore = useAuthStore()
    const { user, token, error } = storeToRefs(authStore)
    const isLoggedIn = computed(() => !!user.value)

    return {
        user,
        token,
        error,
        isLoggedIn,
        login: authStore.login,
        logout: authStore.logout,
    }
}
