const socket = io("http://localhost:3000/orders");

socket.on('connect', () => {
    socket.emit('request_orders');
});

socket.on('orders_updated', (orders) => {
    populateTable(orders.data);
})

socket.on('disconnect', () => {
    console.error('Ops, something went wrong');
});

function populateTable(data) {
    data.forEach(order => {
        document.querySelector('#orders-table tbody')
            .insertAdjacentHTML('afterend', createTableRow(order));
    });
}

function createTableRow(order) {
    let tRow = `<tr>
            <th scope="row">${order.id}</th>
            <td>${order.date}</td>
            <td>${order.total}</td>
            <td>${order.status}</td>
        </tr>`;

    return tRow;

}