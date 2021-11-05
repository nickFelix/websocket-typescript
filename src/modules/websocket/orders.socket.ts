import { Socket } from "socket.io";
import MySocketInterface from "./mySocketInterface";

class OrdersSocket implements MySocketInterface {

    handleConnection(socket: Socket) {

        socket.emit('ping', 'Hi! I am a live socket connection');

    }

    middlewareImplementation(socket: Socket, next) {
        //Implement your middleware for orders here
        return next();
    }
}

export default OrdersSocket;