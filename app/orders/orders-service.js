/* @ngInject */
export function OrdersService( $http ) {
    return {
        getOrders: () => $http.get( '/orders' ),
        getOrder: ( id ) => $http.get( `/orders/${id}` ),
        saveOrder: ( order ) => $http.post( '/orders', order ),
        deleteOrder: ( order ) => $http.delete( `/orders/${order.id}` )
    }
}