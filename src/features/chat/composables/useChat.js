import { onMounted, onUnmounted } from 'vue'
import { useChatStore } from '../store/useChatStore'
import {
    connectSocket,
    sendMessage,
    disconnectSocket,
} from '../services/chatService'

export function useChat() {
    const chatStore = useChatStore()

    onMounted(() => {
        connectSocket((msg) => {
            chatStore.addMessage(msg)
        })
    })

    onUnmounted(() => {
        disconnectSocket()
    })

    return {
        messages: chatStore.messages,
        sendMessage,
    }
}
