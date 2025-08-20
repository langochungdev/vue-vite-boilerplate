<template>
    <button class="btn btn-secondary" @click="toggle">
        {{ dark ? 'Light Mode' : 'Dark Mode' }}
    </button>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useThemeStore } from '@/app/store/useThemeStore'

const theme = useThemeStore()
const { dark } = storeToRefs(theme)

function toggle() {
    theme.toggle()
}
</script>
