import { Server } from 'socket.io';

const WEBSOCKET_CORS = {
    origin: "*",
    methods: ["GET", "POST"]
}

class Websocket extends Server {

    private static io: Websocket;

    constructor(httpServer) {
        super(httpServer, {
            cors: WEBSOCKET_CORS
        });
    }

    public static getInstance(httpServer?): Websocket {

        if (!Websocket.io) {
            Websocket.io = new Websocket(httpServer);
        }

        return Websocket.io;

    }
}

export default Websocket;