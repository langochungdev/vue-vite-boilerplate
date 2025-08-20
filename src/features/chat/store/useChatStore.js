import { defineStore } from 'pinia'

export const useChatStore = defineStore('chat', {
    state: () => ({
        messages: [],
    }),
    actions: {
        addMessage(msg) {
            this.messages.push(msg)
        },
        clearMessages() {
            this.messages = []
        },
    },
})
