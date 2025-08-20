<template>
    <div class="container mt-4">
        <form class="card p-3" @submit.prevent="handleSubmit">
            <div class="mb-3">
                <input
                    v-model="form.username"
                    type="text"
                    class="form-control"
                    :placeholder="$t('username')"
                />
            </div>
            <div class="mb-3">
                <input
                    v-model="form.password"
                    type="password"
                    class="form-control"
                    :placeholder="$t('password')"
                />
            </div>

            <button type="submit" class="btn btn-primary w-100">
                {{ $t('login') }}
            </button>

            <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>
        </form>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useAuth } from '../composables/useAuth'

const { login, error } = useAuth()
const form = reactive({ username: '', password: '' })

const handleSubmit = () => login(form)
</script>
