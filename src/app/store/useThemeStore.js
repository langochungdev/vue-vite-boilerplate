import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
    state: () => {
        const saved = localStorage.getItem('theme')
        const dark = saved ? saved === 'dark' : false

        document.documentElement.setAttribute(
            'data-bs-theme',
            dark ? 'dark' : 'light',
        )

        return { dark }
    },
    actions: {
        toggle() {
            this.dark = !this.dark
            const theme = this.dark ? 'dark' : 'light'
            localStorage.setItem('theme', theme)
            document.documentElement.setAttribute('data-bs-theme', theme)
        },
    },
})
