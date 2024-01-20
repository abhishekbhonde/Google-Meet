import { Server } from "socket.io";

const SocketHandler = (req, res) => {
    if (res.socket.server.io) {
        console.log("Socker already running");
    }
    else {
        const io = new Server(res.socket.server)
        res.socket.server.io = io

        io.on('connection', (socket) => {
            console.log("Server is esatblished")
        })
    }
    res.send();
}

export default SocketHandler;