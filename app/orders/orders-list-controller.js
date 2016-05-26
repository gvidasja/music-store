/* @ngInject */
export function OrdersController( OrdersService ) {
    var self = this;

    angular.extend( self, {
        list: [],
        deleteOrder: deleteOrder,
        error: null
    } );

    function deleteOrder( order ) {
        OrdersService.deleteOrder( order ).then( () => {
            getOrders();
            self.error = null;
        }, showError );
    }

    function getOrders() {
        OrdersService.getOrders().then( ( response ) => {
            self.list = response.data;
            self.error = null;
        }, showError );
    }

    function showError( error ) {
        self.error = error.data;
    }

    getOrders();
}

