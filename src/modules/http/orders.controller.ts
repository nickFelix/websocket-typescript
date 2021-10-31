import { JsonController, Post, Body } from "routing-controllers";
import OrdersService from "../../libs/orders.service";

@JsonController('/orders', { transformResponse: true })
class OrdersController {

    @Post('/')
    insertOrder(@Body() order: any) {
        let orderService = new OrdersService();
        orderService.insertOrder(order);

        return {
            status: 200,
            success: true
        };
    }
}

export default OrdersController;