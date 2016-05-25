/* @ngInject */
export function PromoController( PromosService, MapsService, $routeParams, $location ) {
    var self = this;

    angular.extend( self, { submit } );

    function getPromo() {
        if( $routeParams.id ) {
            PromosService.getPromo( $routeParams.id ).then( response => {
                self.model = response.data;
            }, showError );
        }

        MapsService.getPromoTypes().then( response => {
            self.promoTypes = response.data;
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
        PromosService.savePromo( self.model ).then( () => {
            $location.path( '/promos' );
        }, showError );
    }

    function showError( error ) {
        self.error = error.data
    }

    getPromo();
}

