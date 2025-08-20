<template>
    <div class="chat-window">
        <div v-for="(msg, i) in messages" :key="i" class="chat-message">
            <strong>{{ msg.user }}:</strong>
            {{ msg.text }}
        </div>
    </div>
</template>

<script setup>
defineProps({ messages: { type: Array, required: true } })
</script>

<style scoped>
.chat-window {
    border: 1px solid #ccc;
    padding: 10px;
    height: 300px;
    overflow-y: auto;
}
.chat-message {
    margin: 4px 0;
}
</style>
