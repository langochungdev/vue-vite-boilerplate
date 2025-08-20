<template>
    <div class="chat-page">
        <h1>Chat</h1>
        <ChatWindow :messages="messages" />
        <MessageInput :on-send="handleSend" />
    </div>
</template>

<script setup>
import ChatWindow from '../components/ChatWindow.vue'
import MessageInput from '../components/MessageInput.vue'
import { useChat } from '../composables/useChat'

const { messages, sendMessage } = useChat()

function handleSend(text) {
    sendMessage({ user: 'Me', text })
}
</script>
