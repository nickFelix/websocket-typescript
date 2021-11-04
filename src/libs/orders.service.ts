import Websocket from "../modules/websocket/websocket";

class OrdersService {

    public insertOrder(order) {
        //save in your database

        //send the update to the browser
        this.updateSockets(order);
    }

    private updateSockets(order) {
        const io = Websocket.getInstance();
        io.of('orders').emit('orders_updated', { data: [order] });
    }
}

export default OrdersService;