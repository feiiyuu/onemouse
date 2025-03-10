import { Manager } from "socket.io-client";
// import { usePeerStore } from '../../store/index'
import { usePeerStore } from '../../store/app'

function CreateIOClient(host_name = "192.168.1.1", port = 9527, password: number) {
    const manage = new Manager(`${host_name}:${port}`, {
        transports: ["websocket", "polling"],
        reconnectionAttempts: 3,
    })
    const socket = manage.socket(`/`, {
        auth: {
            password
        }
    })

    console.log(`client socket io is running!`);

    const peerStore = usePeerStore()
    peerStore.updateClientSocket(socket)
    
    return socket
}

export {
    CreateIOClient
}