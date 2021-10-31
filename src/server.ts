require('dotenv').config()
import 'reflect-metadata';

import {
    createExpressServer,
    RoutingControllersOptions
} from 'routing-controllers'
import { createServer } from 'http';

import Websocket from './modules/websocket/websocket';
import OrdersSocket from './modules/websocket/orders.socket';

const port = process.env.APP_PORT || 3000;

const routingControllerOptions: RoutingControllersOptions = {
    routePrefix: 'v1',
    controllers: [`${__dirname}/modules/http/*.controller.*`],
    classTransformer: true,
    cors: true,
    defaultErrorHandler: true
}

const app = createExpressServer(routingControllerOptions);
const httpServer = createServer(app);
const io = Websocket.getInstance(httpServer);

io.initializeHandlers([
    { path: '/orders', handler: new OrdersSocket() }
]);

httpServer.listen(port, () => {
    console.log(`This is working in port ${port}`);
});