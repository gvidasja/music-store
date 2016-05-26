/* @ngInject */
export function DiscountController( DiscountsService, MapsService, $routeParams, $location ) {
    var self = this;

    angular.extend( self, { submit } );

    function getDiscount() {
        if( $routeParams.id ) {
            DiscountsService.getDiscount( $routeParams.id ).then( response => {
                self.model = response.data;
            }, showError );
        }

        MapsService.getDiscountTypes().then( response => {
            self.discountTypes = response.data;
        }, showError );
    }

    function submit() {
        DiscountsService.saveDiscount( self.model ).then( () => {
            $location.path( '/discounts' );
        }, showError );
    }

    function showError( error ) {
        self.error = error.data
    }

    getDiscount();
}

