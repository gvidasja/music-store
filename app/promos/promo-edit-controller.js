/* @ngInject */
export function PromoController( PromosService, MapsService, $routeParams, $location ) {
    var self = this;

    angular.extend( self, { submit, disabled: false } );

    function getPromo() {
        if( $routeParams.id ) {
            PromosService.getPromo( $routeParams.id ).then( response => {
                self.model = response.data;
                self.disabled = !!self.model.code;
            }, showError );
        }

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

