<template>
    <div class="container py-3">
        <ThemeToggle />
        <LanguageToggle />
        <router-view />
    </div>
</template>

<script setup>
import ThemeToggle from '@/shared/components/ThemeToggle.vue'
import LanguageToggle from '@/shared/components/LanguageToggle.vue'
</script>
