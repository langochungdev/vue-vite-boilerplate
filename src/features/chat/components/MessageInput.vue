<template>
    <form class="message-input" @submit.prevent="handleSend">
        <input v-model="text" placeholder="Type a message..." />
        <button type="submit">Send</button>
    </form>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    onSend: { type: Function, required: true },
})

const text = ref('')

function handleSend() {
    if (text.value.trim()) {
        props.onSend(text.value)
        text.value = ''
    }
}
</script>

<style scoped>
.message-input {
    display: flex;
    gap: 5px;
}
.message-input input {
    flex: 1;
}
</style>
