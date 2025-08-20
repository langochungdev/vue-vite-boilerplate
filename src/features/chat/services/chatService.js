// features/chat/services/chatService.js
import { Client } from '@stomp/stompjs'

let stompClient = null

export function connectSocket(onMessage) {
    stompClient = new Client({
        brokerURL: 'ws://localhost:8080/ws', // WebSocket endpoint từ backend
        reconnectDelay: 5000, // tự reconnect sau 5s
        onConnect: () => {
            stompClient.subscribe('/topic/messages', (msg) => {
                onMessage(JSON.parse(msg.body))
            })
        },
    })

    stompClient.activate()
}

export function sendMessage(message) {
    if (stompClient && stompClient.connected) {
        stompClient.publish({
            destination: '/app/chat',
            body: JSON.stringify(message),
        })
    }
}

export function disconnectSocket() {
    if (stompClient) stompClient.deactivate()
}
