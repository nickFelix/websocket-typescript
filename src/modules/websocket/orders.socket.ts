import { Socket } from "socket.io";
import MySocketInterface from "./mySocketInterface";

class OrdersSocket implements MySocketInterface {

    handleConnection(socket: Socket) {

        socket.on('ping', function (msg:any) {
            console.log(msg);
        });

    }

    middlewareImplementation(socket: Socket, next) {
        //Implement your middleware for orders here
        return next();
    }
}

export default OrdersSocket;