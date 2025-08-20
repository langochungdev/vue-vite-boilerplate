<template>
    <div class="d-flex gap-2">
        <button class="btn btn-sm btn-outline-primary" @click="setLang('en')">
            EN
        </button>
        <button class="btn btn-sm btn-outline-primary" @click="setLang('vi')">
            VI
        </button>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

function setLang(lang) {
    locale.value = lang
    localStorage.setItem('lang', lang)
}
</script>
