/* @ngInject */
export function PaymentController( PaymentsService, MapsService, $routeParams, $location ) {
    var self = this;

    angular.extend( self, { submit } );

    function getPayment() {
        if( $routeParams.id ) {
            PaymentsService.getPayment( $routeParams.id ).then( response => {
                self.model = response.data;
            }, showError );
        }

        MapsService.getAlbumTypes().then( response => {
            self.paymentTypes = response.data;
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
        PaymentsService.savePayment( self.model ).then( () => {
            $location.path( '/payments' );
        }, showError );
    }

    function showError( error ) {
        self.error = error.data
    }

    getPayment();
}

