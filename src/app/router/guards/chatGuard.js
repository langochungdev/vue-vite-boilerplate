import { useAuthStore } from '@/features/auth'

export function chatGuard(to, from, next) {
    const auth = useAuthStore()

    if (!auth.user) {
        // chưa login → chuyển về trang login
        return next('/login')
    }

    return next()
}
