import { Socket } from "socket.io";
import MySocketInterface from "./mySocketInterface";

class OrdersSocket implements MySocketInterface {

    handleConnection(socket: Socket) {

        socket.emit('ping', 'HAHA fart!');

    }

    middlewareImplementation(socket: Socket, next) {
        //Implement your middleware for orders here
        return next();
    }
}

export default OrdersSocket;