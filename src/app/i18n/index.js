import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import vi from './locales/vi.json'

const savedLang = localStorage.getItem('lang') || 'en'

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: savedLang,
    fallbackLocale: 'en',
    messages: { en, vi },
})

export default i18n
