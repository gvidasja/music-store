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
        DiscountsService.saveDiscount( self.model ).then( () => {
            $location.path( '/discounts' );
        }, showError );
    }

    function showError( error ) {
        self.error = error.data
    }

    getDiscount();
}

