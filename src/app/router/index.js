import { createRouter, createWebHistory } from 'vue-router'
import { LoginPage } from '@/features/auth'
import { ChatPage } from '@/features/chat'
import { chatGuard } from './guards/chatGuard'

const routes = [
    { path: '/login', component: LoginPage },
    { path: '/chat', component: ChatPage, beforeEnter: chatGuard },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
