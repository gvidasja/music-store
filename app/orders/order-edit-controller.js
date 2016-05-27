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

        MapsService.getUsers().then( response => {
            self.users = response.data;
        }, showError );

        MapsService.getAlbums().then( response => {
            self.albums = response.data;
        }, showError );

        MapsService.getPromos().then( response => {
            self.promos = response.data;
        }, showError );
    }

    function submit() {
        var date = self.model.date || new Date(Date.now());
        self.model.date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

        OrdersService.saveOrder( self.model ).then( () => {
            $location.path( '/orders' );
        }, showError );
    }

    function showError( error ) {
        self.error = error.data
    }

    getOrder();
}

