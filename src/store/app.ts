import { defineStore } from "pinia";
import { ref } from 'vue'
import { Socket } from "socket.io-client";
const usePeerStore = defineStore('peer', () => {
    const ServerPeer = ref<RTCPeerConnection>(undefined)
    const ClientPeer = ref<RTCPeerConnection>(undefined)
    const ServerVideoPeer = ref<RTCPeerConnection>(undefined)
    const ClientVideoPeer = ref<RTCPeerConnection>(undefined)
    // client socket
    const ClientSocket = ref<Array<Socket>>([])
    function updateClientSocket(socket: Socket | undefined) {
        if (!socket) {
            ClientSocket.value.forEach((s) => (s && s.disconnect()))
            ClientSocket.value.length = 0
            return
        }
        ClientSocket.value.push(socket)
    }

    return {
        ServerPeer,
        ClientPeer,
        ServerVideoPeer,
        ClientVideoPeer,
        ClientSocket,
        updateClientSocket,
    }
})

export { usePeerStore }
