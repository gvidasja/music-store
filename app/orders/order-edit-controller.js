/* @ngInject */
export function OrderController( OrdersService, MapsService, $routeParams, $location ) {
    var self = this;

    angular.extend( self, { submit } );

    function getOrder() {
        if( $routeParams.id ) {
            OrdersService.getOrder( $routeParams.id ).then( response => {
                self.model = response.data;
            }, showError );
        }

        MapsService.getOrderTypes().then( response => {
            self.orderTypes = response.data;
        }, showError );

        MapsService.getRecordLabels().then( response => {
            self.recordLabels = response.data;
        }, showError );

        MapsService.getArtists().then( response => {
            self.artists = response.data;
        }, showError );

        MapsService.getDiscounts().then( response => {
            self.discounts = response.data;
        }, showError );
    }

    function submit() {
        OrdersService.saveOrder( self.model ).then( () => {
            $location.path( '/orders' );
        }, showError );
    }

    function showError( error ) {
        self.error = error.data
    }

    getOrder();
}

