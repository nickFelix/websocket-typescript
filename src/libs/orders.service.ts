import Websocket from "../modules/websocket/websocket";

class OrdersService {

    getOrders() {

    }

    public insertOrder(order) {
        //save in your database

        //send the update to the browser
        const io = Websocket.getInstance();
        io.of('orders').emit('orders_updated', { data: [order] });
    }
}

export default OrdersService;